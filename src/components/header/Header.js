import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <nav className="navigation">
        <ul>
          <li className="header__option">
            <Link className="Lineone" to='/'>Trang chủ</Link>
          </li>
          <li className="header__option">
            <Link className="Lineone" to="/introduction">Giới thiệu</Link>
          </li>
          <li className="header__option">
            <Link className="Lineone" to='/production'>Sản phẩm</Link>
          </li>
          <li className="header__option">
            <Link className="Lineone" to='/news'>Tin tức sức khỏe</Link>
          </li>
          <li className="header__option">
            <Link className="Lineone" to='/contact'>Liên hệ</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
