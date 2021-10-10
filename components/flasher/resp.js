import styles from "./resp.module.css";
function Resp() {
  return (
    <div className={styles["container-center-horizontal"]}>
      <div className={`${styles["frame-1"]} ${styles["screen"]}`}>
        <div className={styles["overlap-group"]}>
          <img
            className={styles["double-pic"]}
            src="images/MLP/doublePic.png"
            alt=""
          />
          <img
            className={styles["laptop-circle"]}
            src="images/MLP/laptopCircle.svg"
            alt=""
          />
          <img
            className={`${styles["phone-pic"]}`}
            src="images/MLP/phonePic.png"
            alt=""
          />
          <img
            className={styles["phone-circle"]}
            src="images/MLP/phoneCircle.svg"
            alt=""
          />
          <img
            className={styles["phone-dot"]}
            src="images/MLP/phoneDot.svg"
            alt=""
          />
          <img
            className={styles["laptop-dot"]}
            src="images/MLP/laptopDot.svg"
            alt=""
          />
          <img
            className={styles["mac-circle"]}
            src="images/MLP/macCircle.svg"
            alt=""
          />
          <img
            className={styles["mac-dot"]}
            src="images/MLP/macDot.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Resp;
