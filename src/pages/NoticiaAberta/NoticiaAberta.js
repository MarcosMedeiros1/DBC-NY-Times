import axios from "axios";
import { useEffect, useState } from "react";
import BotoesHeader from "../../components/BotoesHeader/BotoesHeader";
import BotoesNoticiaAberta from "../../components/BotoesNoticiaAberta/BotoesNoticiaAberta";
import style from "./NoticiaAberta.module.css";

function NoticiaAberta() {
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
    return index === 1;
  });
  return (
    <div>
      <BotoesHeader />
      <section className="container">
        {noticiaFiltrada.map(({ title, abstract, multimedia }, i) => (
          <div className={style.noticiaRecebida} key={i}>
            <div>
              <h1>{title ? title : "Has no title"}</h1>
              <p>{abstract ? abstract : "Has no description"}</p>
              <BotoesNoticiaAberta />
            </div>
            <div>
              <img src={multimedia ? multimedia[1].url : "./"} alt="" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default NoticiaAberta;
