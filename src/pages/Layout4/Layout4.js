import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import style from "./Layout4.module.css";

function Layout4({
  titulo,
  pagina,
  opcoes,
  setTitleClicada,
  setAbstractClicada,
  setMultimediaClicada,
  setKickerClicada,
}) {
  const [noticias, setNoticias] = useState([]);

  async function setup() {
    try {
      const { data } = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${pagina}.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0`,
      );
      setNoticias(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setup();
  }, []);

  const noticiasPrincipal = noticias.filter((noticia, index) => {
    return index === 9 || index === 10;
  });

  const noticiasAside = noticias.filter((noticia, index) => {
    return index >= 5 && index <= 6;
  });

  function setValores(title, abstract, multimedia, kicker) {
    setTitleClicada(title);
    setAbstractClicada(abstract);
    setMultimediaClicada(multimedia);
    setKickerClicada(kicker);
  }

  return (
    <div>
      <PagesHeader titulo={titulo} opcoes={opcoes} />

      <div className="container">
        <section className={style.displayGrid}>
          <div>
            {noticiasPrincipal.map(
              (
                { title, abstract, byline, multimedia, published_date, kicker },
                i,
              ) => (
                <div className={style.layoutPrincipal} key={i}>
                  <div>
                    <h1>
                      <Link
                        to="/noticia"
                        onClick={() =>
                          setValores(title, abstract, multimedia[1].url, kicker)
                        }
                      >
                        {title ? title : "Has no title"}
                      </Link>
                    </h1>
                    <p>{abstract ? abstract : "Has no description"}</p>
                    <span>
                      {moment(published_date).format("hh:mm")}h -{" "}
                      {byline ? byline : "Has no copyright"}
                    </span>
                  </div>
                  <div>
                    <Link
                      to="/noticia"
                      onClick={() =>
                        setValores(title, abstract, multimedia[1].url, kicker)
                      }
                    >
                      <img src={multimedia ? multimedia[1].url : "./"} alt="" />
                    </Link>
                    <small>{multimedia ? multimedia[1].copyright : "."}</small>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className={style.columnNoticias}>
            {noticiasAside.map(
              (
                { title, abstract, byline, multimedia, published_date, kicker },
                i,
              ) => (
                <aside className={style.asideLayout4} key={i}>
                  <div>
                    <h2>
                      <Link
                        to="/noticia"
                        onClick={() =>
                          setValores(title, abstract, multimedia[1].url, kicker)
                        }
                      >
                        {title ? title : "Has no title"}
                      </Link>
                    </h2>
                  </div>
                  <div
                    className={`${style.displayFlex} ${style.flexDirection}`}
                  >
                    <div>
                      <p>{abstract ? abstract : "Has no description"}</p>
                      <span>
                        {moment(published_date).format("hh:mm")}h -{" "}
                        {byline ? byline : "Has no copyright"}
                      </span>
                    </div>
                    <div>
                      <Link
                        to="/noticia"
                        onClick={() =>
                          setValores(title, abstract, multimedia[1].url, kicker)
                        }
                      >
                        <img
                          src={multimedia ? multimedia[2].url : "./"}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </aside>
              ),
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Layout4;
