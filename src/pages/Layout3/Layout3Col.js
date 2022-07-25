import axios from "axios";
import moment from "moment";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader";
import style from "./Layout3Col.module.css";

function LayoutCol3({ titulo, pagina, opcoes, setTitleClicada, setAbstractClicada, setMultimediaClicada }) {
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
    return index === 2;
  });
  const noticiaSecundaria = noticias.filter((noticia, index) => {
    return index === 3;
  });
  const noticiaAside = noticias.filter((noticia, index) => {
    return index >= 5 && index <= 6;
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
        <section className={style.section}>
          {noticiaPrincipal.map(
            ({ title, abstract, byline, multimedia, published_date }, i) => (
              <div className={style.primaria} key={i}>
                <div>
                  <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[1].url : "./"} alt="" /></Link>
                  <span>{multimedia ? multimedia[1].copyright : "."}</span>
                </div>
                <div>
                  <h1><Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title ? title : "Has no title"}</Link></h1>
                  <p>{abstract ? abstract : "Has no description"}</p>
                  <span>
                    {moment(published_date).format("hh:mm")}h -{" "}
                    {byline ? byline : "Has no copyright"}
                  </span>
                </div>
              </div>
            ),
          )}

          <div className={style.secundaria}>
            {noticiaSecundaria.map(
              ({ title, abstract, byline, multimedia, published_date }, i) => (
                <div key={i}>
                  <div>
                    <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[1].url : "./"} alt="" /></Link>
                    <span>{multimedia ? multimedia[1].copyright : "."}</span>
                  </div>
                  <div>
                    <h1><Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title ? title : "Has no title"}</Link></h1>
                    <p>{abstract ? abstract : "Has no description"}</p>
                    <span>
                      {moment(published_date).format("hh:mm")}h -{" "}
                      {byline ? byline : "Has no copyright"}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className={style.aside}>
            {noticiaAside.map(
              ({ title, abstract, byline, multimedia, published_date }, i) => (
                <div key={i}>
                  <div>
                    <h1><Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title ? title : "Has no title"}</Link></h1>

                    <p>
                      <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}> <img src={multimedia ? multimedia[1].url : "./"} alt="" /></Link>
                      {abstract ? abstract : "Has no description"}
                    </p>
                    <span>
                      {moment(published_date).format("hh:mm")}h -{" "}
                      {byline ? byline : "Has no copyright"}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>
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
export default LayoutCol3;
