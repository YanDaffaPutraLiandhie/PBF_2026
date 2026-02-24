import { useRouter } from "next/router";

const HalamanToko = () => {
    // const router = useRouter();
    // console.log(router);
    const {query} = useRouter();
    const {slug} = query;
    return (
        <div>
            <h1>Halaman Toko</h1>
            <p>
                Toko: {`${query.slug && query.slug[0]+"-" + query.slug[1]}`}
            </p>
            <p>
                Kategori: {`${slug?slug[0]:"semua kategori"}`}
            </p>
              
        </div>
    );  
};

export default HalamanToko;