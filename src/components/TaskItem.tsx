// 'use client'

// import { Star } from 'lucide-react'
// import { Checkbox } from '../components/ui/checkbox'
// import { Task } from '../types'
// import { useDispatch } from 'react-redux'
// import { toggleTask, setPriority} from '../store/reducers/taskSlice'
// import { Button } from '../components/ui/button'
// import { cn } from '../lib/utils'

// interface TaskItemProps {
//   task: Task
// }

// export function TaskItem({ task }: TaskItemProps) {
//   const dispatch = useDispatch()

//   return (
//     <div className={cn(
//       "flex items-center space-x-4 rounded-lg border p-4",
//       task.completed && "bg-muted/50"
//     )}>
//       <Checkbox
//         checked={task.completed}
//         onCheckedChange={() => dispatch(toggleTask(task.id))}
//       />
//       <div className="flex-1">
//         <p className={cn(
//           "text-sm font-medium leading-none",
//           task.completed && "line-through text-muted-foreground"
//         )}>
//           {task.title}
//         </p>
//         {task.dueDate && (
//           <p className="text-sm text-muted-foreground">
//             Due: {new Date(task.dueDate).toLocaleDateString()}
//           </p>
//         )}
//       </div>
//       <Button
//         variant="ghost"
//         size="icon"
//         onClick={() => dispatch(setPriority({
//           id: task.id,
//           priority: task.priority === 'high' ? 'low' : 'high'
//         }))}
//       >
//         <Star
//           className={cn(
//             "h-4 w-4",
//             task.priority === 'high' && "fill-yellow-400 text-yellow-400"
//           )}
//         />
//       </Button>
//     </div>
//   )
// }


// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { toggleTask, deleteTask} from '../store/slices/taskSlice'
// import toggleImportant from "../store/slices/taskSlice"
// import { Task } from '../types'
// import { FiTrash2, FiStar } from 'react-icons/fi'
// import { Button } from './ui/Button'

// interface TaskItemProps {
//   task: Task
// }

// export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
//   const dispatch = useDispatch()

//   return (
//     <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
//       <div className="flex items-center">
//         <input
//           type="checkbox"
//           checked={task.completed}
//           onChange={() => dispatch(toggleTask(task.id))}
//           className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//         />
//         <span className={`ml-2 text-gray-700 dark:text-gray-200 ${task.completed ? 'line-through' : ''}`}>
//           {task.title}
//         </span>
//       </div>
//       <div className="flex items-center">
//         <Button
//           variant="ghost"
//           onClick={() => dispatch(toggleImportant(task.id))}
//           className={`mr-2 focus:outline-none ${task.important ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-600'}`}
//         >
//           <FiStar className="h-5 w-5" />
//         </Button>
//         <Button
//           variant="ghost"
//           onClick={() => dispatch(deleteTask(task.id))}
//           className="text-red-500 hover:text-red-700 focus:outline-none"
//         >
//           <FiTrash2 className="h-5 w-5" />
//         </Button>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, deleteTask, toggleImportant } from '../store/slices/taskSlice'
import { Task } from '../types'
import { FiTrash, FiStar } from 'react-icons/fi';
import { Button } from './ui/Button'

interface TaskItemProps {
  task: Task
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <span className={`ml-2 text-gray-700 dark:text-gray-200 ${task.completed ? 'line-through' : ''}`}>
          {task.title}
        </span>
      </div>
      <div className="flex items-center">
        <Button
          variant="ghost"
          onClick={() => dispatch(toggleImportant(task.id))}
          className={`mr-2 focus:outline-none ${task.important ? 'text-yellow-500' : 'text-gray-400 dark:text-gray-600'}`}
        >
      <FiTrash className="h-5 w-5 text-gray-500" />
        </Button>
        <Button
          variant="ghost"
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
    
      <FiStar className="h-5 w-5 text-yellow-500" />
        </Button>
      </div>
    </div>
  )
}

