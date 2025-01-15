
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TaskInput } from './components/TaskInput'
import { TaskList } from './components/TaskList'
import "./App.css"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Tasks</h1>
          <TaskInput />
          <TaskList />
        </main>
      </div>
    </div>
  )
}

export default App
