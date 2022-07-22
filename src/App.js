import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import BotoesHeader from "./components/BotoesHeader/BotoesHeader";
import Layout2Col from "./pages/Layout2Col/Layout2Col";
import Layout3Col from "./pages/Layout3Col/Layout3Col";

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
          {/*   <Route path="/" element={<Home />}></Route> */}
          {/* <Route path="/" element={<Layout2Col titulo="Sciense" />}></Route> */}
          <Route path="/" element={<Layout3Col titulo="Tech"/>}></Route>

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
