import { FaBars } from "react-icons/fa";
import style from "./BtnSanduiche.module.css"

function BtnSanduiche() {
  return (
    <div className={style.btnSand}>
      <button>
        <FaBars />
      </button>
    </div>
  )
}
export default BtnSanduiche