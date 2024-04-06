"use server";
import {
  Cerveza,
  Color,
  Pais,
  Tipo,
  Graduacion,
  CervezaData,
  PaisesData,
} from "@/interfaces/interfaces";

export async function fetchCervezas() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}cervezas?page=1&per_page=40`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorPaises() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorPais`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorTipos() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorTipo`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorColores() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorColores`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasPorGraduaciones() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaCervezasPorGraduaciones`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchStockPorPais() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}stockPorPais`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
  
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}


export async function fetchConsultaTablas2() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaTablas2`,{ cache: "no-store" });

    if (!response.ok) {
      throw new Error(`${apiUrl}consultaTablas`);
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchConsultaBD() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}consultaBD`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchCervezasById(id: string): Promise<CervezaData> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  const response = await fetch(`${apiUrl}cervezas/${id}`, { next: { revalidate: 0 } });

  if (!response.ok) {
    throw new Error("No se pudieron obtener los datos de la API");
  }

  const data = await response.json();
  

  return data;
  // Aquí puedes trabajar con los datos obtenidos de la API
}

export async function fetchCervezasQuery(query: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}cervezas?${query}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchTiposQuery(query: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";
  try {
    const response = await fetch(`${apiUrl}tipos?${query}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return false
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    return []; // Debes devolver un valor adecuado en caso de error
  }
}
export async function fetchPaises(): Promise<PaisesData | undefined> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}paises`,);

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
   
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);

    return;
  }
}

export async function fetchColores(): Promise<Color[] | any> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}colores`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.colores;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

export async function fetchTipos() {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";

  try {
    const response = await fetch(`${apiUrl}tipos`, );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.log(error);
    return []; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchTiposById(id:string): Promise<Tipo | undefined> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";


  try {
    const response = await fetch(`${apiUrl}tipos/${id}`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.Tipo;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.log(error);
    return ; // Debes devolver un valor adecuado en caso de error
  }
}

export async function fetchPaisesById(id:string): Promise<Pais | undefined> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";


  try {
    const response = await fetch(`${apiUrl}paises/${id}`, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();

    return data.Pais;

    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.log(error);
    return ; // Debes devolver un valor adecuado en caso de error
  }
}


export async function fetchGraduaciones(): Promise<Graduacion[]> {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
  try {
    const response = await fetch(`${apiUrl}graduaciones`, 
       
    );

    if (!response.ok) {
      throw new Error("No se pudieron obtener los datos de la API");
    }

    const data = await response.json();
    return data.graduaciones;
    // Aquí puedes trabajar con los datos obtenidos de la API
  } catch (error) {
    console.error("Error al obtener datos:", error);

    return [];
  }
}

export async function postRegister(
  url: string,
  datos: {
    name: string;
    password: string;
    email: string;
  }
): Promise<string> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (response.ok) {
      console.log("Datos enviados correctamente.");
      // Aquí puedes realizar acciones adicionales después de enviar los datos
    } else {
      switch (response.status) {
        case 409:
          throw new Error(
            "Ya existe un Usuario con este email: " + response.statusText
          );
          break;
        case 422:
          // const data=await response.json();
          throw new Error("Ya existe un Usuario con este email: ");

        default:
          throw new Error("Error al enviar los datos:" + response.statusText);
          break;
      }
    }
    return "ok";
  } catch (error: any) {
    return error.message;
  }
}

export async function fetchDeleteCervezasById(id: string, token: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:1337/api/";

  try {
    const response = await fetch(`${apiUrl}cervezas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return true;
      throw new Error(`Error al eliminar la cerveza con ID ${id}`);
    }
    return true
    /*const data = await response.json();

    return data.data;*/
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDeleteTiposById(id: string, token: string) {
  const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
    try {
    const response = await fetch(`${apiUrl}tipos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    

    if (!response.ok) {     ;
      return false
      throw new Error(`Error al eliminar el tipo con ID ${id}`);
    }

    return true
    // Lógica adicional después de una eliminación exitosa, si es necesario
  } catch (error) {
    console.error(error);
  }
}

  export async function fetchDeletePaisesById(id: string, token: string) {
    const apiUrl = process.env.API_URL ?? "http://127.0.0.1:8000/api/v1/";
      try {
      const response = await fetch(`${apiUrl}paises/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
  
      if (!response.ok) {     ;
        return false
        throw new Error(`Error al eliminar el tipo con ID ${id}`);
      }
  
      return true
      // Lógica adicional después de una eliminación exitosa, si es necesario
    } catch (error) {
      console.error(error);
    }
}
