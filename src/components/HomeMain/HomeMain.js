import styles from "./HomeMain.module.css";

const HomeMain = ({ noticias }) => {
  console.log(noticias);
  const noticiasFilter = noticias.filter((noticia, index) => {
    return index % 2;
  });

  return (
    <main>
      {noticiasFilter.map(({ title, abstract, multimedia }, i) => (
        <div key={i}>
          {multimedia ? (
            <>
              <div>
                <h1>{title}</h1>
                {abstract ? <p>{abstract}</p> : ""}
              </div>
              <div>
                <img src={multimedia ? multimedia[1].url : "./"} alt="" />
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
