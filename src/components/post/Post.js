import Footer from "../footer/Footer";
import Header from "../header/Header";
import PostDetails from "./PostDetails";
import Aside from "../aside/Aside";
import styles from "./post.module.css";

function Post() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <PostDetails />
        <Aside />
      </main>
      <Footer />
    </div>
  );
}

export default Post;
