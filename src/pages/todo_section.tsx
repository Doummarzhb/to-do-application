import React, { useState } from "react";
import Layout from "../components/Layout";
import Snackbar from "@mui/material/Snackbar";
import TodoList from "../components/todolist";
import TodoInput from "../components/todoinput";
 
import type {Task } from '../types/task';
 
const TodoSection: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Complete presentation for team meeting on Friday", hidden: false, done: false },
    { id: 2, text: "Schedule dentist appointment for next month", hidden: false, done: false },
    { id: 3, text: "Buy groceries for the week", hidden: false, done: false },
  ]);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: "" });

  const handleAdd = (text: string) => {
    const task = { id: Date.now(), text, hidden: false, done: false };
    setTasks([...tasks, task]);
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
      <div className="max-w-[1120px] h-[340px] w-full flex flex-col gap-[20px] mx-auto px-4">
        <hr className="border-t border-gray-500 my-4" />
        <div className="flex flex-col gap-[44px]"> <div className="mt-8"> </div><TodoList   tasks={tasks} onToggleDone={handleToggleDone} onToggleHide={handleToggleHide} onDelete={handleDelete} />
        <TodoInput  onAdd={handleAdd}  /></div>
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
