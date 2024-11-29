import { Filter, FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicCard from "../components/Card";
import ReusableModal from "../components/Modal";
import { useOutletContext } from "react-router-dom";

const PayrollScreen = () => {
  const { querySearch } = useOutletContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [filterCardData, setFilterCardData] = useState([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const [displayEarnings, setDisplayEarnings] = useState(true);

  const payList = [
    {
      name: "John Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "Alex Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "Jane Doe",
      location: "Location",
      image: "/static/images/avatar/1.jpg",
      hours: "25h",
      pay: "$250",
    },
    {
      name: "Joker Doe",
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
  const filteredData = payList.filter((item, index) =>
    item.name.toLowerCase().includes(querySearch.toLowerCase())
  );
  const submitHandler = (data) => {
    console.log("Submited Data", data);
    const applyFilter = payList.filter(
      (item, index) =>
        item.name.toLowerCase().includes(data.name.toLowerCase()) &&
        item.location.toLowerCase().includes(data.location.toLowerCase())
    );
    setFilterCardData(applyFilter);
    setModalOpen(false);
  };

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
            <Switch
              className="my-auto"
              onChange={(e) => setDisplayEarnings(e.target.checked)}
              checked={displayEarnings}
              color="success"
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      {filteredData.length !== 0 && querySearch ? (
        filteredData.map((item, index) => {
          return (
            <Grid>
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
              <BasicCard
                key={index}
                name={item.name}
                location={item.location}
                image={item.image}
                hours={displayEarnings ? item.hours : ""}
                pay={displayEarnings ? item.pay : ""}
              />
            </Grid>
          );
        })
      ) : filterCardData.length !== 0 ? (
        filterCardData.map((item, index) => {
          return (
            <Grid>
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
              <BasicCard
                key={index}
                name={item.name}
                location={item.location}
                image={item.image}
                hours={displayEarnings ? item.hours : ""}
                pay={displayEarnings ? item.pay : ""}
              />
            </Grid>
          );
        })
      ) : (
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
                hours={displayEarnings ? item.hours : ""}
                pay={displayEarnings ? item.pay : ""}
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
                hours={displayEarnings ? item.hours : ""}
                pay={displayEarnings ? item.pay : ""}
              />
            ))}
          </Grid>
        </Grid>
      )}
      <ReusableModal
        formData={submitHandler}
        isOpen={modalOpen}
        onClose={handleClose}
      ></ReusableModal>
    </Box>
  );
};

export default PayrollScreen;
