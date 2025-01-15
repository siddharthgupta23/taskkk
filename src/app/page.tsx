import { TaskInput } from '../components/TaskInput'
import { TaskList } from '../components/TaskList'

export default function Home() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Tasks</h2>
      <div className="bg-blue-500 text-white p-4 rounded"><p>Hello, Tailwind!</p></div>
      </div>

      <div className="space-y-4">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  )
}

