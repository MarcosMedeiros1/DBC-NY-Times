import BotoesHeader from "../BotoesHeader/BotoesHeader";
import BarraNav from "./BarraNav";

import styles from './PagesHeader.module.css';
import '../../App.css';

function PagesHeader({titulo, opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9, opcao10}) {
    return (
        <div className="container">
            <BotoesHeader titulo={titulo} />
            <div className={styles.pagesHeader}>
                <h1>{titulo}</h1>
                <div>
                <BarraNav 
                opcao1={opcao1} 
                opcao2={opcao2}
                opcao3={opcao3} 
                opcao4={opcao4} 
                opcao5={opcao5} 
                opcao6={opcao6}
                opcao7={opcao7} 
                opcao8={opcao8} 
                opcao9={opcao9} 
                opcao10={opcao10}/>
                </div>
            </div>
        </div>
    )
}
export default PagesHeader