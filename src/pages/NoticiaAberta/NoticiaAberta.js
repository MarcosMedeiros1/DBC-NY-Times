import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BotoesHeader from "../../components/BotoesHeader/BotoesHeader";
import BotoesNoticiaAberta from "../../components/BotoesNoticiaAberta/BotoesNoticiaAberta";
import style from "./NoticiaAberta.module.css";

function NoticiaAberta({
  titleClicada,
  abstractClicada,
  multimediaClicada,
  kickerClicada,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(titleClicada);
    if (titleClicada.length <= 0) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <BotoesHeader />
      <section className="container">
        <div className={style.noticiaRecebida}>
          <div>
            <h1>{titleClicada}</h1>
            <small>{kickerClicada}</small>
            <p>{abstractClicada}</p>
            <BotoesNoticiaAberta />
          </div>
          <div>
            <img src={multimediaClicada} alt="" />
            <p>{abstractClicada}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NoticiaAberta;
