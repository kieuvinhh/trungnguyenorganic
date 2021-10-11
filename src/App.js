import "./App.css";
import Header from "./Header.js";
import Poster from "./Poster.js";
import Content from "./Content";
import Comunity from "./Comunity";
function App() {
  return (
    <div>
      <Header />
      <Poster />

      <hr className="divided" />
      <Content />

      <Comunity />

      <center className="aboutUs">
        <h1 id="aboutus">Về chúng tôi</h1>
      </center>

      <div className="Bottom">
        <div className="information">
          {" "}
          Thông tin
          <div>về chúng tôi</div>
        </div>

        <div className="policy">
          {" "}
          Chính sách bán hàng
          <div>Chính sách vận chuyển</div>
          <div>Chính sách đổi trả hàng</div>
          <div>Chính sách bảo hành</div>
          <div>Chính sách thanh toán</div>
        </div>

        <div className="address">
          {" "}
          Địa chỉ
          <div>về chúng tôi</div>
        </div>
      </div>
      <div className="Footer">
        <div id="Copyright">
          &copy; Copyright 2020 <a href="home">Trung Nguyen Organic</a>
        </div>
        <div id="Problem">
          {" "}
          Mọi vấn đề về bản quyền vui lòng liên hệ email:
          trungnguyenorganic@gmail.com
        </div>
      </div>
    </div>
  );
}

export default App;
