import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader"
import style from "./Layout3Col.module.css"

function LayoutCol3({titulo}) {
  return (
    <div>
      <PagesHeader titulo={titulo}/>
      <div className="container">

        <section className={style.layoutPrincipal}>

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
export default LayoutCol3;