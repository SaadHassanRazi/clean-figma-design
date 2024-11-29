import React from "react";
import IndexField from "./IndexField";
import PasswordInput from "./PasswordField";
import { Typography } from "@mui/material";

const SignUpComponent = () => {
  return (
    <div className="mt-10 flex flex-col gap-y-4">
      <IndexField
        variant={"outlined"}
        label={"Email Address"}
        sx={
          "w-[340px] h-[50px] rounded-[10px] text-start border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        }
        placeholder={"Username"}
        name={"username"}
        type={"text"}
      />
      <IndexField
        variant={"outlined"}
        label={"Email Address"}
        sx={
          "w-[340px] h-[50px] rounded-[10px] text-start border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        }
        placeholder={"Email Address"}
        name={"email"}
        type={"email"}
      />

      <PasswordInput
        className={
          "w-[340px] h-[50px] rounded-[10px] text-start border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        }
        placeholder={"Password"}
      />
    </div>
  );
};

export default SignUpComponent;
