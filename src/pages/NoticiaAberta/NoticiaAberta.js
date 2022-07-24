import BotoesHeader from "../../components/BotoesHeader/BotoesHeader";
import BotoesNoticiaAberta from "../../components/BotoesNoticiaAberta/BotoesNoticiaAberta";
import style from "./NoticiaAberta.module.css";

function NoticiaAberta({ noticia }) {
  return (
    <div>
      <BotoesHeader />
      <section className="container">
        {noticia.map(({ title, abstract, multimedia }, i) => (
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
