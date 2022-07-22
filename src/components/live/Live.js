import moment from "moment";
import styles from "./Live.module.css";

const Live = () => {
  return (
    <section className={styles.live}>
      <div>
        <span>LIVE</span> Russia-Ukraine War{" "}
        <span>{moment().minutes() + Math.round(Math.random() * 2)}m ago</span>
      </div>

      <div>
        Coronavirus Pandemic{" "}
        <span>{moment().hour() + Math.round(Math.random() * 2)}h ago</span>
      </div>
    </section>
  );
};
export default Live;
