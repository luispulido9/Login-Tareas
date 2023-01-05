import { createSlice } from '@reduxjs/toolkit';

// Estado de React
// const [name, setName] = useState('CUALQUIER DATO INICIALIZADOR');

//Crear inicialidor de objeto
const inicialState = [
  {
    id: '1',
    title: 'Tarea 1',
    description: 'Esto es una tarea de prueba',
    complete: false,
  },
  {
    id: '2',
    title: 'Tarea 2',
    description: 'Conseguir empleo 😟',
    complete: false,
  },
];

//Creat objeto de tareas
export const taskSlice = createSlice({
  name: 'tasks',
  initialState: inicialState,
  // Agregar funciones al estado
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload); //Agregar valores del objeto del objeto payload
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload); // Busca en el arreglo de tareas
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;

      const taskFound = state.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
//Exportar unicamente el objeto del Slice
export default taskSlice.reducer;
