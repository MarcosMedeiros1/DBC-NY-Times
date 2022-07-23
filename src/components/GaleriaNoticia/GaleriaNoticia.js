import axios from "axios";
import { useEffect, useState } from "react";

import style from "./GaleriaNoticia.module.css"

function GaleriaNoticia() {

  const [noticias, setNoticias] = useState([]);
  async function setup() {
    try {
      const { data } = await axios.get('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0')
      setNoticias(data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup()
  }, [])

  const noticiaFiltradaGaleria1 = noticias.filter((noticia, index) => {
    return index >= 6 && index <= 10;
  })
  const noticiaFiltradaGaleria2 = noticias.filter((noticia, index) => {
    return index >= 13 && index <= 17;
  })

  return (
    <div className="container">

      <section className={style.displayflex}>

        {noticiaFiltradaGaleria1.map(({ title, multimedia }, i) =>
          <div className={style.galeriaNoticia} key={i}>
            <div>
              <img src={multimedia ? multimedia[2].url : "./"} alt="" />
              <a>{title ? title : "Has no title"}</a>
            </div>
          </div>
        )}
      </section>
      
      <section className={style.displayflex}>

        {noticiaFiltradaGaleria2.map(({ title, multimedia }, i) =>
          <div className={style.galeriaNoticia} key={i}>
            <div>
              <img src={multimedia ? multimedia[2].url : "./"} alt="" />
              <a>{title ? title : "Has no title"}</a>
            </div>
          </div>
        )}
      </section>

    </div>
  )
}
export default GaleriaNoticia;