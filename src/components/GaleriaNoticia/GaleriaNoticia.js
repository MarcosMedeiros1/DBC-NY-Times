import style from "./GaleriaNoticia.module.css";
import {Link} from "react-router-dom"

function GaleriaNoticia({ noticias, setTitleClicada, setAbstractClicada, setMultimediaClicada }) {
  const noticiaFiltradaGaleria1 = noticias.filter((noticia, index) => {
    return index >= 6 && index <= 10;
  });
  const noticiaFiltradaGaleria2 = noticias.filter((noticia, index) => {
    return index >= 13 && index <= 17;
  });

  function setValores(title, abstract, multimedia){
    setTitleClicada(title);
    setAbstractClicada(abstract);
    setMultimediaClicada(multimedia);
  }


  return (
    <div className="container">
      <section className={style.displayGrid}>
        {noticiaFiltradaGaleria1.map(({ title, abstract, multimedia }, i) => (
          <div className={style.galeriaNoticia} key={i}>
            <div>
            <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[2].url : "./"} alt="" /></Link>
              <span> <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title ? title : "Has no title"}</Link></span>
            </div>
          </div>
        ))}
      </section>

      <section className={style.displayGrid}>
        {noticiaFiltradaGaleria2.map(({ title, multimedia, abstract }, i) => (
          <div className={style.galeriaNoticia} key={i}>
            <div>
            <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[2].url : "./"} alt="" /></Link>
              <span> <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title ? title : "Has no title"}</Link></span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default GaleriaNoticia;
