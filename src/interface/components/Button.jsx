import React from "react";

const Button = ({ type, className, label }) => {
  return (
    <button
      type={type}
      className={`"sm:w-[340px] w-[300px] mx-auto rounded-[10px] h-[50px] text-center text-white  ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
