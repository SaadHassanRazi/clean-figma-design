import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";

const PasswordInput = ({ className, placeholder, value, onChange }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="max-w-sm">
      <label htmlFor="password" className="block text-sm mb-2"></label>
      <div className="relative">
        <input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer "
        >
          {isPasswordVisible ? (
            <>
              {/* Eye (visible) */}
              <Visibility sx={{ color: "#818080" }} />
            </>
          ) : (
            <>
              {/* Eye (hidden) */}
              <VisibilityOff sx={{ color: "#818080" }} />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
