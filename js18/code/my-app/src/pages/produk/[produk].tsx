import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetxher";
import useSWR from "swr";
import { use } from "react";
import dynamic from "next/dynamic";
import { ProductType } from "@/types/Product.type";
import { retrieveProducts, retrieveDataByID } from "@/utils/db/servicefirebase";

const DetailProduk = dynamic(() => import("../views/DetailProduct"), {
    loading: () => <p>Loading detail produk...</p>,
});

const HalamanProduk = ({product}: {product: ProductType}) => {
    // digunakan client-side rendering
    // const router = useRouter();
    // const { produk } = router.query;

    // const { data, error, isLoading } = useSWR( produk ? `/api/produk/${produk}` : null, fetcher,);

    // if (!router.isReady) {
    //     return <p>Loading router...</p>;
    // }

    // if (isLoading) {
    //     return <p>Loading...</p>;
    // }

    // if (!data || !data.data) {
    //     return <p>Data tidak ditemukan</p>;
    // }

    return (
        <div>
            <DetailProduk products={product} />
        </div>
    );
};

export default HalamanProduk;

//fungsi getServerSideProps akan dipanggil setiap kali halaman ini diakses, dan akan mengambil data produk dari API sebelum merender halaman.
//digunakan server-side rendering/)
// export async function getServerSideProps({ params }: { params: { produk: string } }) {
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
//     const response = await res.json();
//     // console.log("Data produk yang diambil dari API:", response);
//     return {
//         props: {
//             product: response.data,
//         },
//     };
// }

/**digunakan static site generation */
export async function getStaticPaths() {
    const data = await retrieveProducts("products");
    
    const paths = data.map((produk: any) => ({
        params: { produk: produk.id },
    }));
    // console.log("paths yang dihasilkan:", paths);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { produk: string } }) {
    const data = await retrieveDataByID("products", params.produk);
    // console.log("Data produk yang diambil dari API:", data);
    return {
        props: {
            product: data,
        },
    };
}
