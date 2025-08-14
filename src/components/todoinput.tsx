import React, { useState } from "react";
import type {  TodoInputProps } from '../types/task';

 

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAddClick = () => {
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="rounded-[10px] px-[30px] py-[16px] bg-[#2E3239] flex items-center gap-[4px]">
      <input
        type="text"
        placeholder="New Note"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 h-full px-4 rounded-lg bg-[#2E3239] text-white placeholder-gray-400 focus:outline-none border-none"
      />
      <button
        onClick={handleAddClick}
        className="w-[161px] h-[48px] bg-[#F4F6FA] text-black rounded-[9px] font-medium hover:bg-gray-200 transition"
      >
        Add New Note
      </button>
    </div>
  );
};

export default TodoInput;
