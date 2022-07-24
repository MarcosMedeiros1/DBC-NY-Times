import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import NoticiaAberta from "../NoticiaAberta/NoticiaAberta";
import style from "./Layout1Col.module.css";

function Layout1Col({ titulo, opcoes }) {
  const [noticias, setNoticias] = useState([]);

  async function setup() {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0",
      );
      setNoticias(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setup();
  }, []);

  const noticiaFiltrada = noticias.filter((noticia, index) => {
    return index === 5;
  });

  const noticiaQtd3 = noticias.filter((noticia, index) => {
    return index >= 13 && index <= 15;
  });

  // <Route
  //   path="/noticia"
  //   element={<NoticiaAberta noticia={noticias} />}
  // ></Route>;

  return (
    <div className="container">
      <PagesHeader titulo={titulo} opcoes={opcoes} />
      <div className={style.health}>
        <section>
          {noticiaFiltrada.map(
            ({ title, abstract, byline, multimedia, published_date }, i) => (
              <div className={style.noticiaPrincipal} key={i}>
                <div>
                  <h1>
                    {/* <Link to="/noticia">{title ? title : "Has no title"}</Link> */}
                    {title ? title : "Has no title"}
                  </h1>

                  <p>{abstract ? abstract : "Has no description"}</p>
                  <span>
                    {moment(published_date).format("hh:mm")}h -{" "}
                    {byline ? byline : "Has no copyright"}
                  </span>
                </div>
                <div>
                  <img src={multimedia ? multimedia[1].url : "./"} alt="" />
                  <span>{multimedia ? multimedia[1].copyright : "."}</span>
                </div>
              </div>
            ),
          )}
        </section>

        <section className={style.displayGrid}>
          {noticiaQtd3.map(
            ({ title, abstract, byline, multimedia, published_date }, i) => (
              <div className={style.cardNoticia} key={i}>
                <div>
                  <img src={multimedia ? multimedia[2].url : "./"} alt="" />
                  <span>{multimedia ? multimedia[1].copyright : "."}</span>
                </div>
                <div>
                  <h2>{title ? title : "Has no title"}</h2>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <span>
                    {moment(published_date).format("hh:mm")}h -{" "}
                    {byline ? byline : "Has no copyright"}
                  </span>
                </div>
              </div>
            ),
          )}
        </section>
      </div>
      <GaleriaNoticia noticias={noticias} />
    </div>
  );
}
export default Layout1Col;
