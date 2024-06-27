import React, { useEffect, useState } from "react";

const Card = ({ task, edit }) => {
  const [newTask, setNewTask] = useState(task);
  
 
  useEffect(() => {
    setNewTask(task);
  },[task]);

  function cardChangeHandler(e) {
    setNewTask(e.target.value);
  }

  return (
    <div className="w-full">
      <input
        readOnly={!edit}
        type="text"
        className="bg-slate-600 p-4 rounded-sm w-full"
        value={newTask}
        onChange={cardChangeHandler}
      />
    </div>
  );
};

export default Card;
