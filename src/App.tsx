import { PatientForm } from "./components/PatientForm";
import { PatientList } from "./components/PatientList";

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="text-3xl font-bold text-center">
          Pacientes
          <span className=" text-indigo-600">Veterinaria</span>
        </h1>
        <div className="mt-12 md:flex justify-center">
          <PatientForm />
          <PatientList />
        </div>
      </div>
    </>
  );
}

export default App;
