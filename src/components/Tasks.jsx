import { ArrowRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    // substitui o: --- E garante que não vá vir nada na string que não possa estar na url
    // navigate(`/task?title=${task.title}&description=${task.description}`);
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-2 p-6 b">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          {/*BOTÃO TAREFA*/}
          <Button
            onClick={() => onTaskClick(task.id)}
            className={`bg-gray-500/15 text-white w-full p-2 rounded-md shadow-lg hover:bg-gray-500/30 transition cursor-pointer active:bg-gray-500/0 active:transition-none ${
              task.isCompleted ? "line-through opacity-40" : ""
            }`} // tem como colocar js dentro do tailwindcss, tipo aqui que se task tem isCompleted == true ele fica riscado e com baixa opacidade
          >
            {task.title}
          </Button>

          {/*BOTÃO VER DETALHES*/}
          <Button onClick={() => onSeeDetailsClick(task)}
            className={`bg-gray-500/15 text-white p-2 rounded-md shadow-lg hover:bg-gray-500/40 transition cursor-pointer active:bg-gray-500/80 active:transition-none ${
              task.isCompleted ? "opacity-40" : ""
            }`}
          >
            <ArrowRight />
          </Button>

          {/*BOTÃO DELETAR*/}
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            className={`group bg-gray-500/15 text-white p-2 rounded-md shadow-lg hover:bg-red-500/15 transition cursor-pointer active:bg-red-500/45 active:transition-none ${
              task.isCompleted ? "opacity-40" : ""
            }`}
          >
            <Trash2 className="group-hover:text-red-600" />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
