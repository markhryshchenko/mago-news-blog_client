import React from "react";
import { useContext, useEffect } from "react";
import { LabelsContext, PostsContext } from "../../context/context";
import randomInt from "../../services/randomInt";
import CardContent from "../content/CardContent";
import SxCard from "../sxCard/SxCard";


import styles from "./footer.module.css";
import LabelButtons from "./LabelButtons";

function Footer() {
  const {labels} = useContext(LabelsContext);
  const posts = useContext(PostsContext);
  const newArrPosts = posts.slice(-3)


  return (
    <footer className={styles.footer}>
      <div className={styles.main_box}>
        <div className="frst-clm">
          <div className={styles.title}>popular posts</div>{" "}
          <div className={styles.widget}>
          {newArrPosts.map((post) => {
              return <SxCard post={post} key={post.id} />;
            })}
          </div>
        </div>

        <div className="scnd-clm">
          <div className={styles.title}>labels</div>
          <div>
            <ul className={styles.labels}>
              {labels.map((label) => (
                <LabelButtons label={label} key={label.id} />
              ))}
            </ul>
          </div>
          <div className={styles.title}>search this blog</div>
          <div className={styles.search}>
            <input
              className={styles.input}
              type="search"
              placeholder="Search this blog"
            ></input>
            <button className={styles.btn} type="submit">
              Search
            </button>
          </div>
        </div>
        <div className="thrd-clm">
          <div className={styles.title}>recent in fashion</div>
          <div className={styles.widget}>
          {newArrPosts.map((post) => {
              return <SxCard post={post} key={post.id} />;
            })}
          </div>
        </div>
      </div>
      {/* <div className={styles.bottom_box}>
        <p>create with </p>
        <p>Home</p>
        <p>About</p>
        <p>Admin</p>
      </div> */}{" "}
      {/* !!!!!!!!!!!!!! */}
    </footer>
  );
}

export default Footer;
