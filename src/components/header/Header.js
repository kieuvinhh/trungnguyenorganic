import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <nav className="navigation">
        <div className="header__option">
          <Link className="Lineone" to='/'>Trang chủ</Link>
        </div>
        <div className="header__option">
          <Link className="Lineone" to="/introduction">Giới thiệu</Link>
        </div>
        <div className="header__option">
          <Link className="Lineone" to='/production'>Sản phẩm</Link>
        </div>
        <div className="header__option">
          <Link className="Lineone" to='/news'>Tin tức sức khỏe</Link>
        </div>
        <div className="header__option">
          <Link className="Lineone" to='/contact'>Liên hệ</Link>
        </div>
      </nav>
    </div>
  );
}
export default Header;
