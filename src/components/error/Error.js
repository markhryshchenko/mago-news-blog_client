import Footer from "../footer/Footer";
import Header from "../header/Header";

import styles from "./error.module.css";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div className={styles.title}>404</div>
        <div className={styles.subtitle}>There's nothing here!</div>
        <div className={styles.content}>Sorry, the page you were looking for in this blog does not exist.</div>

        <Link className={styles.link} to="/"><HomeIcon /> Home</Link>
       
      </main>
      <Footer />
    </div>
  );
}

export default Error;
