

const DisplayErrors = ({ errors }) => {
  return (
    <>
      <div className="bg-red-200 rounded-lg p-4 w-full mb-2">
        <ul>
          <h4 cladsName="text-1xl font-bold">Errores:</h4>
          {Object.keys(errors).map((campo, index) => (
            <li key={index}>
              {campo}
              <ul>
                {errors[campo].map((mensaje, i) => (
                  <li key={i}>{mensaje}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayErrors;
