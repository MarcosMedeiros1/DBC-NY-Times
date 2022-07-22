import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader"
import style from "./Layout3Col.module.css"
function Tecnologia() {
  return (
    <div>
      <PagesHeader titulo='Tech' />
      <div className="container">

        <section className={style.sciensePrincipal}>

          <div>
            <p>IMG</p>
            <div>
              <h1>TITULO DA NOTICIA</h1>
              <p>DESCRICAO NOTICIA</p>
              <p>COPYRIGHT</p>
            </div>
          </div>

          <div>
            <p>IMG</p>
          <div>
              <h1>TITULO DA NOTICIA</h1>
              <p>DESCRICAO NOTICIA</p>
              <p>COPYRIGHT</p>
            </div>
          </div>

          <aside>
            <div>ASIDE</div>
            <div>ASIDE</div>            
          </aside>
          
        </section>
      <section>
        <GaleriaNoticia />
      </section>
        
      </div>


    </div>
  )
}
export default Tecnologia;