import GaleriaNoticia from "../../components/GaleriaNoticia/GaleriaNoticia"
import PagesHeader from "../../components/PagesHeader/PagesHeader"
import style from "./Layout1Col.module.css"

function Layout1Col({ titulo }) {
    return (
        <div className="container">
            <div>
                <PagesHeader titulo={titulo} />

                <section className={style.layout}>
                    <div>
                        <div>
                            <h1>TITULO</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, consequatur dignissimos ipsum illo minus rem.</p>
                            <span>Copyright</span>
                        </div>
                        <span>
                            IMG
                        </span>
                    </div>
                </section>
                <section className={style.layout3Column}>
                    <div>
                        <div>
                            <p>IMG</p>
                            <div>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
                                <p>Copyright</p>
                            </div>
                        </div>
                        <div>
                            <p>IMG</p>
                            <div>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
                                <p>Copyright</p>
                            </div>
                        </div>
                        <div>
                            <p>IMG</p>
                            <div>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, corrupti!</p>
                                <p>Copyright</p>
                            </div>
                        </div>
                    </div>
                </section>
                <GaleriaNoticia />

            </div>
        </div>
    )
}
export default Layout1Col