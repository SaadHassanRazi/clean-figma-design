import React from "react";
import IndexField from "../components/IndexField";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ForgotPasswordScreen = () => {
  return (
    <AuthLayout
      title="Forgot Password"
      description="Please enter your email address in order to reset your password"
      className={"h-[384px] w-[352px] gap-y-12"}
    >
      <IndexField
        sx="w-[340px] h-[50px] text-start rounded-[10px] border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        placeholder="Enter your email"
      />
      <div className="flex flex-col mx-auto">
        <Link to={"/signup"}>
          <Button label={"Submit"} className={"bg-[#06726A] text-white"} />
        </Link>
      
        <Button label={"Resend Token"} className={"text-[#06726A]"} />
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordScreen;
