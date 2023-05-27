import React from "react";

const Buttons = ({ children, bg }) => {
  return (
    <div>
      <button className={`text-white my-3 ${bg?`${bg}`:'btn hover:bg-[#9AB4DE] bg-[#B3A4C3]'}`}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;
