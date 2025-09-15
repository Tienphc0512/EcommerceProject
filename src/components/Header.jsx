import { NavLink } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">ShopDemo</h1>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Trang chủ
        </NavLink>
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Danh mục
        </NavLink>
        <NavLink 
          to="/cart" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Giỏ hàng
        </NavLink>
        <NavLink 
          to="/login" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Đăng nhập
        </NavLink>
        <NavLink 
        to="/register" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Đăng ký</NavLink>
      </nav>
    </header>
  );
}
