import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function LocationPicker() {
  const { user = {} } = useSelector((state) => state.userDetails);
  console.log(user);
  return (
    <Box
      id="location-picker-button"
      className="location-picker-button"
      sx={{
        display: "flex",
      }}
    >
      <Box
        bgcolor={"primary.dark"}
        className="location-icon"
        id="location-icon"
      >
        <span className="material-symbols-outlined">location_on</span>
      </Box>
      <Box id="location-details">
        <Typography
          variant="body1"
          fontWeight={"bolder"}
          fontFamily={"poppins"}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {user.selectedAddress.addressType}{" "}
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </Typography>
        <Typography variant="body2" fontFamily={"poppins"}>
          {user.selectedAddress.addressLine1}
        </Typography>
      </Box>
    </Box>
  );
}
