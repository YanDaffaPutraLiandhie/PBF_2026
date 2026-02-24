import Link from "next/link";

const halamanregister = () => {
    return (
        <div>
            <h1>Halaman Register</h1>
            <Link href="/auth/login">
                Ke Halaman Login
            </Link>
        </div>
    );
};
export default halamanregister;