import styles from "./HomeMain.module.css";
import { Link } from "react-router-dom";

const HomeMain = ({ noticias, setTitleClicada, setAbstractClicada, setMultimediaClicada }) => {
  
  const noticiasFilter = noticias.filter((noticia, index) => {
    return index % 2;
  });

  function setValores(title, abstract, multimedia){
    setTitleClicada(title);
    setAbstractClicada(abstract);
    setMultimediaClicada(multimedia);
  }

  return (
    <main>
      {noticiasFilter.map(({ title, abstract, multimedia }, i) => (
        <div key={i}>
          {multimedia ? (
            <>
              <div>
                <h1><Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}>{title}</Link></h1>
                {abstract ? <p>{abstract}</p> : ""}
              </div>
              <div>
              <Link to='/noticia' onClick={() => setValores(title, abstract, multimedia[1].url)}><img src={multimedia ? multimedia[1].url : "./"} alt="" /></Link>
                <small>{multimedia ? multimedia[1].copyright : "."}</small>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </main>
  );
};

export default HomeMain;
