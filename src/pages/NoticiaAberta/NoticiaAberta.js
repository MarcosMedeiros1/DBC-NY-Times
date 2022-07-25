import BotoesHeader from "../../components/BotoesHeader/BotoesHeader";
import BotoesNoticiaAberta from "../../components/BotoesNoticiaAberta/BotoesNoticiaAberta";
import style from "./NoticiaAberta.module.css";

function NoticiaAberta({ titleClicada, abstractClicada, multimediaClicada }) {
  return (
    <div>
      <BotoesHeader />
      <section className="container">

        <div className={style.noticiaRecebida}>
          <div>
            <h1>{titleClicada}</h1>
            <p>{abstractClicada}</p>
            <BotoesNoticiaAberta />
          </div>
          <div>
            <img src={multimediaClicada} alt="" />

          </div>
        </div>

      </section>
    </div>
  );
}
export default NoticiaAberta;
