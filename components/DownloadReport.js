import Link from "next/link";

function DownloadReport({ URL }) {
  return (
    <p>
      <Link passHref href={URL}>
        <button>下载报告</button>
      </Link>
    </p>
  );
}

export default DownloadReport;
