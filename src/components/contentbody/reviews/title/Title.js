import styles from "@styles/content.module.css";

export default function Title() {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <h4>Популярные рекламники</h4>
        <p>Обзоры отелей с наивысшими рейтингами</p>
      </div>
      <button className={styles.button}>Cмотреть все</button>
    </div>
  );
}
