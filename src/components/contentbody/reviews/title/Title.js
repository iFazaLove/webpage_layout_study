import styles from "@styles/reviews.module.css";

export default function Title({title, description}) {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button className={styles.button}>Cмотреть все</button>
    </div>
  );
}
