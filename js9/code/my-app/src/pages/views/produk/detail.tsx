import {useRouter} from "next/router";

const DetailProdukView = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md">
            <h1 className="text-xl font-bold mb-2">Halaman Produk</h1>
            <p className="text-gray-600">Produk ID: {id}</p>
            </div>
        </div>
    );
}
export default DetailProdukView;
    