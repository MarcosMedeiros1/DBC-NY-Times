import { FaSearch } from "react-icons/fa";
import style from "./BtnLupa.module.css"
function BtnLupa() {
  return (
    <div className={style.btnLupa}>
      <button><FaSearch /></button>
    </div>
  )
}
export default BtnLupa