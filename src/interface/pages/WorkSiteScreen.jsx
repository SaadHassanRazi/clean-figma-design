import { Add, Filter, FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicCard from "../components/Card";
import ReportList from "../components/ReportList";

const WorkSiteScreen = () => {
  const payList = [
    {
      name: "WorkSite Number 1",
      location: "Worksite Location",
     
    },
    {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
      {
        name: "WorkSite Number 1",
        location: "Worksite Location",
       
      },
  ];
  return (
    <Box sx={{ padding: "20px" }}>
      <Box className="flex flex-row justify-between">
        <Box className="my-auto">
          <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 4 }}>
            My Worksites
          </Typography>
        </Box>
        <Box className="my-auto flex flex-col">
          <Button
            sx={{
              width: "178px",

              height: "36px",
              bgcolor: "#A8A8A8",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <Add />
            Add Worksite
          </Button>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* Grid for two-column layout */}
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} sm={6}>
          {payList.slice(0, 7).map((item, index) => (
            <ReportList key={index} name={item.name} location={item.location} />
          ))}
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={6}>
          {payList.slice(7).map((item, index) => (
            <ReportList key={index} name={item.name} location={item.location} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkSiteScreen;
