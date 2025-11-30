import React from "react";

const Button = ({ text }) => {
  return (
    <button style={{
        borderRadius: "50px",
    }}>
      {text}
    </button>
  );
};

export default Button;