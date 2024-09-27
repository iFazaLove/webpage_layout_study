import styles from "@styles/frame.module.css";

const textMess =
  "Поиск гида – всегда волнительный момент. В туризме предпочитают получать контакты проверенных экскурсоводов от коллег. Мы предлагаем новую возможность выйти на широкий турагентский рынок. Кроме описания услуг и экскурсий на нашем сайте, вы также можете разместить у нас видеознакомство с вами и краткие видеообзоры ваших экскурсий и достопримечательностей.";

export default function Frame() {
  return (
    <div className={styles.bottominfo}>
      <div className={styles.title}>
        <h4>Что такое онлайн-рекламники Tour Kitchen?</h4>
      </div>
      <div className={styles.frametext}>
        <div className={styles.text}>
          <p>{textMess}</p>
          <p>{textMess}</p>
        </div>
        <div className={styles.frame}>
            <img className={styles.logo} src="/images/headerlogos/logo-grey.svg" alt="Tour Kitchen Logo"/>
            <img className={styles.polygon} src="/images/headerlogos/icon-play-button.svg" alt="Play Button"/>
        </div>
      </div>
    </div>
  );
}
