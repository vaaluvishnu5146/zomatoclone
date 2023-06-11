import { Box, Typography } from "@mui/material";
import React from "react";

export default function ItemSlider({ title = "", data = [] }) {
  return (
    <Box className="item-slider-container">
      <Typography
        className="category-heading"
        variant="h6"
        fontWeight={"bold"}
        fontFamily={"poppins"}
      >
        {title}
      </Typography>
      <Box className="items-listings">
        {data.map((d, i) => (
          <Box id="category-card" className="category-card">
            <img src={d.image} alt={d.label} loading="lazy" />
            <Typography variant="body2" fontFamily={"poppins"} fontWeight={500}>
              {d.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
