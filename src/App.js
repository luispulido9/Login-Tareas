import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import { useDispatch } from 'react-redux'; // Funciones para actualizar el estado
//import { useSelector } from 'react-redux'; // Traer datos del estado

function App() {
  return (
    <div className="">
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
