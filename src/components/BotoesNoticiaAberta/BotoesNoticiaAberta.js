import { BiBookmark, BiComment, BiGift, BiShare } from "react-icons/bi";
import style from "./BotoesNoticiaAberta.module.css";

function BotoesNoticiaAberta() {
  return (
    <>
      <button className={style.btn1}>
        <BiGift /> Give this article
      </button>
      <button className={style.btn2}>
        <BiShare />
      </button>
      <button className={style.btn2}>
        <BiBookmark />
      </button>
      <button className={style.btn2}>
        <BiComment />
      </button>
    </>
  );
}
export default BotoesNoticiaAberta;
