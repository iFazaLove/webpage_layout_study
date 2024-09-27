import styles from "@styles/coop.module.css";

const inviteMess1 = "TourKitchen приглашает к выгодному сотрудничеству!";
const inviteMess2 =
  "На нашем сайте Вы можете стать автором и публиковать Ваши собственные обзоры, делиться контентом с другими пользователями.";
const inviteMess3 = "Все подробности в разделе «Сотрудничество».";

export default function Coop() {
  return (
    <div className={styles.coop}>
      <div className={styles.title}>
        <h4>Сотрудничество</h4>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src="/images/main-page-question.svg" alt="Coop" />
        </div>
        <div className={styles.card}>
          <div className={styles.text}>
            <h2>Вы тоже создаете контент?</h2>
            <div className={styles.invite}>
              <p>{inviteMess1}</p>
              <p>{inviteMess2}</p>
              <p>{inviteMess3}</p>
            </div>
            <div className={styles.bottom}>
              <button className={styles.button}>Узнать подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
