import style from "./BarraNav.module.css"

function BarraNav({opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9, opcao10}) {
    return (
        <div className={style.barraNav}>
            <nav>
                <ul>
                    <li>{opcao1 ? opcao1 : ""}</li>
                    <li>{opcao2 ? opcao2 : ""}</li>
                    <li>{opcao3 ? opcao3 : ""}</li>
                    <li>{opcao4 ? opcao4 : ""}</li>
                    <li>{opcao5 ? opcao5 : ""}</li>
                    <li>{opcao6 ? opcao6 : ""}</li>
                    <li>{opcao7 ? opcao7 : ""}</li>
                    <li>{opcao8 ? opcao8 : ""}</li>
                    <li>{opcao9 ? opcao9 : ""}</li>
                    <li>{opcao10 ? opcao10 : ""}</li>
                </ul>
            </nav>
        </div>
    )
}
export default BarraNav;