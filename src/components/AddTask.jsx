import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col w-full space-y-2 p-6">
      <input
        className="bg-white/2 p-2 rounded-md shadow-lg"
        type="text"
        placeholder="Titulo da tarefa" // texto que vai ficar de fundo no input
        value={title} // falar que o valor do input é igual ao title, importante, por mais que possa parecer um pouco inutil
        onChange={(event) => setTitle(event.target.value)} // quando ocorrer um evento de mudança ele vai "setar" o valor do alvo do evento, que no caso é o input, pro valor modificado no evento
      />
      <textarea
        className="bg-white/2 h-[500px] p-2 rounded-md shadow-lg mb-6"
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <button
        onClick={() => {
          // função pra criar a task, com validação
          if (!title.trim() && !description.trim()) {
            //.trim serve pra ignorar espaço com branco
            return alert("Preencha os campos!");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="text-white p-2 rounded-md shadow-lg bg-gradient-to-tl from-gray-200/5 to-gray-800/35 transition hover:to-gray-800/75 active:from-gray-200/40 active:to-gray-800/40 active:transition-none cursor-pointer"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;

/*
h-10 w-45 bg-gradient-to-tl from-gray-200 to-gray-800 hover:from-fuchsia-700 active:to-violet-900 active:from-fuchsia-500 font-extrabold text-white shadow-lg hover:shadow-fuchsia-500 p-2 rounded-full transition duration-500 ease-in-out active:transition-none hover:animate active:animate-none active:brightness-150 shadow-xl/30 inverted-colors:shadow cursor-pointer
*/
