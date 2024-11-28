import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";
import CleanLogo from "../../assets/clean.png";
import IndexField from "../components/IndexField";
import Button from "../components/Button";
const SignUpScreen = () => {
  return (
    <div className="flex flex-row ">
      <div className="wrapper">
        <div className="lg:flex flex-col gap-y-10  ps-10 hidden">
          <img
            src={CleanLogo}
            className="w-[106px] h-[22px]"
            alt="clean logo"
          />
          <div className="w-[673px] h-[110px]">
            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: "700",
                lineHeight: "55px",
                letterSpacing: "0.02em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Superior scheduling system for cleaning companies.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col ms-auto bg-white w-[502px] h-[900px] items-center justify-normal border z-10 rounded-l-xl gap-y-10">
          <Box sx={{ marginTop: "150px" }}>
            <p className="font-[500] text-[36px] text-center ">
              How do you refer
              <br /> to your employees?
            </p>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0.02em",
                textAlign: "center",
                color: "#8B8B8B",
                mt: "20px",
              }}
            >
              Employees will see this term
            </Typography>
          </Box>
          <IndexField
            sx={
              "w-[340px] h-[50px] rounded-[10px] border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
            }
            placeholder={"e.g. Cleaners, Janitors, Crew, Gang, Team..."}
          />
          <div className="flex flex-row ">
            <Checkbox />
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "12px",
                textAlign: "center",
                my: "auto",
              }}
            >
              I have read{" "}
              <span className="font-[500] text-[#06726A] ">
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span className="font-[500] text-[#06726A] ">
                {" "}
                Privacy Policy
              </span>
            </Typography>
          </div>
          <div className="mx-auto flex flex-col">
            <Button
              className={"bg-[#06726A]"}
              type={"button"}
              label={"Sign Up"}
            />
            <Button
              className={"text-[#06726A] "}
              label={"Back"}
              type={"button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
