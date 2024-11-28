import React from "react";
import { CalendarMonthRounded } from "@mui/icons-material";
import { Avatar, Box, Divider, Grid, Typography } from "@mui/material";
import Button from "../components/Button";
import AccordionUsage from "../components/Accordian";

const ProfileScreen = () => {
  const cardStyles = {
    width: "100%",
    maxWidth: "501px",
    height: "205px",
    borderRadius: "10px",
    background: "#DEDEDE",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 3,
  };

  const headingStyles = {
    fontWeight: 500,
    fontSize: "22px",
    color: "#202020",
  };

  const subTextStyles = {
    fontWeight: 500,
    fontSize: "14px",
    color: "#818080",
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 4 }}>
        View Employee
      </Typography>

      <Divider />
      <Box sx={{ my: "30px", display: "flex", gap: "20px" }}>
        <Avatar
          sx={{ width: "102px", height: "102px", borderRadius: "10px" }}
        />
        <div className="my-auto">
          <Typography
            sx={{ fontWeight: "500", fontSize: "22px", color: "#202020" }}
          >
            John Doe
          </Typography>
          <div className="d-flex flex-row">
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <span className="font-[400] text-[12px] text-[#818080]">
                Position:
              </span>
              Cleaner
            </Typography>
          </div>
        </div>
      </Box>
      <div className="flex flex-col gap-y-10">
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Date of birth:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            6/16/1985
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Email Address:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            johndoe@gmail.com
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Phone Number:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            +1122334455
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Address:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            Street number 1. New York
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Hourly Rate:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            $10/hr
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default ProfileScreen;
