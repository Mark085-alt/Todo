import React from "react";

const Input = ({ input, changeHandler }) => {
  
  return (
    <div className="flex items-center justify-center w-7/12">
      <input
        value={input}
        onChange={(e) => changeHandler(e)}
        type="text"
        className="p-4 text-xl w-full rounded-lg text-black font-semibold"
      />
    </div>
  );
};

export default Input;
