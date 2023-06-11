import { Box } from "@mui/material";
import React from "react";
import LocationPicker from "../LocationPicker/LocationPicker";

export default function AppHeader() {
  return (
    <Box className="App_Header">
      <Box className="startEnchancer Location_Picker" id="Location_Picker">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="Logo"
          width="auto"
          height="24"
          className="d-inline-block align-text-top"
        />
        <LocationPicker />
      </Box>
      <Box className="endEnhancer profileSection">
        <span id="searchButton" class="material-symbols-outlined">
          search
        </span>
        <Box
          className="profileIcon"
          sx={{
            backgroundImage: `url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80')`,
          }}
        ></Box>
      </Box>
    </Box>
  );
}
