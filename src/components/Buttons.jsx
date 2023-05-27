import React from "react";

const Buttons = ({ children }) => {
  return (
    <div>
      <button className="text-white my-3 btn hover:bg-[#9AB4DE] bg-[#B3A4C3]">
        {children}
      </button>
    </div>
  );
};

export default Buttons;
