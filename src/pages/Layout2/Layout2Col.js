import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import style from "./Layout2Col.module.css";

function Layout2Col({ titulo, pagina, opcoes, setTitleClicada, setAbstractClicada, setMultimediaClicada }) {
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

  function setValores(title, abstract, multimedia) {
    setTitleClicada(title);
    setAbstractClicada(abstract);
    setMultimediaClicada(multimedia);
  }

  return (
    <div>
      <PagesHeader titulo={titulo} opcoes={opcoes} />
      <div className="container">
        <section className={style.displayGrid}>
          {noticiasPrincipal.map(
            ({ title, abstract, byline, multimedia, published_date }, i) => (
              <div className={style.layoutPrincipal} key={i}>
                <div>
                  <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[1].url : "./"} alt="" /></Link>
                  <span>{multimedia ? multimedia[1].copyright : "."}</span>
                </div>
                <div>
                  <h1> <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>
                    {title ? title : "Has no title"}</Link></h1>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <span>
                    {moment(published_date).format("hh:mm")}h -{" "}
                    {byline ? byline : "Has no copyright"}
                  </span>
                </div>
              </div>
            ),
          )}

          <aside className={style.columnNoticias}>
            {noticiasAside.map(
              ({ title, abstract, byline, multimedia, published_date }, i) => (
                <div className={style.asideLayout2} key={i}>
                  <div>
                    <h2><Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title ? title : "Has no title"}</Link></h2>
                    <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[2].url : "./"} alt="" /></Link>
                  </div>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <span>
                    {moment(published_date).format("hh:mm")}h -{" "}
                    {byline ? byline : "Has no copyright"}
                  </span>
                </div>
              ),
            )}
          </aside>
        </section>
      </div>
      <GaleriaNoticia 
      noticias={noticias}
      setTitleClicada={setTitleClicada}
      setAbstractClicada={setAbstractClicada}
      setMultimediaClicada={setMultimediaClicada} />
    </div>
  );
}
export default Layout2Col;
