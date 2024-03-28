import classes from "../components/topNav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TopNav() {


    const handleLinkClick = () => {
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
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>Squad</li>
        <li>
          <Link href="/games" onClick={handleLinkClick}>
            Games
          </Link>
        </li>
      </ul>
    </div>
  );
}
