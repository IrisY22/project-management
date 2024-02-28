import noProjectsImg from '../assets/no-projects.png'
import Button from './Buttons'

export default function NoProjectSelected() {

  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectsImg}
        alt="image of notebook and a pen"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with new one
      </p>
      <Button content={'Create new project'} />
    </div>
  )
}
