import { Box } from "@mui/material";
import React from "react";
import LocationPicker from "../LocationPicker/LocationPicker";

export default function AppHeader() {
  return (
    <Box className="App_Header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Logo"
        width="auto"
        height="24"
        className="d-inline-block align-text-top"
      />
      <Box id="Location_Picker">
        <LocationPicker />
      </Box>
    </Box>
  );
}
