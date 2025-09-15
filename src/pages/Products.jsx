import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="container">
      <h2>Tất cả sản phẩm</h2>
      <div className="grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
