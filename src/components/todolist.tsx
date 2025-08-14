import React from "react";
import TodoItem from "./todoitem";
import type {   TodoListProps  } from '../types/task'; 

const TodoList: React.FC<TodoListProps> = ({ tasks, onToggleDone, onToggleHide, onDelete }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleDone={onToggleDone}
          onToggleHide={onToggleHide}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
