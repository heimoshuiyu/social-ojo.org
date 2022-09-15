import Link from "next/link";

function DownloadReport({ URL }) {
  return (
    <p>
      <Link passHref href={URL}>
        <button>Report (Eng)</button>
      </Link>
    </p>
  );
}

export default DownloadReport;
