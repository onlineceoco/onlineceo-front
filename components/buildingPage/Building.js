import styles from "./Building.module.css";
import Link from "next/link";
function Building() {
  return (
    <div className={styles["main"]}>
      <div className={styles["container-center-horizontal"]}>
        <div className={`${styles["building800"]} ${styles["screen"]}`}>
          <div className={styles["overlap-group"]}>
            <img
              className={styles["nine"]}
              src="/images/building/nine.svg"
              alt=""
            />
            <img
              className={styles["eight"]}
              src="/images/building/eight.svg"
              alt=""
            />
            <img
              className={styles["seven"]}
              src="/images/building/seven.svg"
              alt=""
            />
            <img
              className={styles["six"]}
              src="/images/building/six.svg"
              alt=""
            />
            <img
              className={styles["five"]}
              src="/images/building/five.svg"
              alt=""
            />
            <img
              className={styles["four"]}
              src="/images/building/four.svg"
              alt=""
            />
            <img
              className={styles["three"]}
              src="/images/building/three.svg"
              alt=""
            />
            <img
              className={styles["two"]}
              src="/images/building/two.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1>under construction</h1>
      <Link href="/" passHref>
        <button>Go To Home</button>
      </Link>
    </div>
  );
}

export default Building;
