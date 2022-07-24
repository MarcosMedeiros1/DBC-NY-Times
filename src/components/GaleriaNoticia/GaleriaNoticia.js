import style from "./GaleriaNoticia.module.css";

function GaleriaNoticia({ noticias }) {
  const noticiaFiltradaGaleria1 = noticias.filter((noticia, index) => {
    return index >= 6 && index <= 10;
  });
  const noticiaFiltradaGaleria2 = noticias.filter((noticia, index) => {
    return index >= 13 && index <= 17;
  });

  return (
    <div className="container">
      <section className={style.displayGrid}>
        {noticiaFiltradaGaleria1.map(({ title, multimedia }, i) => (
          <div className={style.galeriaNoticia} key={i}>
            <div>
              <img src={multimedia ? multimedia[2].url : "./"} alt="" />
              <span>{title ? title : "Has no title"}</span>
            </div>
          </div>
        ))}
      </section>

      <section className={style.displayGrid}>
        {noticiaFiltradaGaleria2.map(({ title, multimedia }, i) => (
          <div className={style.galeriaNoticia} key={i}>
            <div>
              <img src={multimedia ? multimedia[2].url : "./"} alt="" />
              <span>{title ? title : "Has no title"}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export default GaleriaNoticia;
