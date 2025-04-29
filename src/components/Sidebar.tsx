import React from "react";
import styles from "../styles/Sidebar.module.css";
import { Copy, Pencil, Plus, Settings, ShieldPlus } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className={`${styles.sidebar}`}>
      <div className={`${styles.logo}`}>
        Ques.<span className={styles.ai}>AI</span>
      </div>
      <div className="flex flex-col justify-between h-screen">
        <div>
          <ul className={`${styles.menu}`}>
            <li className={`${styles.addPodcast}`}>
              <Plus size={20} />
              <span>Add your Podcast(s)</span>
            </li>
            <li className={`${styles.addPodcast}`}>
              <Pencil size={20} />
              <span>Create & Repurpose</span>
            </li>
            <li className={`${styles.addPodcast}`}>
              <Copy size={20} />
              <span>Podcast Widget</span>
            </li>
            <li className={`${styles.addPodcast}`}>
              <ShieldPlus size={20} />
              <span>Upgrade</span>
            </li>
          </ul>
          <div className={styles.divider}></div>
        </div>
        <div className={`${styles.helpSection}`}>
          <div>
            <span>
              <Settings size={16} />
            </span>
            Help
          </div>
          <div className={`${styles.userInfo}`}>
            <span>Username</span>
            <span>username@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
