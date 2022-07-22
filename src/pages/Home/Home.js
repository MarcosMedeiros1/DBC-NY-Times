import moment from "moment";
import HomeAside from "../../components/HomeAside/HomeAside";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMain from "../../components/HomeMain/HomeMain";
import styles from "./Home.module.css";

const Home = ({ noticias }) => {
  return (
    <div className={styles.home}>
      <HomeHeader />
      <section>
        <div>
          <span>LIVE</span> Russia-Ukraine War{" "}
          <span>{moment().minutes() + Math.round(Math.random() * 3)}m ago</span>
        </div>

        <div>
          Coronavirus Pandemic{" "}
          <span>{moment().hour() + Math.round(Math.random() * 3)}h ago</span>
        </div>
      </section>
      <div className={styles.homeMain}>
        <HomeMain noticias={noticias} />
        <HomeAside noticias={noticias} />
      </div>
    </div>
  );
};

export default Home;
