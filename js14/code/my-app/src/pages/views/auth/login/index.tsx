'use client';

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./login.module.scss";

const TampilanLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLogin = () => {
    document.cookie = "token=12345; path=/";
    const redirect = searchParams.get("redirect") || "/produk";
    router.push(redirect);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>
          Silakan login untuk melanjutkan
        </p>

        <div className={styles.formGroup}>
          <input type="text" placeholder="Username" />
        </div>

        <div className={styles.formGroup}>
          <input type="password" placeholder="Password" />
        </div>

        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>

        <div className={styles.footer}>
          <span>Belum punya akun?</span>
          <Link href="/auth/register">Daftar</Link>
        </div>
      </div>
    </div>
  );
};

export default TampilanLogin;