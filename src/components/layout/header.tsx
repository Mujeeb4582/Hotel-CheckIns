import { Layout, Menu } from "antd";
import styles from "../../styles/header.module.scss";

const MyHeader = () => {
  return (
    <Layout.Header className={styles.header}>
      <div className={styles.logo}>AAA</div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>Feedback</li>
        <li className={styles.menuItem}>Support</li>
        <li className={styles.menuItem}>
          <img
            src="https://img.lovepik.com/element/40128/7461.png_1200.png"
            alt="avatar"
            className={styles.menuItemImg}
          />
        </li>
      </ul>
    </Layout.Header>
  );
};

export default MyHeader;
