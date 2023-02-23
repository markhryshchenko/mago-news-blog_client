

import styles from "./footer.module.css";

function LabelButtons({label}) {
  
  return (
    <li>
    <a  className={styles.label} href="#">
     {label.name}
    </a>
  </li>
  );
}

export default LabelButtons;
