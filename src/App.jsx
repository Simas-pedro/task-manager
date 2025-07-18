import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { FileText } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // useEffect com o parametro sendo uma lista vazia, essa função só executada uma vez, que é a primeira vez que o usuario acessa a aplicação

    async function fetchTasks() {
      // CHAMAR API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      // PEGAR OS DADOS DA API
      const data = await response.json();

      // ARMAZENAR DADOS
      setTasks(data);
    }
    // SE CHAMAR ESSA FUNÇÃO ELA PEGA AS TASKS DA API
    //fetchTasks()
  }, []);
  /* <---------------------- onAddTaskClick ----------------------> */
  function onAddTaskClick(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }
  /* <---------------------- onDeleteTaskClick ----------------------> */
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  /* <---------------------- onTaskClick ----------------------> */
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  const [texto, setTexto] = useState("Task Manager");

  return (
    /* <---------------------- Tela Toda ----------------------> */
    <div className="w-screen h-screen bg-gradient-to-tl flex-col from-blue-100 to-gray-800 flex justify-center items-center space-y-8">
      <h1 className="top-0 bottom-0 text-white text-center text-4xl mb-5 font-se">
        {texto}
      </h1>

      {/* <---------------------- CAIXA 1 ----------------------> */}
      <div className="shadow-xl/30 w-[600px] h-[250px] flex backdrop-blur-3xl rounded-3xl">
        <AddTask onAddTaskClick={onAddTaskClick} />
      </div>

      {/* <---------------------- CAIXA 2 ----------------------> */}
      <div className=" shadow-xl/30 w-[600px] h-auto backdrop-blur-3xl rounded-3xl ">
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

/*
  <button
    className="h-10 w-45 bg-gradient-to-tl from-gray-200 to-gray-800 hover:from-fuchsia-700 active:to-violet-900 active:from-fuchsia-500 font-extrabold text-white shadow-lg hover:shadow-fuchsia-500 p-2 rounded-full transition duration-500 ease-in-out active:transition-none hover:animate active:animate-none active:brightness-150 shadow-xl/30 inverted-colors:shadow cursor-pointer"
    onClick={() => {
      setTexto("Blablablablablablablabla");
    }}
  >
    Teste teste
  </button>
*/
