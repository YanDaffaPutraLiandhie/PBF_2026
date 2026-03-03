import styles from './register.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const { push } = useRouter();

    const handleRegister = () => {  
        push("/auth/login");
    };
    return (
        <div className={styles.register}>
            <div className={styles.card}>
                <h1 className={styles.title}>Register</h1>

                <input type="text" placeholder="Username" className={styles.input} />
                <input type="password" placeholder="Password" className={styles.input} />
                <button onClick={() => handleRegister()} className={styles.button}> Register</button>
                <Link href="/auth/login" className={styles.link}>sudah mempunyai akun? Login</Link>
            </div>
        </div>
    );
};
export default Register;