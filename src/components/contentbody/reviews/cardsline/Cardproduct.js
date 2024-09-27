import styles from "@styles/reviews.module.css";
export default function Cardproduct({ image, color }) {
  return (
    <div
      className={styles.cardproduct}
      style={{
        background: `linear-gradient(${color} 5% 20%, rgba(255, 255, 255, 1.0)) 5% 90%`,
      }}
    >
      <div className={styles.image}>
        <img src={image.src} alt={image.alt} />
        <div className={styles.iconheart}>
          <img src="/images/reviews/icon-heart.svg" alt="Like" />
        </div>
        <div className={styles.label} style={{
          background: image?.bgclabel
        }}>{image.label}</div>
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
