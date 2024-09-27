import styles from "@styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img
        className={styles.background}
        src="/images/footer-image.jpeg"
        alt="Footer"
      />
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img src="/images/headerlogos/logo.svg" alt="Tour Kitchen Logo" />
          </div>
          <div className={styles.menu}>
            <ul>
              <li>Главная</li>
              <li>Онлайн-маркет</li>
              <li>Объекты</li>
              <li>О нас</li>
              <li>О сотрудничестве</li>
            </ul>
            <ul>
              <li>Пользовательское соглашение</li>
              <li>Политика возврата</li>
              <li>Политика конфиденциальности</li>
              <li>Сообщить об ошибке</li>
            </ul>
            <ul className={styles.contacts}>
              <li>
                <span>📧 rust710@mail.ru</span>
              </li>
              <li>
                <span>✈️ @tour_kitchen</span>
              </li>
              <li>
                <span>🎥 @tourkitchen-6094</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>ООО «Прайм», ИНН 4205372293</span>
          <div className={styles.border} />
          <span>650002, г. Кемерово, ул. Серебряный бор, 25-6</span>
        </div>
      </div>
    </div>
  );
}
