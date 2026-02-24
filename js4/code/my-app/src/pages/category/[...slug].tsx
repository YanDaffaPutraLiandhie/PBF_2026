import { useRouter } from "next/router";

const HalamanKategori = () => {
    const {query} = useRouter();
    const slugArray = Array.isArray(query.slug) ? query.slug : [];
    return (
        <div>
            <h1>category Slug</h1>
            {slugArray.length > 0 ? (
                <ul>
                    {slugArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Tidak ada parameter</p>
            )}
        </div>
    );
}

export default HalamanKategori;