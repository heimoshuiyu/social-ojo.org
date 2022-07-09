import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import ClickForMore from "./ClickForMore";

function PostPreview({ title, description, date, href, bg }) {
  return (
    <Link href={href} passHref>
      <section className={styles.postPreviewWrap}>
        <div className={styles.postPreview}>
          <h2>{title}</h2>
          <p>{description}</p>
          <small>发布于 {date}</small>
          {" | "}
          <ClickForMore />
        </div>
        <div
          style={{
            width: "39%",
            maxWidth: "20rem",
          }}
        >
          {bg && <Image src={bg} />}
        </div>
      </section>
    </Link>
  );
}

export default PostPreview;
