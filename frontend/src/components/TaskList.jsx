import React from "react";
import TaskEmptState from "./TaskEmptState";
import TaskCard from "./TaskCard";

const TaskList = ({ filterTasks, filter, handleTaskChanged }) => {
  if (!filterTasks || filterTasks.length === 0) {
    return <TaskEmptState filter={filter} />;
  }

  return (
    <div className="space-y-3">
      {filterTasks.map((task, index) => (
        <TaskCard
          key={task._id ?? index}
          task={task}
          index={index}
          handleTaskChanged={handleTaskChanged}
        />
      ))}
    </div>
  );
};

export default TaskList;
