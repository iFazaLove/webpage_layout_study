import styles from "@styles/header.module.css";
export default function Icons() {
  return (
    <div className={styles.icons}>
      <img
        src="/images/headerlogos/notification-bell-svgrepo-com.svg"
        alt="Notifications"
      />
      <img
        src="/images/headerlogos/shopping-cart-outline-svgrepo-com.svg"
        alt="Cart"
        className={styles.flipped}
      />
      <img
        src="/images/headerlogos/profile-pic.png"
        alt="Profile"
        className={styles.profilePic}
      />
    </div>
  );
}
