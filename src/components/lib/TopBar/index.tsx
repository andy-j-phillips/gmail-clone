import styles from "./top-bar.module.css";
import gmailLogo from "src/img/gmail.png";
const TopBar: React.FC = () => {
  return (
    <header className={styles.topBar}>
      <div>
        <img src={gmailLogo} alt="Gmail Logo" className={styles.logo} />
      </div>
      <div></div>
    </header>
  );
};

export default TopBar;
