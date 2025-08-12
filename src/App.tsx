import { PatientForm } from "./components/PatientForm";
import { PatientList } from "./components/PatientList";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer />
    </>
  );
}

export default App;
