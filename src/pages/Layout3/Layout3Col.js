import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import style from "./Layout3Col.module.css";

function LayoutCol3({ titulo, pagina, opcoes }) {
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

  const noticiaPrincipal = noticias.filter((noticia, index) => {
    return index === 3;
  });
  const noticiaSecundaria = noticias.filter((noticia, index) => {
    return index === 4;
  });
  const noticiaAside = noticias.filter((noticia, index) => {
    return index >= 5 && index <= 6;
  });

  return (
    <div>
      <PagesHeader titulo={titulo} opcoes={opcoes} />
      <div className="container">
        <section className={style.section}>
          {noticiaPrincipal.map(
            ({ title, abstract, byline, multimedia }, i) => (
              <div className={style.primaria} key={i}>
                <img src={multimedia ? multimedia[1].url : "./"} alt="" />
                <div>
                  <h1>{title ? title : "Has no title"}</h1>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <p>{byline}</p>
                </div>
              </div>
            ),
          )}

          {noticiaSecundaria.map(
            ({ title, abstract, byline, multimedia }, i) => (
              <div className={style.secundaria} key={i}>
                <img src={multimedia ? multimedia[1].url : "./"} alt="" />
                <div>
                  <h1>{title ? title : "Has no title"}</h1>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <p>{byline ? byline : "Has no copyright"}</p>
                </div>
              </div>
            ),
          )}
          <div>
            <div className={style.aside}>
              {noticiaAside.map(
                ({ title, abstract, byline, multimedia }, i) => (
                  <div key={i}>
                    <h1>{title ? title : "Has no title"}</h1>
                    <p>
                      <img src={multimedia ? multimedia[1].url : "./"} alt="" />

                      {abstract ? abstract : "Has no description"}
                    </p>

                    <p>{byline ? byline : "Has no copyright"}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      </div>
      {<GaleriaNoticia />}
    </div>
  );
}
export default LayoutCol3;
