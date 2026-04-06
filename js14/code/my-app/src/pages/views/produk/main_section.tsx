import Link from "next/link";

const MainSection = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white border rounded-lg p-6 shadow">
        <h2 className="text-lg font-bold mb-2">Produk 1</h2>
        <Link href="/produk/1" className="bg-blue-500 text-white px-4 py-2 rounded">
          Detail
        </Link>
      </div>

      <div className="bg-white border rounded-lg p-6 shadow">
        <h2 className="text-lg font-bold mb-2">Produk 2</h2>
        <Link href="/produk/2" className="bg-blue-500 text-white px-4 py-2 rounded">
          Detail
        </Link>
      </div>

      <div className="bg-white border rounded-lg p-6 shadow">
        <h2 className="text-lg font-bold mb-2">Produk 3</h2>
        <Link href="/produk/3" className="bg-blue-500 text-white px-4 py-2 rounded">
          Detail
        </Link>
      </div>
    </div>
  );
};

export default MainSection;