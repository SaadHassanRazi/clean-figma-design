import React from "react";
import IndexField from "../components/IndexField";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import TokenField from "../components/TokenField";

const TwoFactorAuthenticationScreen = () => {
  return (
    <AuthLayout
      title="Token input"
      description="Please enter 4 digit code sent to your email address"
      className={"h-[384px]  gap-y-12"}
    >
      <TokenField />
      <div className="flex flex-col mx-auto">
        <Button label={"Submit"} className={"bg-[#06726A] text-white"} />
        <Button label={"Resend Token"} className={"text-[#06726A]"} />
      </div>
    </AuthLayout>
  );
};

export default TwoFactorAuthenticationScreen;
