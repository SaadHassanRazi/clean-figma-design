import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../components/Button";
const SplashScreen = () => {
  return (
    <div className="flex flex-col bg-[#06726A] w-screen min-h-screen items-center justify-center">
      <div className="sm:w-[196px] w-[150px] h-[281px]">
        <img src={Logo} alt="logo" />
      </div>
      <div className="mb-10">
        <p className="text-[24px] font-[500] text-white">I am a</p>
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          type="button"
          className="bg-[#FFFFFF] "
          label={"Business Admin"}
        />
        <Button type="button" className="bg-[#FFFFFF] " label={"Employee"} />
      </div>
    </div>
  );
};

export default SplashScreen;
