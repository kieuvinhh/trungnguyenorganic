import "./Header.css";
function Header() {
  return (
    <div className="header">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="home">Trang chủ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="introduction">Giới thiệu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="production">Sản phẩm</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news">Tin tức</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact">Liên hệ</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
