import { BrowserRouter as Router } from "react-router-dom";
import { TopBar } from "src/components/lib";
import Routes from "./Routes";

import styles from "./app.module.css";

const App = () => {
  return (
    <div>
      <TopBar />
      <div className={styles.contentWrapper}>
        <Router>
          <Routes />
        </Router>
      </div>
    </div>
  );
};

export default App;
