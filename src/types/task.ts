export interface Task {
    id: number;
    text: string;
    hidden: boolean;
    done: boolean;
    priority: "High" | "Medium" | "Low";
  }
  
  export interface TodoListProps {
    tasks: Task[];
    onToggleDone: (id: number) => void;
    onToggleHide: (id: number) => void;
    onDelete: (id: number) => void;
    onEditTask: (id: number, newText: string) => void; 
    onChangePriority: (id: number, newPriority: string) => void;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  }
  
  export interface TodoItemProps {
    task: Task;
    onToggleDone: (id: number) => void;
    onToggleHide: (id: number) => void;
    onDelete: (id: number) => void;
    onEditTask: (id: number, newText: string) => void; 
    onChangePriority: (id: number, newPriority: string) => void;
  }
  
  export interface TodoInputProps {
    onAdd: (text: string) => void;
  }

  export interface LayoutProps {
    children: React.ReactNode;
  }
  