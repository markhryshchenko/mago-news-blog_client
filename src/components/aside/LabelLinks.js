
import styles from "./aside.module.css";
function LabelLinks({label}) {
 
  
  return (
    <li className={styles.row}><a className={styles.labels} href="#">{label.name}<span className={styles.counter}>0</span></a></li>
  );
}

export default LabelLinks;
