import styles from "@styles/content.module.css";
import Title from "./title/Title";
import Cardslines from "./cardsline/Cardslines";

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <Title />
      <Cardslines />
    </div>
  );
}
