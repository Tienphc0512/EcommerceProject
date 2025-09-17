import products from "../../data/products";
import ProductCard from "../../components/productCard/ProductCard";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      {/* Giới thiệu tổng quan */}
      <section className="intro">
        <h1>Chào mừng đến với Website Bán Phần Mềm</h1>
        <p>
          Khám phá các phần mềm chất lượng, các gói khuyến mãi hấp dẫn và trải
          nghiệm dịch vụ hỗ trợ tuyệt vời.
        </p>
      </section>

      {/* Sản phẩm nổi bật */}
      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Chương trình khuyến mãi */}
      <section className="promotions">
        <h2>Chương trình khuyến mãi</h2>
        <div className="promo-cards">
          <div className="promo-card">
            <h3>Giảm giá 20% cho phần mềm thiết kế</h3>
            <p>Chỉ áp dụng đến cuối tháng này!</p>
          </div>
          <div className="promo-card">
            <h3>Mua 1 tặng 1 phần mềm văn phòng</h3>
            <p>Nhanh tay trước khi hết ưu đãi.</p>
          </div>
        </div>
      </section>

      {/*đánh giá từ khách hàng */}
      <section className="testimonials">
        <h2>Đánh giá</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Phần mềm dễ sử dụng, giao diện trực quan, rất hài lòng!"</p>
            <span>- Nguyễn Văn A</span>
          </div>
          <div className="testimonial-card">
            <p>"Dịch vụ hỗ trợ nhanh chóng và chuyên nghiệp."</p>
            <span>- Trần Thị B</span>
          </div>
        </div>
      </section>
    </div>
  );
}
