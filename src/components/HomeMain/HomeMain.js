import { Link } from "react-router-dom";
import styles from "./HomeMain.module.css";

const HomeMain = ({
  noticias,
  setTitleClicada,
  setAbstractClicada,
  setMultimediaClicada,
  setKickerClicada,
}) => {
  const noticiasFilter = noticias.filter((noticia, index) => {
    return index % 2;
  });

  function setValores(title, abstract, multimedia, kicker) {
    setTitleClicada(title);
    setAbstractClicada(abstract);
    setMultimediaClicada(multimedia);
    setKickerClicada(kicker);
  }

  return (
    <main>
      {noticiasFilter.map(({ title, abstract, multimedia, kicker }, i) => (
        <div key={i}>
          {multimedia ? (
            <>
              <div>
                <h1>
                  <Link
                    to="/noticia"
                    onClick={() =>
                      setValores(title, abstract, multimedia[1].url, kicker)
                    }
                  >
                    {title}
                  </Link>
                </h1>
                {abstract ? <p>{abstract}</p> : ""}
              </div>
              <div>
                <Link
                  to="/noticia"
                  onClick={() =>
                    setValores(title, abstract, multimedia[1].url, kicker)
                  }
                >
                  <img src={multimedia ? multimedia[1].url : "./"} alt="" />
                </Link>
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
