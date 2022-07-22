import styles from "./HomeAside.module.css";

const HomeAside = ({ noticias }) => {
  const noticiasAside = noticias.filter((noticia, index) => {
    return index % 3;
  });

  noticiasAside.reverse();

  return (
    <aside className={styles.homeAside}>
      {noticiasAside.map(({ title, abstract, multimedia }, i) => (
        <div key={i}>
          <img src={multimedia ? multimedia[1].url : "./"} alt="" />
          <div>
            <h1>{title}</h1>
            <p>{abstract}</p>
          </div>
        </div>
      ))}
    </aside>
  );
};
export default HomeAside;
