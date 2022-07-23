import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import style from "./Layout2Col.module.css";

function Layout2Col({ titulo, pagina, opcoes }) {
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
    return index === 3;
  });

  const noticiasAside = noticias.filter((noticia, index) => {
    return index >= 6 && index <= 8;
  });

  return (
    <div>
      <PagesHeader titulo={titulo} opcoes={opcoes} />

      <div className="container">
        <section className={style.displayGrid}>
          {noticiasPrincipal.map(
            ({ title, abstract, byline, multimedia }, i) => (
              <div className={style.layoutPrincipal} key={i}>
                <img src={multimedia ? multimedia[1].url : "./"} alt="" />
                <div>
                  <h1>{title ? title : "Has no title"}</h1>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <p>{byline ? byline : "Has no copyright"}</p>
                </div>
              </div>
            ),
          )}
          <div className={style.columnNoticias}>
            {noticiasAside.map(({ title, abstract, byline, multimedia }, i) => (
              <aside className={style.asideLayout2} key={i}>
                <div>
                  <h2>{title ? title : "Has no title"}</h2>
                  <img src={multimedia ? multimedia[2].url : "./"} alt="" />
                </div>
                <p>{abstract ? abstract : "Has no description"}</p>
                <p>{byline ? byline : "Has no copyright"}</p>
              </aside>
            ))}
          </div>
        </section>
      </div>
      <GaleriaNoticia noticias={noticias} />
    </div>
  );
}
export default Layout2Col;
