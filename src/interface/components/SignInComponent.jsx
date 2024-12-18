import React from "react";
import IndexField from "./IndexField";
import PasswordInput from "./PasswordField";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignInComponent = () => {
  return (
    <div className="mt-10 flex flex-col gap-y-4">
      <IndexField
        variant={"outlined"}
        label={"Email Address"}
        sx={
          "w-[340px] h-[50px] rounded-[10px] text-start border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        }
        placeholder={"Email Address"}
        name={"email"}
        type={"text"}
      />

      <PasswordInput
        className={
          "w-[340px] h-[50px] rounded-[10px] text-start border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        }
        placeholder={"Password"}
      />
      <Typography
        sx={{
          textAlign: "end",
          color: "#06726A",
          fontWeight: "500",
          float: "right",
        }}
        component={Link}
        to={"/forgotpassword"}
      >
        Forgot Password?
      </Typography>
    </div>
  );
};

export default SignInComponent;
