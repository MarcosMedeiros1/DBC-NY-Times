import HomeAside from "../../components/HomeAside/HomeAside";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMain from "../../components/HomeMain/HomeMain";
import Live from "../../components/live/Live";
import styles from "./Home.module.css";

const Home = ({ noticias, setTitleClicada, setAbstractClicada, setMultimediaClicada }) => {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <Live />
      <div className={styles.homeMain}>
        
        <HomeMain noticias={noticias}
        setTitleClicada={setTitleClicada}
        setAbstractClicada={setAbstractClicada}
        setMultimediaClicada={setMultimediaClicada} />

        <HomeAside noticias={noticias}
        setTitleClicada={setTitleClicada}
        setAbstractClicada={setAbstractClicada}
        setMultimediaClicada={setMultimediaClicada} />
      </div>
    </div>
  );
};

export default Home;
