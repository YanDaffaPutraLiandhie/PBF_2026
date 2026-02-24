import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
    const router = useRouter();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");

        if (isLogin !== "true") {
            router.replace("/auth/login");
        } else {
            setIsChecked(true);
        }
    }, [router]);

    if (!isChecked) {
        return null;
    }

    return (
        <div>
            Produk User page
        </div>
    );
};

export default Produk;