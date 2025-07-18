import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-gradient-to-tl flex-col from-blue-100 to-gray-800 flex justify-center items-center space-y-8">
      <div className="shadow-xl/30 w-[600px] h-auto backdrop-blur-3xl rounded-3xl flex justify-center relative">
        <h1 className="top-0 bottom-0 text-white text-center text-4xl m-2 font-se h-10">{title}</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-white absolute left-0 top-0 bottom-0 cursor-pointer rounded-full hover:bg-gray-500/40 hover:shadow-lg transition active:bg-gray-500/80 active:transition-none pl-1.5 pr-2"
        >
          <ChevronLeftIcon className="size-10"/>
        </button>
      </div>
      <div className="shadow-xl/30 w-[600px] h-[250px] flex backdrop-blur-3xl rounded-3xl">
        <p className="h-full w-full p-4 text-white text-xl break-words whitespace-normal text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
export default TaskPage;
