// import { useEffect, useState } from "react";

// type ProducType = {
//   id: string;
//   name: string;
//   price: number;
//   size: string;
//   category: string;
//   image : string;
// };

// const Kategori = () => {
//   const [products, setProducts] = useState<ProducType[]>([]);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch("/api/produk");
//       const responsedata = await response.json();
//       setProducts(responsedata.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Daftar Produk</h1>

//       <button
//         onClick={fetchData}
//         style={{
//           marginBottom: "20px",
//           padding: "10px 20px",
//           backgroundColor: "#0070f3",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         {loading ? "Loading..." : "Refresh"}
//       </button>

//       {products.map((product) => (
//         <div key={product.id}>
//           <img src={product.image} alt={product.name} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
//           <h2>{product.name}</h2>
//           <p>Harga: {product.price}</p>
//           <p>Ukuran: {product.size}</p>
//           <p>Kategori: {product.category}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
import TampilanProduk from "../views/produk";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Kategori = () => {
  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  if (error) {
    return <div>Error mengambil data</div>;
  }

  return (
    <div>
      <TampilanProduk products={data?.data || []} />
    </div>
  );
};

export default Kategori;