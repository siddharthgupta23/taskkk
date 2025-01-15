export interface Task {
    id: string
    title: string
    completed: boolean
    important?: boolean
    dueDate?: Date
    priority: 'low' | 'medium' | 'high';
    createdAt:Date
  }
  
  // types.ts

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string; // Optional field for user profile picture
  }
  
  export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }
  
 
  
  export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    view: 'list' | 'grid'; // View type for tasks
    filter: 'all' | 'active' | 'completed'; // Filter type for tasks
  }
  