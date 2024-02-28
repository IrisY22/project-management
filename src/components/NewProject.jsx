import noProjects from '../assets/no-projects.png'

export default function NewProject() {

  return (
    <div className="w-[35rem] mt-16 text-center">
      <img src={noProjects} alt="image of notebook and a pen" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
        Create new project
      </button>
    </div>
  )
}