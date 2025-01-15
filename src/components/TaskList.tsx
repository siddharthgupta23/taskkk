// 'use client'

// import { useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { TaskItem } from '../components/TaskItem'
// import { ScrollArea } from '../components/ui/scroll-area'

// export function TaskList() {
//   const { tasks, filter } = useSelector((state: RootState) => state.tasks)

//   const filteredTasks = tasks.filter(task => {
//     switch (filter) {
//       case 'today':
//         return task.dueDate && new Date(task.dueDate).toDateString() === new Date().toDateString()
//       case 'important':
//         return task.priority === 'high'
//       case 'planned':
//         return task.dueDate != null
//       case 'assigned':
//         return false // Implement when we have assignment feature
//       default:
//         return true
//     }
//   })

//   return (
//     <ScrollArea className="h-[calc(100vh-13rem)]">
//       <div className="space-y-2 p-4">
//         {filteredTasks.map(task => (
//           <TaskItem key={task.id} task={task} />
//         ))}
//       </div>
//     </ScrollArea>
//   )
// }

import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { TaskItem } from './TaskItem'

export const TaskList: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks)

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'all':
        return true
      case 'active':
        return !task.completed
      case 'completed':
        return task.completed
      case 'today':
        return task.dueDate && new Date(task.dueDate).toDateString() === new Date().toDateString()
      case 'important':
        return task.important
      case 'planned':
        return task.dueDate != null
      default:
        return true
    }
  })

  return (
    <div className="mt-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

