import "./Header.css";
import logo from "./logo.png";
import {Nav, NavLink, Bars, NavMenu, NavBtnLink, NavBtn} from "./NavBarElements.js"
function Header() {
  return (
    <>
    
      <Nav>
      
        <Bars activeStyle/>
            <NavLink to="/">
              <img className="logo" src={logo} alt="logo"></img>
            </NavLink>
        <NavMenu>
         
          <NavLink to="/introduction" activeStyle>
            Giới Thiệu
          </NavLink>
          <NavLink to="/production" activeStyle>
            Sản Phẩm
          </NavLink>
          <NavLink to="/news" activeStyle>
            Tin Tức
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Liên Hệ
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Đăng Kí
          </NavLink>
          {/*<NavBtnLink to="/signin">Đăng nhập</NavBtnLink>*/}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Đăng nhập</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
export default Header;
