import react from "react";
import "./Header.css";
function Header(){
    return(
        <div className='header'>
            <div className="navigation">
                <div className='header__option'>
                    <span className="Lineone">Trang chủ</span>
                </div>
                <div className='header__option'>
                    <span className="Lineone">Giới thiệu</span>
                </div>
                <div className='header__option'>
                    <span className="Lineone">Sản phẩm</span>
                </div>
                <div className='header__option'>
                    <span className="Lineone">Tin tức sức khỏe</span>
                </div>
                <div className='header__option'>
                    <span className="Lineone">Liên hệ</span>
                </div>
            </div>
        </div>
    );
}
export default Header;