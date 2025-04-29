import { Bell, Settings } from "lucide-react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.title}`}>
        Ques.<span className={styles.ai}>AI</span>
      </div>
      <div className={`${styles.icons}`}>
        <span className={`${styles.settingsIcon}`}>
          <Settings size={20} />
        </span>
        <span className={`${styles.notificationIcon}`}>
          <Bell size={20} />
        </span>
      </div>
    </header>
  );
};

export default Header;
