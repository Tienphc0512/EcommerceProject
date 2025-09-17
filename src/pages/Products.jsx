import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [category, setCategory] = useState("All");
  const location = useLocation();

  // Lấy category từ query ?category=...
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) {
      setCategory(cat);
    }
  }, [location]);

  const filteredProducts = products.filter(
    (p) => category === "All" || p.category === category
  );

  return (
    <div className="container">
      <h2>{category === "All" ? "Tất cả sản phẩm" : `Sản phẩm: ${category}`}</h2>

      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>Không tìm thấy sản phẩm</p>
        )}
      </div>
    </div>
  );
}
