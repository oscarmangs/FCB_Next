import Head from "next/head";
import Image from "next/image";
import classes from "./index.module.css"
import Messi from "./components/messi";

export default function Home() {
  return (
    <>
      <Head>
        <title>FC Barcelona</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main >
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
            <li>Home</li>
            <li>Squad</li>
            <li>Games</li>
          </ul>
        </div>
        <Messi />
      </main>
    </>
  );
}
