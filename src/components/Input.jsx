import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("Pidors");

  return (
    <div>
      <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
};

export default Input;
