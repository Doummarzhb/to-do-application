export interface Task {
    id: number;
    text: string;
    hidden: boolean;
    done: boolean;
  }
  
  export interface TodoListProps {
    tasks: Task[];
    onToggleDone: (id: number) => void;
    onToggleHide: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  export interface TodoItemProps {
    task: Task;
    onToggleDone: (id: number) => void;
    onToggleHide: (id: number) => void;
    onDelete: (id: number) => void;
  }
  
  export interface TodoInputProps {
    onAdd: (text: string) => void;
  }