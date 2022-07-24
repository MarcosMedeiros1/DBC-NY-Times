import HomeAside from "../../components/HomeAside/HomeAside";
import HomeFooter from "../../components/Footer/Footer";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMain from "../../components/HomeMain/HomeMain";
import Live from "../../components/live/Live";
import styles from "./Home.module.css";

const Home = ({ noticias }) => {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <Live />
      <div className={styles.homeMain}>
        <HomeMain noticias={noticias} />
        <HomeAside noticias={noticias} />
      </div>
    </div>
  );
};

export default Home;
