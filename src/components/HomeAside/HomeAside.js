import styles from "./HomeAside.module.css";
import { Link } from "react-router-dom";
const HomeAside = ({ noticias, setTitleClicada, setAbstractClicada, setMultimediaClicada }) => {
  const noticiasAside = noticias.filter((noticia, index) => {
    return index % 3;
  });

  noticiasAside.reverse();

  function setValores(title, abstract, multimedia){
    setTitleClicada(title);
    setAbstractClicada(abstract);
    setMultimediaClicada(multimedia);
  }

  return (
    <aside className={styles.homeAside}>
      {noticiasAside.map(({ title, abstract, multimedia }, i) => (
        <div key={i}>
          <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[1].url : "./"} alt="" /></Link>

          <div>
            <h1><Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title}</Link></h1>
            <p>{abstract}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};
export default HomeAside;
