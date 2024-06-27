import React, { useState } from "react";
import Input from "./Input";
import Card from "./Card";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);

  function changeHandler(e) {
    const res = e.target.value;
    setInput(res);
  }

  function clickHandler() {
    if (input.trim() === "") return;
    setTasks( [input, ...tasks]);
    setInput("");
  }

  function editHandler() {
    setEdit(!edit);
  }

  function deleteHandler(index){
    setTasks((prevTasks) => (prevTasks.filter((_,i) => i !== index)));
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* div for adding task contains input field and button */}
      <div className="w-11/12 flex justify-evenly items-center">
        <Input input={input} changeHandler={changeHandler} />
        <div>
          <button
            onClick={clickHandler}
            className="bg-green-600 p-4 rounded-md font-semibold hover:bg-green-500"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* div for card of task */}
      <div className="flex flex-col w-full justify-center items-center gap-12">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center w-8/12 gap-7">
            <div className="w-full flex ">
              <Card task={task} edit={edit} />
            </div>
            <div>
              <button
                className="bg-blue-500 p-4 rounded-md"
                onClick={()=> editHandler()}
              >
                {edit ? "Done" : "Edit"}
              </button>
            </div>
            <div>
              <button
                className="bg-red-500 p-4 rounded-md"
                onClick={() => deleteHandler(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
