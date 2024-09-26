import styles from "@styles/content.module.css";
import Reviews from "./reviews/Reviews";
export default function Content() {
  return (
    <div className={styles.body}>
      <Reviews />
    </div>
  );
}
