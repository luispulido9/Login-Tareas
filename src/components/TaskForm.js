import { useState, useEffect } from 'react'; //libreria de react
import { useDispatch, useSelector } from 'react-redux'; // Importar libreria para llamar una funciones y el acceso a las tareas
import { addTask, editTask } from '../features/task/taskSlice'; // import funcion addTask
import { v4 as uuid } from 'uuid'; //importar libreria de id's unicos
import { useNavigate, useParams } from 'react-router-dom'; // importar libreria de react-router

function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    setTask({
      ...task, // Guardar datos iniciales que existan
      [e.target.name]: e.target.value,
    });
  };

  //Instancias
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams(); // Retorna un valor de la URL
  const tasks = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    if (params.id) {
      //Condicional para saber si estamos actualizando por medio de reconocer si existe un id en la URL
      dispatch(editTask(task));
    } else {
      e.preventDefault(); // Evitar refrescar la pagina
      dispatch(
        addTask({
          ...task, //Pasar las tareas
          id: uuid(), //Pasar un id únicio
        })
      );
    }
    navigate('/'); // Redireccionar a la pagina principal
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id); //Buscar el estado con la id mandada por URL
      setTask(taskFound); //Establecer el estado encontrado como actual
    }
  }, [params.id, tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-sm font-bold mb-2">
        Task:
      </label>
      <input
        name="title"
        type="text"
        placeholder="Titulo"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-sm font-bold mb-2">
        Descripcion:
      </label>
      <textarea
        name="description"
        placeholder="Descripcion"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1">Guardar</button>
    </form>
  );
}

export default TaskForm;
