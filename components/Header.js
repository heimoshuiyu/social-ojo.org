import styles from "../styles/Header.module.css";
import Link from "next/link";

// images
import headerBackground from "../public/typhoon.png";

export default function Header({ titleText, propBG }) {
  let bgsrc = headerBackground.src;
  if (propBG) {
    bgsrc = propBG.src;
  }
  return (
    <>
      <nav className={styles.toolbar}>
        <strong>
          <Link href="/">Social OjO</Link>
        </strong>
        <div className={styles.nav}>
          <span>
            <Link href="/">主页</Link>
          </span>
          <span>
            <Link href="/posts/init">关于</Link>
          </span>
        </div>
      </nav>
      <h1 className={styles.title}>{titleText || "Social OjO"}</h1>
      <header
        className={styles.header}
        style={{
          backgroundImage: `url('${bgsrc}')`,
        }}
      >
      </header>
    </>
  );
}
