import Link from "next/link";
import { useRouter } from "next/router";

const halamanlogin = () => {
        // const {push} = useRouter();
        const router = useRouter();

        const handleLogin = () => {
            // push("/produk");
            console.log("Login berhasil");
            localStorage.setItem("isLogin", "true");
            router.push("/produk");
        }

    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handleLogin}>Login ke produk</button> <br />
            {/* <button onClick={() => push("/produk")}>Login</button> <br />
            <button onClick={()=> handleLogin()}>Login</button> <br /> */}
            <Link href="/auth/register">
                Ke Halaman Register
            </Link>
        </div>
    );
};
export default halamanlogin;