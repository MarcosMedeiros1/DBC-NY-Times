import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia"
import PagesHeader from "../../components/PagesHeader/PagesHeader"
import style from "./Layout1Col.module.css"

function Layout1Col({ titulo }) {

    const [noticias, setNoticias] = useState([]);
    async function setup() {
        try {
            const { data } = await axios.get('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=VatkRjA6ApoASKQO1Vt3NPQcGH9o2gZ0')
            setNoticias(data.results)
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setup()
    }, [])

    const noticiaFiltrada = noticias.filter((noticia, index) => {
        return index === 1;
    })

    const noticiaQtd3 = noticias.filter((noticia, index) => {
        return index >= 13 && index <= 15;
    })

    console.log(noticiaQtd3)
    return (

        <div className="container">
            <div>
                <PagesHeader titulo={titulo} />
                <section className={style.displayflex}>
                    {noticiaFiltrada.map(({ title, abstract, byline, multimedia }, i) =>
                        <div className={style.noticiaPrincipal} key={i}>
                            <div>
                                <h1>{title}</h1>
                                <p>{abstract}</p>
                                <p>{byline}</p>
                            </div>
                            <div>
                                <img src={multimedia ? multimedia[1].url : "./"} alt="" />                              
                            </div>
                        </div>
                    )}
                </section>

                <section className={style.displayflex}>
                    {noticiaQtd3.map(({ title, abstract, byline, multimedia }, i) =>
                    
                        <div className={style.cardNoticia} key={i}>                            
                                <img src={multimedia ? multimedia[2].url : "./"} alt="" />
                                <div>
                                    <h2>{title}</h2>
                                    <p>{abstract}</p>
                                    <p>{byline}</p>
                                </div>                            
                        </div>
                    )}
                </section>
                <GaleriaNoticia />
            </div>
        </div>
    )
}
export default Layout1Col