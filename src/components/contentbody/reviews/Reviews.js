import styles from "@styles/reviews.module.css";
import Title from "./title/Title";
import Cardslines from "./cardsline/Cardslines";

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <Title title="Популярные рекламники" description="Обзоры отелей с наивысшими рейтингами"/>
      <Cardslines />
    </div>
  );
}
