import Button from "./Buttons";

export default function ProjectsSidebar({ onStartAddProject }) {

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2
        className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        <li className="flex justify-between my-4">
          <button
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            Learning React
          </button>
        </li>
        <li className="flex justify-between my-4">
          <button
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
          >
            Mastering React
          </button>
        </li>
      </ul>
    </aside>


  )
}