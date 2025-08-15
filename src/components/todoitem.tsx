import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
// import FlagIcon from "@mui/icons-material/Flag";
import type { TodoItemProps } from "../types/task";

const priorityColors: Record<string, string> = {
  High: "#ff4d4f",  
  Medium: "#faad14",  
  Low: "#52c41a",  
};

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  onToggleDone,
  onToggleHide,
  onDelete,
  onEditTask,
  onChangePriority,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    onEditTask(task.id, editedText);
    setIsEditing(false);
  };

  

  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg text-[#F4F6FA] transition mb-10">
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleDone(task.id)}
          className="w-[24px] h-[24px]    min-w-[24px] 
          min-h-[24px]  appearance-none rounded-[5px] bg-[#2E3239] border-[1.5px] border-[#B4B4B4] cursor-pointer
            checked:bg-[#B4B4B4] checked:border-[#B4B4B4] checked:after:content-['✓'] checked:after:text-[#2E3239] 
            checked:after:flex checked:after:items-start checked:after:justify-center checked:after:h-full checked:after:w-full"
        />

        {/* Text or Edit Input */}
        {isEditing ? (
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="bg-[#2E3239] text-white rounded px-2 py-1 focus:outline-none"
          />
        ) : (
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
        )}

        {/* Priority Dropdown */}
        <select
  value={task.priority}
  onChange={(e) => onChangePriority(task.id, e.target.value)}
  className="bg-[#2E3239] rounded px-2 py-1 border border-gray-500 "
  style={{ 
    color: priorityColors[task.priority], 
    borderRadius: "25px" 
  }}
>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* Priority Icon */}
        {/* <FlagIcon sx={{ color: priorityColors[task.priority] }} /> */}
      </div>

      <div className="flex items-center gap-1">
        {/* Edit / Save Button */}
        <IconButton
          size="small"
          sx={{ color: "#8C8E93" }}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>

        {/* Hide Button */}
        <IconButton
          size="small"
          sx={{ color: "#8C8E93" }}
          onClick={() => onToggleHide(task.id)}
        >
          {task.hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>

        {/* Delete Button */}
        <IconButton
          size="small"
          sx={{ color: "#8C8E93" }}
          onClick={() => onDelete(task.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default TodoItem;
