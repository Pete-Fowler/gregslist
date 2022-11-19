import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const copyright = `${year} © gregslist`;

  return (
    <div className={styles.footer}>
      {copyright}
      <Link>help</Link>
      <Link>safety</Link>
      <Link>privacy</Link>
      <Link>feedback</Link>
      <Link>terms</Link>
      <Link>about</Link>
      <Link>craigslist</Link>
      <Link>app</Link>
      <Link>cl is hiring</Link>
    </div>
  );
}
