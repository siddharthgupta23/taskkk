// 'use client'

// import { useState } from 'react'
// import { Bell, Calendar } from 'lucide-react'
// import { BiRefresh } from 'react-icons/bi';
// import { Button } from '../components/ui/Button'
// import { Input } from '../components/ui/Input'
// import { useDispatch } from 'react-redux'
// import { addTask } from '../store/reducers/taskSlice'

// export function TaskInput() {
//   const [title, setTitle] = useState('')
//   const dispatch = useDispatch()

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!title.trim()) return

//     dispatch(addTask({
//       id: Date.now().toString(),
//       title: title.trim(),
//       completed: false,
//       priority: 'low',
//       createdAt: new Date(),
//     }))
//     setTitle('')
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/50 rounded-lg">
//       <div className="flex items-center space-x-2">
//         <Input
//           placeholder="Add a task"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="flex-1"
//         />
//         <Button type="submit">Add Task</Button>
//       </div>
//       <div className="flex items-center space-x-2">
//         <Button variant="ghost" size="icon">
//           <Bell className="h-4 w-4" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <Calendar className="h-4 w-4" />
//         </Button>
//         <Button variant="ghost" size="icon">
//     <BiRefresh className="h-4 w-4" />
//         </Button>
//       </div>
//     </form>
//   )
// }
// 'use client'

// import { useState } from 'react'
// import { BiRefresh } from 'react-icons/bi'
// import { BellIcon, CalendarIcon } from '@heroicons/react/24/outline'
// import { Button } from '../components/ui/Button'
// import { Input } from '../components/ui/Input'
// import { useDispatch } from 'react-redux'
// import { addTask } from '../store/reducers/taskSlice'


// export function TaskInput() {
//   const [title, setTitle] = useState('')
//   const dispatch = useDispatch()

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!title.trim()) return

//     dispatch(addTask({
//       id: Date.now().toString(),
//       title: title.trim(),
//       completed: false,
//       priority: 'low',
//       createdAt: new Date(), // Ensure 'createdAt' is part of the Task type
//     }))
//     setTitle('')
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/50 rounded-lg">
//       <div className="flex items-center space-x-2">
//         <Input
//           placeholder="Add a task"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="flex-1"
//         />
//         <Button type="submit">Add Task</Button>
//       </div>
//       <div className="flex items-center space-x-2">
//         <Button variant="ghost" size="icon">
//           <BellIcon className="h-4 w-4" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <CalendarIcon className="h-4 w-4" />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <BiRefresh className="h-4 w-4" />
//         </Button>
//       </div>
//     </form>
//   )
// }

// import { createElement } from 'react';
// import { BellIcon, CalendarIcon } from '@heroicons/react/24/outline';
// import { BiRefresh } from 'react-icons/bi';
// import { Button } from '../components/ui/Button';
// import { Input } from '../components/ui/Input';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../store/reducers/taskSlice';
// import { useState } from 'react';

// export function TaskInput() {
//   const [title, setTitle] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title.trim()) return;

//     dispatch(
//       addTask({
//         id: Date.now().toString(),
//         title: title.trim(),
//         completed: false,
//         priority: 'low',
//         createdAt: new Date(),
//       })
//     );
//     setTitle('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/50 rounded-lg">
//       <div className="flex items-center space-x-2">
//         <Input
//           placeholder="Add a task"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="flex-1"
//         />
//         <Button type="submit">Add Task</Button>
//       </div>
//       <div className="flex items-center space-x-2">
//         <Button variant="ghost" size="icon">
//           {createElement(BellIcon, { className: 'h-4 w-4' })}
//         </Button>
//         <Button variant="ghost" size="icon">
//           {createElement(CalendarIcon, { className: 'h-4 w-4' })}
//         </Button>
//         <Button variant="ghost" size="icon">
//           <BiRefresh className="h-4 w-4" />
//         </Button>
//       </div>
//     </form>
//   );
// }


// import { BellIcon, CalendarIcon } from '@heroicons/react/24/outline';
// import { BiRefresh } from 'react-icons/bi';
// import { Button } from '../components/ui/Button';
// import { Input } from '../components/ui/Input';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../store/reducers/taskSlice';
// import { useState } from 'react';

// // Wrap the icons in functional components
// const WrappedBellIcon = () => <BellIcon className="h-4 w-4" />;
// const WrappedCalendarIcon = () => <CalendarIcon className="h-4 w-4" />;

// export function TaskInput() {
//   const [title, setTitle] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title.trim()) return;

//     dispatch(
//       addTask({
//         id: Date.now().toString(),
//         title: title.trim(),
//         completed: false,
//         priority: 'low',
//         createdAt: new Date(),
//       })
//     );
//     setTitle('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/50 rounded-lg">
//       <div className="flex items-center space-x-2">
//         <Input
//           placeholder="Add a task"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="flex-1"
//         />
//         <Button type="submit">Add Task</Button>
//       </div>
//       <div className="flex items-center space-x-2">
//         <Button variant="ghost" size="icon">
//           <WrappedBellIcon />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <WrappedCalendarIcon />
//         </Button>
//         <Button variant="ghost" size="icon">
//           <BiRefresh className="h-4 w-4" />
//         </Button>
//       </div>
//     </form>
//   );
// }


'use client';

import { useState } from 'react';
import { FiBell, FiCalendar } from 'react-icons/fi';
import { BiRefresh } from 'react-icons/bi';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/reducers/taskSlice';

export function TaskInput() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(
      addTask({
        id: Date.now().toString(),
        title: title.trim(),
        completed: false,
        priority: 'low',
        createdAt: new Date(),
      })
    );
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Add a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1"
        />
        <Button type="submit">Add Task</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
        <FiBell className="h-5 w-5 text-gray-500" />
        
        </Button>
        <Button variant="ghost" size="icon">
        
      <FiCalendar className="h-5 w-5 text-gray-500" />
      
        </Button>
        <Button variant="ghost" size="icon">
          <BiRefresh className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
