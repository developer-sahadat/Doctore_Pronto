import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button class="btn text-white  bg-gradient-to-r from-secondary to-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
