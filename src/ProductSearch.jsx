import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function ProductSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  function handleSearch() {
    if (search) {
      navigate({
        pathname: "/data/product/search",
        search: `?search=${search}`,
      });
    }
  }

  return (
    <>
      <h1>Seacrh Page</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Searching</button>

      <p>
        kamu mencari: {searchParams.get("search")}
      </p>
    </>
  );
}
