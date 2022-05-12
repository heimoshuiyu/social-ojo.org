import Link from "next/link";

import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <small>
          ©2022-2023 Social OJO. All Rights Reserved.
        </small>
      </footer>
    </>
  );
}
