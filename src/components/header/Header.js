import Logo from "./Logo";
import Navigate from "./Navigation";
import Icons from "./Icons";
import styles from "@styles/header.module.css";
export default function Header() {
  return (
    <header className={styles.Header}>
      <Logo />
      <Navigate />
      <Icons />
    </header>
  );
}
