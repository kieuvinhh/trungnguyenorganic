import react from "react";
import "./Bottom.css"
function Bottom () {
    return (
    <div className="Bottom">
        <div className="information"> 
            <h4>Thông tin về chúng tôi</h4>
        </div>

        <div className="policy">
            <h4>Chính sách bán hàng</h4>
            <ul className="ul-footer">
                <li>Chính sách vận chuyển</li>
                <li>Chính sách đổi trả hàng</li>
                <li>Chính sách bảo hành</li>
                <li>Chính sách thanh toán</li>
            </ul>
        </div>

        <div className="address"> 
            <div>Địa chỉ</div>
            <div>về chúng tôi</div>
        </div>

        
    </div>
  );
}
export default Bottom;