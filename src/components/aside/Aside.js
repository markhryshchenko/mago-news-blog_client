import { Link } from "react-router-dom";
import styles from "./aside.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useContext } from "react";
import { LabelsContext, PostsContext } from "../../context/context";
import LabelLinks from "./LabelLinks";
import SxCard from "../sxCard/SxCard";

function Aside() {
  const {labels} = useContext(LabelsContext);
  const posts = useContext(PostsContext);
  const newArrPosts = posts.slice(-3);
  return (
    <aside className={styles.aside}>
      <div className={styles.title}>Social Plugin</div>
      <div className={styles.social}>
        <div className={styles.social__fb}>
          <FacebookIcon />
        </div>
        <div className={styles.social__twt}>
          <TwitterIcon />
        </div>
        <div className={styles.social__lnk}>
          <LinkedInIcon />
        </div>
        <div className={styles.social__rddt}>
          <RedditIcon />
        </div>
        <div className={styles.social__whtspp}>
          <WhatsAppIcon />
        </div>
        <div className={styles.social__pntrs}>
          <PinterestIcon />
        </div>
        <div className={styles.social__inst}>
          <InstagramIcon />
        </div>
        <div className={styles.social__ytb}>
          <YouTubeIcon />
        </div>
      </div>
      <div className={styles.title}>Random Post</div>
      <div className={styles.widget__posts}>
        {newArrPosts.map((post) => (
          <SxCard post={post} key={post.id} />
        ))}
      </div>
      <div className={styles.title}>Subscribe Us</div>
      {/* <iframe width="300" height="178" src="https://www.youtube.com/embed/ndEZijoN_RU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
      <div className={styles.title}>Recent Post</div>
      <div className={styles.widget__posts}>
        {newArrPosts.map((post) => (
          <SxCard post={post} key={post.id} />
        ))}
      </div>
      <div className={styles.title}>Labels</div>
      <ul>
        {labels.map((label) => (
          <LabelLinks label={label} key={label.id} />
        ))}
      </ul>
    </aside>
  );
}

export default Aside;
