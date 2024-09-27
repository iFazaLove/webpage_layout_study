import styles from "@styles/countries.module.css";
import Title from "../reviews/title/Title";
import Cards from "./Cards";
export default function Countries() {
  return (
    <div className={styles.countries}>
      <Title
        title="Обзоры отелей по странам"
        description="Удобный поиск по направлениям"
      />
      <Cards />
    </div>
  );
}
