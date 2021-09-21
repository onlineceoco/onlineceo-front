import styles from "./world.module.css";
function World() {
  return (
    <div className={styles["container-center-horizontal"]}>
      <div className={` ${styles["desktop"]} ${styles["screen"]}`}>
        <div className={styles["overlap-group"]}>
          <img className={styles["world-1"]} src="/images/worldMap/world.png" />

          <img className={styles["circle1"]} src="/images/worldMap/circle1.svg" />

          <img className={styles["circle2"]} src="/images/worldMap/circle2.svg" />

          <img className={styles["circle3"]} src="/images/worldMap/circle3.svg" />
        </div>
      </div>
    </div>
  );
}

export default World;
