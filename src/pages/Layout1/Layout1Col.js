import axios from "axios";
import { useEffect, useState } from "react";
import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia"
import PagesHeader from "../../components/PagesHeader/PagesHeader"
import style from "./Layout1Col.module.css"

function Layout1Col({ titulo, opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9, opcao10 }) {

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
        return index === 5;
    })

    const noticiaQtd3 = noticias.filter((noticia, index) => {
        return index >= 13 && index <= 15;
    })
    return (

        <div className="container">
            <div>
                <PagesHeader titulo={titulo} 
                opcao1={opcao1} 
                opcao2={opcao2}
                opcao3={opcao3} 
                opcao4={opcao4} 
                opcao5={opcao5} 
                opcao6={opcao6}
                opcao7={opcao7} 
                opcao8={opcao8} 
                opcao9={opcao9} 
                opcao10={opcao10}
                />
                <section className={style.displayflex}>
                    {noticiaFiltrada.map(({ title, abstract, byline, multimedia }, i) =>
                        <div className={style.noticiaPrincipal} key={i}>
                            <div>
                                <h1>{title ? title : "Has no title"}</h1>
                                <p>{abstract ? abstract : "Has no description"}</p>
                                <p>{byline ? byline : "Has no copyright"}</p>
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
                                    <h2>{title ? title : "Has no title"}</h2>
                                    <p>{abstract ? abstract : "Has no description"}</p>
                                    <p>{byline ? byline : "Has no copyright"}</p>
                                </div>                            
                        </div>
                    )}
                </section>
                <GaleriaNoticia/>
            </div>
        </div>
    )
}
export default Layout1Col