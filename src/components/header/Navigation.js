import styles from "@styles/header.module.css"
import Navlink from "./Navlink";

export default function Navigate() {
  return (
    <nav className={styles.navigate}>
      <Navlink text="Онлайн-маркет" />
      <Navlink text="Объекты" />
      <Navlink text="О нас" />
      <Navlink text="Сотрудничество" />
    </nav>
  );
}
