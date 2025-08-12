import type { Patient } from "../types";
import { PatientDetailItem } from "./PatientDetailItem";
import { usePatientStore } from "../store";


type PatientDetailsProps = {
  patient: Patient;
};

export const PatientDetails = ({ patient }: PatientDetailsProps) => {

  const { deletePatient, getPatientById } = usePatientStore();


  return (
    <div className="bg-white shadow-md rounded-lg py-5 px-3 mb-5">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex justify-end">
        <button onClick={() => getPatientById(patient.id)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md mr-2 cursor-pointer transition-colors">

          Editar
        </button>
        <button onClick={() => deletePatient(patient.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md cursor-pointer transition-colors">
          Eliminar
        </button>
      </div>
    </div>
  );
};
