import styles from "../styles/Home.module.css";
import Link from "next/link";
import ClickForMore from "./ClickForMore";

function PostPreview({ title, description, date, href }) {
  return (
    <Link href={href} passHref>
      <section className={styles.postPreview}>
        <h2>{title}</h2>
        <p>{description}</p>
        <small>发布于 {date}</small>
        {" | "}
        <ClickForMore />
      </section>
    </Link>
  );
}

export default PostPreview;
