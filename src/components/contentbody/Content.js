import styles from "@styles/content.module.css";
import Reviews from "./reviews/Reviews";
import Countries from "./countries/Countries";
import Frame from "./frame/Frame";
import Coop from "./coop/Coop";


export default function Content() {
  return (
    <div className={styles.body}>
      <Reviews />
      <Countries />
      <Frame />
      <Coop />
    </div>
  );
}
