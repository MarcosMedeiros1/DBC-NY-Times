import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia";
import PagesHeader from "../../components/PagesHeader/PagesHeader"
import style from "./Layout2Col.module.css"

function Science({titulo}) {

    async function setup() {
        try {
            const { data: arts } = await axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0");
            const { data: science } = await axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0");
            const { data: home } = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0");
            const { data: us } = await axios.get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0");
            const { data: world } = await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0");

            console.log(arts.results)
            console.log(science.results)
            console.log(home.results)
            console.log(us.results)
            console.log(world.results)
            console.log(world)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setup()
    }, [])

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

                    <aside>
                        <div>ASIDE</div>
                        <div>ASIDE</div>
                        <div>ASIDE</div>
                    </aside>
                </section>
                <section >
                    <GaleriaNoticia />
                </section>
            </div>
        </div>
    )
}
export default Science