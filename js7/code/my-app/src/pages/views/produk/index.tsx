import { useRouter } from "next/navigation";
import { useEffect } from "react";
import HeroSection from "./hero_section";
import MainSection from "./main_section";

const Produk = () => {
    const router = useRouter();
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");
        if (!isLogin) {
            router.push("/auth/login");
        }
    }, [router]);
    return (
        <div className="min-h-screen bg-gray-100">
            <HeroSection />
            <MainSection />
        </div>
    );
}
export default Produk;