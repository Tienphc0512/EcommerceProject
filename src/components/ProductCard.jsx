import { Link } from "react-router-dom";
import "../styles.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price.toLocaleString()} đ</p>
      <Link to={`/products/${product.id}`} className="btn">Xem chi tiết</Link>
    </div>
  );
}
