import React from "react";
import { CalendarMonthRounded, FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import BigCalendar from "../components/BigCalendar";

const SchedularScreen = () => {
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
      <div className="flex flex-row justify-between">
        <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 4 }}>
          Scheduler
        </Typography>
        <div className="flex flex-col gap-2">
          <Button
            sx={{
              width: "178px",
              height: "36px",
              borderRadius: "10px",
              bgcolor: "#A8A8A8",
              color: "white",
            }}
          >
            <FilterAlt sx={{ width: "16px", height: "14px" }} />
            Filter
          </Button>
          <Button
            sx={{
              width: "178px",
              height: "36px",
              borderRadius: "10px",
              bgcolor: "#A8A8A8",
              color: "white",
            }}
          >
            Publish All
          </Button>
        </div>
      </div>
      <Divider sx={{ my: "20px" }} />
      <BigCalendar />
    </Box>
  );
};

export default SchedularScreen;
