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
        <li className={classes.barca_logo_li}>
          <Image
            src="/images/barca.png"
            className={classes.barca_logo}
            width={200}
            height={100}
            alt="logo"
          />
        </li>
        <li>
          <Link href="/" onClick={page_view_push}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/squad" onClick={page_view_push}>
            Squad
          </Link>
        </li>
        <li>
          <Link href="/games" onClick={page_view_push}>
            Games
          </Link>
        </li>
      </ul>
    </div>
  );
}
