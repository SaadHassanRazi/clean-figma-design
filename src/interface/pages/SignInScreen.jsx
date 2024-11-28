import React from "react";
import CleaningPic from "../../assets/cleaning_background.png";
import "./css/signinscreen.css";
import { Box } from "@mui/material";

const SignInScreen = () => {
  return (
    <div className="flex flex-row ">
      <div className="wrapper "></div>
      <div className="flex flex-col w-[502px] h-[900px] items-center justify-center">
        <Box
          sx={{
            width: "271px",
            height: "54px",
          }}
        >
          <p className="font-[500] text-[36px] text-center">Welcome back</p>
        </Box>
      </div>
    </div>
  );
};

export default SignInScreen;
