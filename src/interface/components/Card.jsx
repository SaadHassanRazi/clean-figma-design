import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

export default function BasicCard({ name, location, image, hours, pay }) {
  return (
    <Card
      sx={{
        margin: "10px 0",
        width: { lg: "514px", xs: "auto" },
        height: "79px",
        borderRadius: "10px",
        background: "#F9F9F9",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          padding: "20px 16px", // Adjust padding for better spacing
          width: "100%", // Ensure it spans the entire card width
        }}
      >
        <ListItem
          disablePadding // Remove default padding
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center", // Align vertically
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={image}
                sx={{ width: 40, height: 40 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "gray",
                    }}
                  >
                    {location}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      color: "#202020",
                      fontWeight: "400",
                    }}
                  >
                    Hourly Rate: $20/hr
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
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "",
                gap: "20px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                {hours}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                {pay}
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#A8A8A8", fontSize: "12px", fontWeight: "500" }}
            >
              View Details
            </Typography>
          </Box>
        </ListItem>
      </CardContent>
    </Card>
  );
}
