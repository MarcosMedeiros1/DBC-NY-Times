import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  const [noticia, setNoticia] = useState({});
  const key = "lJ6gYehzzdeNq5HGGB5WrW5SmkHtB5dY";
  const setup = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`,
      );
      setNoticia(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
