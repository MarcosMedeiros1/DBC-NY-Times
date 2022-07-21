import { FaBars, FaSearch } from "react-icons/fa";
import styles from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <header className={styles.homeHeader}>
      <div>
        <div>
          <button>
            <FaBars />
          </button>
          <button>
            <FaSearch />
          </button>
        </div>

        <div>
          <button>
            <strong> U.S.</strong>
          </button>
          <button>INTERNATIONAL</button>
          <button>CANADA</button>
          <button>ESPAÑOL</button>
          <button>中文</button>
        </div>

        <div>
          <button>SUBSCRIBE FOR $0.25/WEEK</button>
          <button>LOG IN</button>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
