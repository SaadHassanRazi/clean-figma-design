import React, { useRef } from "react";
import "./css/tokenform.css";

const TokenField = () => {
  // Use refs to access input elements
  const inputRefs = useRef([]);

  const handleInput = (index, event) => {
    const value = event.target.value;

    // Only allow one digit (optional)
    if (value.length > 1) {
      event.target.value = value.slice(0, 1);
    }

    // Move to the next input if exists and the input is valid
    if (value && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      document.getElementById("submitted").checked = true;
    }
  };

  return (
    <div>
      <form>
        {[0, 1, 2, 3].map((_, index) => (
          <input
            key={index}
            type="number"
            min="0"
            max="9"
            placeholder=" "
            onInput={(event) => handleInput(index, event)}
            ref={(el) => (inputRefs.current[index] = el)}
            autoFocus={index === 0} // Autofocus only on the first input
          />
        ))}

        <span className="indicator"></span>
      </form>
    </div>
  );
};

export default TokenField;
