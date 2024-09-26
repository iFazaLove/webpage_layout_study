import styles from "@styles/header.module.css"
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/images/headerlogos/logo.svg" alt="Tour Kitchen Logo" />
    </div>
  );
}
