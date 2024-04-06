`use client`;
import { Cerveza } from "@/interfaces/interfaces";
import Link from "next/link";
import React, { cache, useEffect } from "react";



interface Props {
  cervezas: Cerveza[];
  setCervezas: React.Dispatch<React.SetStateAction<Cerveza[]>>;
  
}
const Cards = ({ cervezas, setCervezas}: Props) => {
  

  const BorrarCerveza = async (id: number) => {
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1/";

    
    try {
      const response = await fetch(`${apiUrl}cervezas/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
       //   Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        alert("Su sesión ha caducado");
      }
      setCervezas(cervezas.filter((e) => e.id !== id));
    //  setActualizaPaginas(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
     
        <div className="grid grid-cola-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {cervezas.map((cerveza) => (
            <div
              key={cerveza.id}
              className="relative border-2 shadow-lg p-2 rounded-lg flex flex-col justify-between hover:bg-gray-200"
            >
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-red-500 italic font-bold text-2xl">
                    {cerveza.precio} €
                  </h3>
                  <h3 className="italic font-bold">{cerveza.pais}</h3>
                  {cerveza.oferta != 0 && (
                    <div className="bg-red-500 text-white rounded-full p-2 w-14 h-14 flex items-center justify-center absolute top-12 ml-[210px] shadow-lg">
                      <h4 className="text-center text-xs italic -rotate-45">
                        Oferta
                      </h4>
                    </div>
                  )}
                  {cerveza.novedad != 0 && (
                    <div className="bg-blue-500 text-white rounded-full p-2 w-14 h-14 flex items-center justify-center absolute top-12 ml-[150px] shadow-lg">
                      <h4 className="text-center text-xs italic -rotate-45">
                        Novedad
                      </h4>
                    </div>
                  )}
                </div>
              </div>
              <img
                src={cerveza.foto}
                className="w-[200px] mx-auto"
                loading="lazy"
              />
              <h3 className="font-bold text-md text-center ">
                {cerveza.nombre}
              </h3>
              <div className="flex justify-between p-2 mt-2">
                <Link
                  href={`/Ver/${cerveza.id}`}
                  className="btn-primary w-full"
                >
                  Ver
                </Link>
                <Link
                  href={`/Cervezas/Edit/${cerveza.id}`}
                  className="btn-primary w-full"
                >
                  Editar
                </Link>
                <button
                  className="btn-primary w-full"
                  onClick={async () => await BorrarCerveza(cerveza.id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
      
    </>
  );
};

export default Cards;
