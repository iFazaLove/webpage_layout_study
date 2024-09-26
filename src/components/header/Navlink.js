import styles from "@styles/header.module.css";

export default function Navlink({ text }) {
  return (
    <div className={styles.navlink}>
      <a href="#">{text}</a>
    </div>
  );
}
