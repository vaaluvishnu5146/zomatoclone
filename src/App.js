import { Box, Typography } from "@mui/material";
import AppHeader from "./Components/Navbar/AppHeader";
import ItemSlider from "./Components/ItemsSlider/ItemSlider";
import { useState, useEffect } from "react";
import { saveCategories } from "./Redux/Reducers/Categories.reducer";
import { useDispatch, useSelector } from "react-redux";
import BasicSlider from "./Components/Carousels/BasicSlider";
import { saveOffers } from "./Redux/Reducers/Offer.reducer";
import RestaurantCard from "./Components/Cards/RestaurantCard";

function App() {
  const { offer = [] } = useSelector((state) => state.offers);
  const dispatcher = useDispatch();
  const { category = [] } = useSelector((state) => state.categories);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/mocks/categories.json")
      .then((response) => response.json())
      .then(({ data }) => {
        dispatcher(saveCategories(data));
      });

    // FETCHING OFFERS DATA
    fetch("http://localhost:3000/mocks/offers.json")
      .then((response) => response.json())
      .then(({ data }) => {
        dispatcher(saveOffers(data));
      });

    // FETCH ALL RESTAURANTS AVAILABLE
    fetch("http://localhost:3000/mocks/restaurants.json")
      .then((response) => response.json())
      .then(({ result }) => {
        setRestaurants(result.data);
      });
    return () => {};
  }, []);

  return (
    <Box bgcolor={"background"} color={"text"} className="App">
      <AppHeader />
      <BasicSlider data={offer} />
      <Box id="app-body" className="app-body">
        <ItemSlider title="Categories" data={category} />
        <Box sx={{ height: "20px" }}></Box>
        <Box>
          <Typography variant="h6" fontFamily={"poppins"} fontWeight={"bold"}>
            3 Restaurants around you
          </Typography>
          <Box sx={{ height: "20px" }}></Box>
          <Box id="restaurant-listing" className="restaurant-listing">
            {restaurants.map((d, i) => (
              <RestaurantCard data={d} key={`restaurant-card-${i}`} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
