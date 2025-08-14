import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable
} from "@hello-pangea/dnd";
import type {
  DropResult,
  DraggableProvided,
  DraggableStateSnapshot,
  DroppableProvided
} from "@hello-pangea/dnd";

import TodoItem from "./todoitem";
import type { TodoListProps } from "../types/task";

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onToggleDone,
  onToggleHide,
  onDelete,
  onEditTask,
  onChangePriority,
  setTasks,
}) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reordered = Array.from(tasks);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setTasks(reordered);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo-list">
        {(dropProvided: DroppableProvided) => (
          <div
            ref={dropProvided.innerRef}
            {...dropProvided.droppableProps}
            className="flex flex-col gap-5"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id.toString()}
                draggableId={task.id.toString()}
                index={index}
              >
                {(
                  dragProvided: DraggableProvided,
                  dragSnapshot: DraggableStateSnapshot
                ) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                    className={[
                      "px-4 py-3 rounded-lg transition",
                      dragSnapshot.isDragging
                        ? "bg-white/5 ring-1 ring-white/10 shadow-md"
                        : "",
                    ].join(" ")}
                  >
                    <TodoItem
                      task={task}
                      onToggleDone={onToggleDone}
                      onToggleHide={onToggleHide}
                      onDelete={onDelete}
                      onEditTask={onEditTask}
                      onChangePriority={onChangePriority}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
