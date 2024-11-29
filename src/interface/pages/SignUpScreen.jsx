import React from "react";
import { Checkbox, Typography } from "@mui/material";
import IndexField from "../components/IndexField";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

const SignUpScreen = () => {
  return (
    <AuthLayout
      title="How do you refer to your employees?"
      description="Employees will see this term"
      className={"h-[500px] w-[352px]"}
    >
      <IndexField
        sx="w-[340px] h-[50px] rounded-[10px] border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        placeholder="e.g., Cleaners, Janitors, Crew, Team..."
      />
      <div className="flex flex-row items-center">
        <Checkbox />
        <Typography sx={{ fontSize: "12px" }}>
          I have read{" "}
          <span className="font-[500] text-[#06726A]">
            Terms and Conditions
          </span>{" "}
          and <span className="font-[500] text-[#06726A]">Privacy Policy</span>
        </Typography>
      </div>
      <div className="flex flex-col">
        <Button className="bg-[#06726A] text-white" label="Sign Up" />
        <Button className="text-[#06726A]" label="Back" />
      </div>
    </AuthLayout>
  );
};

export default SignUpScreen;
