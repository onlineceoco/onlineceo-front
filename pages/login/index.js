import Link from 'next/link'
import styles from '../../styles/login.module.css'
const Login = () => {
  return (
    <div className={styles["login-wrapper"]}>
      <video autoPlay loop muted src={'./videos/eye.mp4'} type="video/mp4"></video>
      <div className={styles["center"]}>
        <Link href="/" passHref><img src='/images/1.png' alt="idealmakoo"/></Link>
        <h1>ورود / ثبت نام</h1>
        <form className={styles["form"]} method="post">
          <div className={styles["txt_field"]}>
            <input type="text"  required/>
            <span></span>
            <label>شماره موبایل خود را وارد کنید</label>
          </div>
          
            <input type="submit" value="ثبت و عبور"/>
            <div className={styles["signup_link"]}>
            <h4>با ورود و ثبت نام در  پلتفرم , قوانین و حریم خصوصی آن را می‌پذیرید </h4>
            </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login
