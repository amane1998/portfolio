import styles from "../styles/components/_nav.module.scss";
import textStyles from "../styles/utility/_text-decoration.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.list}>
        {/* <ul>
          <li>
            <div
              className={`${textStyles.bgextend} ${textStyles.bgLRextendTrigger} ${textStyles.bgLRextendFirst}`}
            >
              <span
                className={`${textStyles.bgappearTrigger} ${textStyles.bgappear}`}
              >
                <a href="#about">ABOUT</a>
              </span>
            </div>
          </li>
          <li>
            <div
              className={`${textStyles.bgextend} ${textStyles.bgLRextendTrigger} ${textStyles.bgLRextendSecond}`}
            >
              <span
                className={`${textStyles.bgappearTrigger} ${textStyles.bgappear}`}
              >
                <a href="#product">PRODUCT</a>
              </span>
            </div>
          </li>
          <li>
            <div
              className={`${textStyles.bgextend} ${textStyles.bgLRextendTrigger} ${textStyles.bgLRextendThird}`}
            >
              <span
                className={`${textStyles.bgappearTrigger} ${textStyles.bgappear}`}
              >
                <a href="#contact">CONTACT</a>
              </span>
            </div>
          </li>
        </ul> */}
      </div>
      <div className={styles.title}>
        <h1 className={styles.h1}>amane-fujisawa.work</h1>
      </div>
    </nav>
  );
};

export default Nav;
