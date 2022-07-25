import HomeAside from "../../components/HomeAside/HomeAside";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMain from "../../components/HomeMain/HomeMain";
import Live from "../../components/live/Live";
import styles from "./Home.module.css";

const Home = ({
  noticias,
  setTitleClicada,
  setAbstractClicada,
  setMultimediaClicada,
  setKickerClicada,
}) => {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <Live />
      <div className={styles.homeMain}>
        <HomeMain
          noticias={noticias}
          setTitleClicada={setTitleClicada}
          setAbstractClicada={setAbstractClicada}
          setMultimediaClicada={setMultimediaClicada}
          setKickerClicada={setKickerClicada}
        />

        <HomeAside
          noticias={noticias}
          setTitleClicada={setTitleClicada}
          setAbstractClicada={setAbstractClicada}
          setMultimediaClicada={setMultimediaClicada}
          setKickerClicada={setKickerClicada}
        />
      </div>
    </div>
  );
};

export default Home;
