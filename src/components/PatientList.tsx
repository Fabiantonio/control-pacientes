import { usePatientStore } from "../store";
import { PatientDetails } from "./PatientDetails";

export const PatientList = () => {
  const { patients } = usePatientStore();

  const isEmpty = patients.length === 0;

  return (
    <div className=" md:w-1/2 lg:w-2/5">

      <h2 className="font-black text-3xl text-center">Lista de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Pacientes
        <span className="text-indigo-600 font-bold"> Registrados</span>
      </p>

      <div className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {isEmpty ? (
          <div>
            <p className="text-center text-gray-400">
              No hay pacientes registrados
            </p>
            <p className="text-center text-gray-400">
              Añade un paciente para comenzar
            </p>
          </div>
        ) : (
          <div>
            {patients.map((patient) => (
              <PatientDetails key={patient.id} patient={patient} />

            ))}
          </div>


        )}
      </div>
    </div>
  );
};
