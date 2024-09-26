import styles from "@styles/content.module.css";
export default function Cardproduct({ image, color }) {
  return (
    <div
      className={styles.cardproduct}
      style={{
        background: `linear-gradient(to bottom, ${color} 10%, rgba(255, 255, 255, 0))`,
      }}
    >
      <div className={styles.image}>
        <img src={image.src} alt={image.alt} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.rates}>
          <div className={styles.rate}>
            <img src="/images/reviews/icon-star.svg" alt="Star" />
            <img src="/images/reviews/icon-star.svg" alt="Star" />
            <img src="/images/reviews/icon-star.svg" alt="Star" />
            <img src="/images/reviews/icon-star.svg" alt="Star" />
            <img src="/images/reviews/icon-star.svg" alt="Star" />
            <p>Отель</p>
          </div>
          <div className={styles.rating}>
            <div className={styles.number}>
              <img src="/images/reviews/icon-gold-star.svg" alt="Star" />
              <p>5.0</p>
            </div>
            <p>8 отзывов</p>
          </div>
        </div>
        <div className={styles.names}>
          <p>Видеообзор</p>
        </div>
        <div className={styles.icontext}>
          <img src="images/reviews/icon-pin-mark.svg" alt="Location" />
          <p>Анталья, Турция</p>
        </div>
      </div>
    </div>
  );
}
