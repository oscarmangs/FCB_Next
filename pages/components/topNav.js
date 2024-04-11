import classes from "./topNav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TopNav() {


    const page_view_push = () => {
      dataLayer.push({'event': 'page_view'})
    };

  return (
    <div className={classes.topNav}>
      <ul className={classes.topMenu}>
        <Link href="/" onClick={page_view_push}>
        <li className={classes.barca_logo_li}>
          <Image
            src="/images/barca.png"
            className={classes.barca_logo}
            width={200}
            height={100}
            alt="logo"
          />
        </li>
        </Link>
        <Link href="/" onClick={page_view_push}>
          <li>Home</li>
        </Link>
        <Link href="/squad" onClick={page_view_push}>
          <li>Squad</li>
        </Link>
        <Link href="/games" onClick={page_view_push}>
          <li>Games</li>
        </Link>
      </ul>
    </div>
  );
}
