
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <h2>Đang tải...</h2>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} />
      <p>Giá: {product.price.toLocaleString()} đ</p>
      <button className="btn">Thêm vào giỏ</button>
    </div>
  );
}
