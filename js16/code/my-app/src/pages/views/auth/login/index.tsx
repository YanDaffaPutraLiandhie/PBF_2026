import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    //   const form = event.currentTarget;
    //   const formdata = new FormData(event.currentTarget);
    //   const email = formdata.get("email") as string;
    //   const fullName = formdata.get("Fullname") as string;
    //   const password = formdata.get("Password") as string;

    //   if (!email) {
    //     setError("Email wajib diisi");
    //     setIsLoading(false);
    //     return;
    //   }

    //   if (password.length < 6) {
    //     setError("Password minimal 6 karakter");
    //     setIsLoading(false);
    //     return;
    //   }

    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, fullname, password }),
    //   });
    //   // const result = await response.json();
    //   // console.log(result);
    //   if (response.status === 200) {
    //     form.reset();
    //     //event.currentTarget.reset();
    //     setIsLoading(false);
    //     push("/");
    //   } else {
    //     setIsLoading(false);
    //     setError(
    //       response.status === 400
    //         ? "Email atau password salah. Silakan coba lagi."
    //         : "An error occurred. Please try again later.",
    //     );
    //   }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      //console.log("signIn response:", res);
      if (res?.error) {
        setIsLoading(false);
        setError("wrong email or password. Please try again.");
      } else {
        setIsLoading(false);
        push(callbackUrl);
      }
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
    <div className={style.login}>
      {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman Login</h1>
      <div className={style.login__form}>
        <form onSubmit={handleSubmit}>
          <div className={style.login__form__item}>
            <label htmlFor="email" className={style.login__form__item__label}>
              {" "}
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={style.login__form__item__input}
            />
          </div>
          <div className={style.login__form__item}>
            <label
              htmlFor="password"
              className={style.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              className={style.login__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={style.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <br />
        <p className={style.login__form__item__text}>
          Belum punya akun?{" "}
          <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default TampilanLogin;