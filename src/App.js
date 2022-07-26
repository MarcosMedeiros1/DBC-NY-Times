import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout2Col from "./pages/Layout2/Layout2Col";
import Layout3Col from "./pages/Layout3/Layout3Col";
import Layout1Col from "./pages/Layout1/Layout1Col";
import Layout4 from "./pages/Layout4/Layout4";
import Footer from "./components/Footer/Footer";
import NoticiaAberta from "./pages/NoticiaAberta/NoticiaAberta";

function App() {
  const [noticias, setNoticia] = useState([]);
  const [titleClicada, setTitleClicada] = useState([]);
  const [abstractClicada, setAbstractClicada] = useState([]);
  const [multimediaClicada, setMultimediaClicada] = useState([]);
  const [kickerClicada, setKickerClicada] = useState([]);

  const key = "lJ6gYehzzdeNq5HGGB5WrW5SmkHtB5dY";
  const setup = async () => {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`,
      );
      setNoticia(data.results);
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
          <Route
            path="/noticia"
            element={
              <NoticiaAberta
                titleClicada={titleClicada}
                abstractClicada={abstractClicada}
                multimediaClicada={multimediaClicada}
                kickerClicada={kickerClicada}
              />
            }
          ></Route>

          <Route
            path="/"
            element={
              <Home
                noticias={noticias}
                setTitleClicada={setTitleClicada}
                setAbstractClicada={setAbstractClicada}
                setMultimediaClicada={setMultimediaClicada}
                setKickerClicada={setKickerClicada}
              />
            }
          ></Route>

          <Route
            path="/world"
            element={
              <Layout3Col
                titulo="World News"
                pagina="world"
                opcoes={[
                  "AFRICA",
                  "AMERICAS",
                  "ASIA",
                  "AUSTRALIA",
                  "CANADA",
                  "EUROPE",
                  "MIDDLE EAST",
                ]}
                setTitleClicada={setTitleClicada}
                setAbstractClicada={setAbstractClicada}
                setMultimediaClicada={setMultimediaClicada}
                setKickerClicada={setKickerClicada}
              />
            }
          ></Route>
          <Route
            path="/politics"
            element={
              <Layout4
                titulo="U.S. Politic"
                pagina="politics"
                opcoes={["JOE BIDEN", "2022 MIDTERM ELECTIONS"]}
                setTitleClicada={setTitleClicada}
                setAbstractClicada={setAbstractClicada}
                setMultimediaClicada={setMultimediaClicada}
                setKickerClicada={setKickerClicada}
              />
            }
          ></Route>
          <Route
            path="/tech"
            element={
              <Layout3Col
                titulo="Technology"
                pagina="technology"
                opcoes={[
                  "DEALBOOK",
                  "MARKETS",
                  "ECONOMY",
                  "ENERGY",
                  "MEDIA",
                  "TECHNOLOGY",
                  "PERSONAL TECH",
                  "SMALL BUSINESS",
                  "YOUR MONEY",
                  "MUTUAL FUNDS AND ETFS",
                ]}
                setTitleClicada={setTitleClicada}
                setAbstractClicada={setAbstractClicada}
                setMultimediaClicada={setMultimediaClicada}
                setKickerClicada={setKickerClicada}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <Layout2Col
                titulo="Science"
                pagina="science"
                opcoes={[
                  "CLIMATE",
                  "SPACE AND ASTRONOMY",
                  "HEALTH",
                  "TRILOBITES",
                  "MATTER",
                  "OUTTHERE",
                  "CORONAVIRUS OUTBREAK",
                ]}
                setTitleClicada={setTitleClicada}
                setAbstractClicada={setAbstractClicada}
                setMultimediaClicada={setMultimediaClicada}
                setKickerClicada={setKickerClicada}
              />
            }
          ></Route>
          <Route
            path="/health/*"
            element={
              <Layout1Col
                titulo="Health"
                opcoes={[
                  "HEALTH POLICY",
                  "GLOBAL HEALTH",
                  "THE NEW OLD AGE",
                  "SCIENCE",
                  "WELL",
                  "CORONAVIRUS OUTBREAK",
                ]}
                setTitleClicada={setTitleClicada}
                setAbstractClicada={setAbstractClicada}
                setMultimediaClicada={setMultimediaClicada}
                setKickerClicada={setKickerClicada}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
