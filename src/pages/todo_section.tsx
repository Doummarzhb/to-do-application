import React, { useState } from "react";
import Layout from "../components/Layout";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Task {
  id: number;
  text: string;
  hidden: boolean;
  done: boolean;
}

const TodoSection: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Complete presentation for team meeting on Friday", hidden: false, done: false },
    { id: 2, text: "Schedule dentist appointment for next month", hidden: false, done: false },
    { id: 3, text: "Buy groceries for the week", hidden: false, done: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({
    open: false,
    message: "",
  });

  const handleAdd = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask, hidden: false, done: false };
    setTasks([...tasks, task]);
    setNewTask("");
    setSnackbar({ open: true, message: "Task added successfully!" });
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
    setSnackbar({ open: true, message: "Task deleted!" });
  };

  const handleToggleHide = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, hidden: !t.hidden } : t)));
    setSnackbar({ open: true, message: "Task visibility toggled!" });
  };

  const handleToggleDone = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (


    <Layout>
      <div className="max-w-[1120px] h-[340px] w-full flex flex-col gap-[20px] mx-auto px-4 ">
        {/* Tasks List */}
        <hr className="border-t border-gray-500 my-4" />
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between px-4 py-3 rounded-lg text-[#F4F6FA] transition mb-10"
            >
              <div className="flex items-center gap-3">
                <input
  type="checkbox"
  checked={task.done}
  onChange={() => handleToggleDone(task.id)}
  className="w-6 h-6 accent-[#4fa1f3] cursor-pointer"
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
                <IconButton
                  size="small"
                  sx={{ color: "#F4F6FA"  }}
                  onClick={() => handleToggleHide(task.id)}
                >
                  {task.hidden ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ color: "#F4F6FA"  }}
                  onClick={() => handleDelete(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Note */}
        <div className="   rounded-[10px] px-[30px] py-[16px] bg-[#2E3239] flex items-center gap-[4px]">
  <input
    type="text"
    placeholder="New Note"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    className="flex-1 h-full px-4 rounded-lg bg-[#2E3239] text-white placeholder-gray-400 focus:outline-none border-none"
  />
  <button
    onClick={handleAdd}
    className="w-[161px] h-[48px] bg-[#F4F6FA] text-black rounded-[9px] font-medium hover:bg-gray-200 transition"
  >
    Add New Note
  </button>
</div>



        {/* Snackbar Notification */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={2000}
          onClose={() => setSnackbar({ open: false, message: "" })}
          message={snackbar.message}
        />
      </div>
    </Layout>
  );
};

export default TodoSection;
