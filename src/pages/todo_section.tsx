import React, { useState } from "react";
import Layout from "../components/Layout";
import Snackbar from "@mui/material/Snackbar";
import TodoList from "../components/todolist";
import TodoInput from "../components/todoinput";
 
import type {Task } from '../types/task';
 
const TodoSection: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Complete presentation for team meeting ", hidden: false, done: false , priority: "High" },
    { id: 2, text: "Schedule dentist appointment ", hidden: false, done: false , priority: "Medium" },
    { id: 3, text: "Buy groceries for the week", hidden: false, done: false ,  priority: "Low"},
  ]);
  const [snackbar, setSnackbar] = useState<{ open: boolean; message: string }>({ open: false, message: "" });

  const handleAdd = async (text: string) => {
    try {
      const newTask: Task = { 
        id: Date.now(), 
        text, 
        hidden: false, 
        done: false, 
        priority: "Medium" 
      };
  
      // POST request  API for mockApi 
      const res = await fetch("https://689ef2f03fed484cf87886a9.mockapi.io/api/r1/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
  
      if (!res.ok) throw new Error("Failed to save task");
  
      const savedTask = await res.json();
  
      //  state
      setTasks([...tasks, savedTask]);
      setSnackbar({ open: true, message: "Task added successfully!" });
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: "Error adding task!" });
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      // Delete API
      const res = await fetch(`https://689ef2f03fed484cf87886a9.mockapi.io/api/r1/tasks/${id}`, {
        method: "DELETE",
      });
  
      if (!res.ok) throw new Error("Failed to delete task");
  
     
      setTasks(tasks.filter((t) => t.id !== id));
      setSnackbar({ open: true, message: "Task deleted!" });
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: "Error deleting task!" });
    }
  };

  const handleToggleHide = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, hidden: !t.hidden } : t)));
    setSnackbar({ open: true, message: "Task visibility toggled!" });
  };

  const handleToggleDone = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleEditTask = async (id: number, newText: string) => {
    try {
      // update API [put]
      const res = await fetch(`https://689ef2f03fed484cf87886a9.mockapi.io/api/r1/tasks/${id}`, {
        method: "PUT",  
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: newText }),
      });
  
      if (!res.ok) throw new Error("Failed to edit task");
  
      const updatedTask = await res.json();
  
      // update
      setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
      setSnackbar({ open: true, message: "Task updated!" });
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: "Error editing task!" });
    }
  };
  
  
  const handleChangePriority = (id: number, newPriority: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, priority: newPriority as Task["priority"] } : t));
  };
 
  return (
    <Layout>
      <div className="max-w-[1120px] h-[340px] w-full flex flex-col gap-[20px] mx-auto px-4">
        <hr className="border-t border-gray-500 my-4" />
        <div className="flex flex-col gap-[44px]"> <div className="mt-8"> </div>
        <TodoList 
          tasks={tasks} 
          onReorder={setTasks} 
          onToggleDone={handleToggleDone} 
          onToggleHide={handleToggleHide}
           onDelete={handleDelete} 
             onEditTask={handleEditTask}
          onChangePriority={handleChangePriority}
           

          />
        <TodoInput  onAdd={handleAdd}/></div>
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
