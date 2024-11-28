import React from "react";
import {
  InputBase,
  Button,
  Stack,
  Typography,
  InputAdornment,
  Avatar,
} from "@mui/material";
import {
  Menu,
  NotificationAddRounded,
  SearchRounded,
} from "@mui/icons-material";

const Navbar = ({ onClick }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Brand/Logo */}

      {/* Search Bar */}
      <Stack direction="row" alignItems="center" sx={{ gap: "10px" }}>
        <InputBase
          placeholder="Search"
          sx={{
            display: { lg: "flex", xs: "none" },
            width: "340px",
            height: "45px",
            textAlign: "start",
            border: "1px solid #CECECE",
            borderRadius: "10px",
            backgroundColor: "#F7F7F7",
          }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                sx={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SearchRounded sx={{ color: "#818080" }} />
              </Button>
            </InputAdornment>
          }
        />
      </Stack>

      {/* User Profile or Navigation */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="text" sx={{ color: "#333", textTransform: "none" }}>
          <NotificationAddRounded />
        </Button>
        <Avatar
          variant="square"
          sx={{ width: "42px", height: "42px", borderRadius: "10px" }}
        />
        <Typography
          sx={{ fontWeight: "500", fontSize: "16px", color: "#202020" }}
        >
          {" "}
          John Doe
        </Typography>
        <Button variant="" onClick={onClick} sx={{}}>
          <Menu sx={{ color: "#727272", width: "24px" }} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
