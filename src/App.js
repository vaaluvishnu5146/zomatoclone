import { Box } from "@mui/material";
import AppHeader from "./Components/Navbar/AppHeader";
import ItemSlider from "./Components/ItemsSlider/ItemSlider";
import { useState, useEffect } from "react";
import { saveCategories } from "./Redux/Reducers/Categories.reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatcher = useDispatch();
  const { category = [] } = useSelector((state) => state.categories);
  useEffect(() => {
    fetch("http://localhost:3000/mocks/categories.json")
      .then((response) => response.json())
      .then(({ data }) => {
        dispatcher(saveCategories(data));
      });
    return () => {};
  }, []);

  return (
    <Box bgcolor={"background"} color={"text"} className="App">
      <AppHeader />
      <Box id="app=body" className="app-body">
        <ItemSlider title="Categories" data={category} />
      </Box>
    </Box>
  );
}

export default App;
