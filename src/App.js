import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import BotoesHeader from "./components/BotoesHeader/BotoesHeader";
import Layout2Col from "./pages/Layout2/Layout2Col";
import Layout3Col from "./pages/Layout3/Layout3Col";
import Layout1Col from "./pages/Layout1/Layout1Col";
import Layout4 from "./pages/Layout4/Layout4";
import NoticiaAberta from "./pages/NoticiaAberta/NoticiaAberta";


function App() {
<<<<<<< HEAD
  const [noticia, setNoticia] = useState({});


=======
  const [noticias, setNoticia] = useState([]);
>>>>>>> 5073402b3cc4c3c46d7f8123951d8433c8012ae0
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
<<<<<<< HEAD
          {/*   <Route path="/" element={<Home />}></Route> */}

          {/* <Route path="/" element={<Layout2Col titulo="Science" pagina="science"
          opcao1="CLIMATE" 
          opcao2="SPACE AND ASTRONOMY" 
          opcao3="HEALTH"
          opcao4="TRILOBITES"
          opcao5="MATTER"
          opcao6="OUTTHERE"
          opcao7="CORONAVIRUS OUTBREAK"
          />}></Route> */}

          {/* <Route path="/" element={<Layout4 titulo="U.S. Politic" pagina="politics"
          opcao1="JOE BIDEN"
          opcao2="2022 MIDTERM ELECTIONS"
          />}></Route> */}

          {/* <Route path="/" element={<Layout3Col titulo="Technology" pagina="technology"
           opcao1="DEALBOOK" 
           opcao2="MARKETS" 
           opcao3="ECONOMY"
           opcao4="ENERGY"
           opcao5="MEDIA"
           opcao6="TECHNOLOGY"
           opcao7="PERSONAL TECH"
           opcao8="SMALL BUSINESS"
           opcao9="YOUR MONEY"
           opcao10="MUTUAL FUNDS AND ETFS"
          />}></Route> */}

          {/* <Route path="/" element={<Layout3Col titulo="World News" pagina="world"
          opcao1="AFRICA" 
          opcao2="AMERICAS" 
          opcao3="ASIA"
          opcao4="AUSTRALIA"
          opcao5="CANADA"
          opcao6="EUROPE"
          opcao7="MIDDLE EAST"
          />}></Route> */}

          <Route path="/" element={<Layout1Col titulo="Healt" 
          opcao1="HEALTH POLICY" 
          opcao2="GLOBAL HEALTH" 
          opcao3="THE NEW OLD AGE"
          opcao4="SCIENCE"
          opcao5="WELL"
          opcao6="CORONAVIRUS OUTBREAK"
          />}></Route>

          {/* <Route path="/" element={<NoticiaAberta />}></Route> */}
          
=======
          <Route path="/" element={<Home noticias={noticias} />}></Route>
>>>>>>> 5073402b3cc4c3c46d7f8123951d8433c8012ae0
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
