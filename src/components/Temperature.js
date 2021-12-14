import { useState } from "react";
import "./Temperature.css";

const Temperature = () => {
  const [temp, setTemp] = useState(68);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  const getTempColor = () => {
    if (temp > 79) {
      return "red";
    } else if (temp > 69) {
      return "orange";
    } else if (temp > 59) {
      return "yellow";
    } else if (temp > 49) {
      return "green";
    } else {
      return "blue";
    }
  };

  const tempColor = getTempColor();

  return (
    <div>
      <p className={tempColor}>{temp}</p>
      <button onClick={increaseTemp}>+</button>
      <button onClick={decreaseTemp}>-</button>
    </div>
  );
};

export default Temperature;
