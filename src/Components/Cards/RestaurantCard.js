import { Box, Card, Chip, Typography } from "@mui/material";
import React from "react";

export default function RestaurantCard({ data = {} }) {
  return (
    <Card className="restaurant-card">
      <Box className="brandContainer">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="restaurant"
        />
        <Box className="overlay">
          <Box className="row">
            <Chip label="Promoted" color="secondary" size="small" />
            <Box className="bookmark-btn">
              <span class="material-symbols-outlined">bookmark</span>
            </Box>
          </Box>
          <Box className="row">
            <Chip label="20% Off" color="secondary" size="small" />
            <Chip label="29mins" color="secondary" size="small" />
          </Box>
        </Box>
      </Box>
      <Box className="brandDetails">
        <Box className="row">
          <Typography
            className="restaurantName"
            variant="h5"
            fontFamily={"poppins"}
            fontWeight={"bold"}
          >
            {data.restaurantName}
          </Typography>
          <Typography variant="h5" fontFamily={"poppins"}>
            5
          </Typography>
        </Box>
        <Box className="row">
          <Typography variant="body2" fontFamily={"poppins"}>
            Briyani, Deserts, kachi
          </Typography>
          <Typography variant="body2" fontFamily={"poppins"}>
            Price range 250 - 550
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
