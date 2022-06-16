import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/_index.module.scss";
import dynamic from "next/dynamic";

const Nav = dynamic(() => import("@/components/nav"), { ssr: false });

const Index = () => {
  return (
    <>
      <Head>
        <title>amane-fujisawa.work</title>
      </Head>
      <Nav />
      <main>
        <section className={styles.sectionKv}>
          <div className={styles.kv}>
            <video id="video" poster="/kv/kv1.jpg" muted autoPlay loop>
              <source src="/kv/kv.mp4" type="video/mp4" />
            </video>
            <div className={styles.scroller}>
              <span>Scroll</span>
            </div>
          </div>
        </section>

        <section>
          <h2 id="about">ABOUT</h2>
          <div className={styles.about}>
            <div className={styles.aboutProfile}>
              <div className={styles.aboutName}>Amane Fujisawa</div>
              <div className={styles.aboutRole}>Frontend engineer / UI designer</div>
            </div>
            <div>
              <span className={styles.aboutSkill}>
                HTML , CSS , JavaScript , TypeScript , React , Vue , Next.js
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 id="product">PRODUCT</h2>
          <div className={styles.product}>
            {/* <h3>portfolio</h3>
              <div>product thumbnail</div>
              <p>product discription</p> */}
            Preparation...
          </div>
        </section>

        <section>
          <h2 id="contact">CONTACT</h2>
          <div className={styles.contact}>
            <div>
              <span>mail: </span>
              <span>amanefujisawa.work@gmail.com</span>
            </div>
            <div>
              <span>twitter: </span>
              <span>@amane__work</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
