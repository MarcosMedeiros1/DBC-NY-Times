import BotoesHeader from "../BotoesHeader/BotoesHeader";
import BarraNav from "./BarraNav";

import styles from './PagesHeader.module.css';
import '../../App.css';

function PagesHeader({titulo}) {
    return (
        <div className="container">
            <BotoesHeader titulo={titulo} />
            <div className={styles.pagesHeader}>
                <h1>{titulo}</h1>
                <div>
                <BarraNav />
                </div>
            </div>
        </div>
    )
}
export default PagesHeader