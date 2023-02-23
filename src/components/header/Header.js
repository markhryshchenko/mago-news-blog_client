import { Link } from "react-router-dom";
import * as React from "react";
import styles from "./header.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Header() {
  return (
    <header className={styles.header}>
     
      <img src="/i/Logo.png" alt="logo" />
      <div className={styles.menu}>
    
        <Link className={styles.menu__link} to="/">Home</Link>
        <Link className={styles.menu__link} to="/about">About Us</Link>
        <Link className={styles.menu__link} to="/admin">Admin Panel</Link>
      </div>
      <div className={styles.social}>
        <div className={styles.social__fb}>
          <FacebookIcon sx={{ mr: 0 }} />
        </div>
        <div className={styles.social__twt}>
  
          <TwitterIcon sx={{ mr: 0 }} />
        </div>
        <div className={styles.social__inst}>

          <InstagramIcon sx={{ mr: 0 }} />
        </div>
      </div>

      {/*  <p><Link className="l" to="/about">about</Link></p>
      <p><Link className="l" to="/admin">admin</Link></p> */}
    </header>
  );
}

export default Header;
