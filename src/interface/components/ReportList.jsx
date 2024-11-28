import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const ReportList = ({ name, location }) => {
  return (
    <div>
      <ListItem
        disablePadding // Remove default padding
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Align vertically
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "gray",
                    mt:'10px'
                  }}
                >
                  {location}
                </Typography>
              </React.Fragment>
            }
            sx={{
              marginLeft: "8px",
              "& .MuiTypography-body1": {
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          <Typography
            sx={{ color: "#A8A8A8", fontSize: "12px", fontWeight: "500",mt:'30px' }}
          >
            View Details
          </Typography>
        </Box>
      </ListItem>
      <Divider sx={{mt:"15px"}}/>
    </div>
  );
};

export default ReportList;
