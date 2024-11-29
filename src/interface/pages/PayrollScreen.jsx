import { Filter, FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicCard from "../components/Card";
import ReusableModal from "../components/Modal";

const PayrollScreen = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const payList = [
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
  ];
  return (
    <Box sx={{ padding: "20px" }}>
      <Box className="flex flex-row justify-between">
        <Box className="my-auto">
          <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 4 }}>
            Payroll hours: 220h
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "14px",
              color: "#8F8F8C",
            }}
          >
            18. April 2022.
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
            }}
            onClick={handleOpen}
          >
            <FilterAlt />
            Filter
          </Button>
          <Box className="flex flex-row justify-end items-end translate-y-7">
            <Typography
              sx={{ fontWeight: "400", fontSize: "14px", my: "auto" }}
            >
              Display earnings
            </Typography>
            <Switch className="my-auto" color="success" defaultChecked/>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mb: 1,

              width: { lg: "514px", xs: "auto" },

              padding: "0 20px",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
                color: "#818080",
              }}
            >
              Hours
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
                color: "#818080",
              }}
            >
              Pay
            </Typography>
          </Box>
          {payList.slice(0, 6).map((item, index) => (
            <BasicCard
              key={index}
              name={item.name}
              location={item.location}
              image={item.image}
              hours={item.hours}
              pay={item.pay}
            />
          ))}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              mb: 1,

              width: { lg: "514px", xs: "auto" },

              padding: "0 20px",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
                color: "#818080",
              }}
            >
              Hours
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
                color: "#818080",
              }}
            >
              Pay
            </Typography>
          </Box>
          {payList.slice(6).map((item, index) => (
            <BasicCard
              key={index}
              name={item.name}
              location={item.location}
              image={item.image}
              hours={item.hours}
              pay={item.pay}
            />
          ))}
        </Grid>
      </Grid>
      <ReusableModal isOpen={modalOpen} onClose={handleClose}></ReusableModal>
    </Box>
  );
};

export default PayrollScreen;
