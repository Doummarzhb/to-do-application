import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import type {  TodoItemProps } from '../types/task';



 

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggleDone, onToggleHide, onDelete }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg text-[#F4F6FA] transition mb-10">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleDone(task.id)}
          className="w-[24px] h-[24px] appearance-none rounded-[5px] bg-[#2E3239] border-[1.5px] border-[#B4B4B4] cursor-pointer
             checked:bg-[#B4B4B4] checked:border-[#B4B4B4] checked:after:content-['✓'] checked:after:text-[#2E3239] 
             checked:after:flex checked:after:items-center checked:after:justify-center checked:after:h-full checked:after:w-full"
/>
        <span
          className={`font-normal text-base leading-none transition ${
            task.done
              ? "line-through text-gray-400"
              : task.hidden
              ? "italic opacity-50"
              : ""
          }`}
        >
          {task.hidden ? "Hidden Task" : task.text}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <IconButton size="small" sx={{ color: "#8C8E93" }} onClick={() => onToggleHide(task.id)}>
          {task.hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
        <IconButton size="small" sx={{ color: "#8C8E93" }} onClick={() => onDelete(task.id)}>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
