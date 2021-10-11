import './App.css';
import Header from "./Header.js";
function App() {
  return (
    <div>
      <Header/>

      <div className="Body">
        <center>
        <img src={"../img/img_body.jpg"} alt="" width="1200" height="500" />
        </center>
      </div>

      <hr className="divided"/>

      <center className="Content-center"><h1 id="content-center">Thông tin mới nhất</h1></center>
      <div className="news">
        <div id="news1"> news1</div>
        <div id="news2"> news2</div>
        <div id="news3"> news3</div>
        <div id="news4"> news5</div>

      </div>
      <center className="aboutUs"><
        h1 id="aboutus">Về chúng tôi</h1>
        </center>

      <div className="Bottom">

        <div className="information"> Thông tin
          
          <div>về chúng tôi</div>


        </div>

        <div className="policy"> Chính sách bán hàng
          
          <div>Chính sách vận chuyển</div>
          <div>Chính sách đổi trả hàng</div>
          <div>Chính sách bảo hành</div>
          <div>Chính sách thanh toán</div>
        </div>

        <div className="address"> Địa chỉ
          
          <div>về chúng tôi</div>
          

        </div>

      </div>
      <div className="Footer">
          <div id="Copyright">&copy; Copyright 2020 <a href="home">Trung Nguyen Organic</a></div>
          <div id="Problem"> Mọi vấn đề về bản quyền vui lòng liên hệ email: trungnguyenorganic@gmail.com</div>
      </div>
    </div>
  );
}

export default App;
