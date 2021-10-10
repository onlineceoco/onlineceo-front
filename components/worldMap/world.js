import styles from "./world.module.css";
function World() {
  return (
    <div className={styles["main"]}>
      <div className={styles["container-center-horizontal"]}>
        <div className={` ${styles["desktop"]} ${styles["screen"]}`}>
          <div className={styles["overlap-group"]}>
            <img
              className={styles["world-1"]}
              src="/images/worldMap/world.png"
              alt=""
            />

            <img
              className={styles["circle1"]}
              src="/images/worldMap/circle1.svg"
              alt=""
            />

            <img
              className={styles["circle2"]}
              src="/images/worldMap/circle2.svg"
              alt=""
            />

            <img
              className={styles["circle3"]}
              src="/images/worldMap/circle3.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 id={styles["address"]}>
        آدرس: ایران - آذربایجان غربی - ارومیه - شیخ تپه-کوی۹ - مجموعه مدیر
        آنلاین
      </h1>
      <h1 id={styles["phone"]}>شماره تماس: ۴۴ ۳۳۳۸ ۴۲۳۲</h1>
    </div>
  );
}

export default World;
