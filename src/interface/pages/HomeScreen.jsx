import React from "react";
import { CalendarMonthRounded } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Button from "../components/Button";
import AccordionUsage from "../components/Accordian";

const HomeScreen = () => {
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
        My Dashboard
      </Typography>
      <Divider />
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} lg>
          <Box sx={cardStyles}>
            <Box display="flex" alignItems="center" gap={2}>
              <CalendarMonthRounded
                sx={{ color: "#06726A", width: 30, height: 34 }}
              />
              <Typography sx={headingStyles}>Upcoming Shift</Typography>
            </Box>
            <Box>
              <Typography sx={{ ...headingStyles, fontSize: 14 }}>
                Worksite number 1
              </Typography>
              <Typography sx={subTextStyles}>Location</Typography>
            </Box>
            <Button
              label="Clock in"
              className="text-[16px] h-[42px] font-[500] bg-[#06726A]"
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg>
          <AccordionUsage
            FirstAccordian="Active employees"
            SecondAccordian="Pay period to date: 23h"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeScreen;
