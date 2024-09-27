import styles from "@styles/countries.module.css";

export default function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles.topcards}>
        <div className={styles.card}>
          <img src="/images/countries/usa.jpg" alt="USA" />
          <div className={styles.front} />
          <p>США</p>
        </div>
        <div className={styles.card}>
          <img src="/images/countries/uae.jpg" alt="USE" />
          <div className={styles.front} />
          <p>ОАЭ</p>
        </div>
      </div>

      <div className={styles.bottomcards}>
        <div className={styles.card}>
          <img src="/images/countries/italy.jpg" alt="ITA" />
          <div className={styles.front} />
          <p>Италия</p>
        </div>
        <div className={styles.card}>
          <img src="/images/countries/england.jpg" alt="ENG" />
          <div className={styles.front} />
          <p>Англия</p>
        </div>
        <div className={styles.card}>
          <img src="/images/countries/egypt.jpg" alt="EGY" />
          <div className={styles.front} />
          <p>Египет</p>
        </div>
      </div>
    </div>
  );
}
