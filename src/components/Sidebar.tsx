// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../store'
// import { setFilter } from '../store/slices/taskSlice'

// const filters = [
//   { name: 'All', value: 'all' },
//   { name: 'Active', value: 'active' },
//   { name: 'Completed', value: 'completed' },
// ]

// export const Sidebar: React.FC = () => {
//   const currentFilter = useSelector((state: RootState) => state.tasks.filter)
//   const dispatch = useDispatch()

//   return (
//     <aside className="w-64 bg-gray-200 dark:bg-gray-700 p-4">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Filters</h2>
//       <ul>
//         {filters.map((filter) => (
//           <li key={filter.value} className="mb-2">
//             <button
//               onClick={() => dispatch(setFilter(filter.value))}
//               className={`w-full text-left p-2 rounded ${
//                 currentFilter === filter.value
//                   ? 'bg-blue-500 text-white'
//                   : 'text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
//               }`}
//             >
//               {filter.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   )
// }
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../store";
// import { setFilter } from "../store/slices/taskSlice";

// const filters: { name: string; value: "all" | "active" | "completed" }[] = [
//   { name: "All", value: "all" },
//   { name: "Active", value: "active" },
//   { name: "Completed", value: "completed" },
// ];

// export const Sidebar: React.FC = () => {
//   const currentFilter = useSelector((state: RootState) => state.tasks.filter);
//   const dispatch = useDispatch();

//   return (
//     <aside className="w-64 bg-gray-200 dark:bg-gray-700 p-4">
//       <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Filters</h2>
//       <ul>
//         {filters.map((filter) => (
//           <li key={filter.value} className="mb-2">
//             <button
//               onClick={() => dispatch(setFilter(filter.value))}
//               className={`w-full text-left p-2 rounded ${
//                 currentFilter === filter.value
//                   ? "bg-blue-500 text-white"
//                   : "text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
//               }`}
//             >
//               {filter.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// };

// 'use client'

// import { Calendar, ListTodo, Star, Clock, Users } from 'lucide-react'
// import { cn } from '../../src/'
// import { Button } from '../components/ui/button'
// import { ScrollArea } from '../components/ui/scroll-area'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState } from '../store'
// import { setFilter } from '../store/reducers/taskSlice'

// const navigation = [
//   {
//     title: 'All Tasks',
//     icon: ListTodo,
//     value: 'all',
//   },
//   {
//     title: 'Today',
//     icon: Calendar,
//     value: 'today',
//   },
//   {
//     title: 'Important',
//     icon: Star,
//     value: 'important',
//   },
//   {
//     title: 'Planned',
//     icon: Clock,
//     value: 'planned',
//   },
//   {
//     title: 'Assigned to me',
//     icon: Users,
//     value: 'assigned',
//   },
// ]

// export function Sidebar() {
//   const filter = useSelector((state: RootState) => state.tasks.filter)
//   const user = useSelector((state: RootState) => state.auth.user)
//   const dispatch = useDispatch()

//   return (
//     <div className="hidden border-r bg-background md:block">
//       <div className="space-y-4 py-4">
//         <div className="px-3 py-2">
//           <div className="flex items-center gap-2 px-2">
//             <img
//               src={user?.avatar || "https://github.com/shadcn.png"}
//               alt="avatar"
//               className="h-8 w-8 rounded-full"
//             />
//             <div className="flex flex-col">
//               <span className="text-sm font-medium">
//                 {user?.name || 'Guest'}
//               </span>
//               <span className="text-xs text-muted-foreground">
//                 {user?.email || 'guest@example.com'}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="px-3 py-2">
//           <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
//             Tasks
//           </h2>
//           <div className="space-y-1">
//             {navigation.map((item) => (
//               <Button
//                 key={item.value}
//                 variant={filter === item.value ? "secondary" : "ghost"}
//                 size="sm"
//                 className="w-full justify-start"
//                 onClick={() => dispatch(setFilter(item.value as TaskState['filter']))}
//               >
//                 <item.icon className="mr-2 h-4 w-4" />
//                 {item.title}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setFilter } from '../store/slices/taskSlice'
import { FiInbox, FiCalendar, FiStar, FiClock } from 'react-icons/fi'

// Define the filter values to match the expected type
type FilterValue = 'all' | 'active' | 'completed'

// Define the structure of a filter
interface Filter {
  name: string
  icon: React.ComponentType<{ className?: string }>
  value: FilterValue
}

const filters: Filter[] = [
  { name: 'All Tasks', icon: FiInbox, value: 'all' },
  { name: 'Today', icon: FiCalendar, value: 'active' },
  { name: 'Important', icon: FiStar, value: 'completed' },
  { name: 'Planned', icon: FiClock, value: 'completed' },
]

export const Sidebar: React.FC = () => {
  const currentFilter = useSelector((state: RootState) => state.tasks.filter)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
        <span className="text-2xl font-semibold text-gray-800 dark:text-white">Todo App</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-white dark:bg-gray-800">
          {filters.map((filter) => (
            <a
              key={filter.value}
              href="#"
              className={`flex items-center px-4 py-2 mt-2 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 ${
                currentFilter === filter.value ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
              onClick={() => dispatch(setFilter(filter.value))}
            >
              <filter.icon className="w-6 h-6" />
              <span className="mx-4">{filter.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
