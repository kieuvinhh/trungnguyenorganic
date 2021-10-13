import "./Header.css";
// eslint-disable-next-line
import react from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="navigation">
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
      </div>
    </div>
  );
}
export default Header;
