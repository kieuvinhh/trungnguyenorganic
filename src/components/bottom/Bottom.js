import "./Bottom.css"
function Bottom () {
    return (
    <div className="Bottom">
        <div className="information"> 
            <h4>Thông tin về chúng tôi</h4>
            <ul className="ul_info">
                <li><span>Nơi sản xuất và đóng gói</span></li>
            </ul>
        </div>

        <div className="policy">
            <h4>Chính sách bán hàng</h4>
            <ul className="ul_policy">
                <li><span>Chính sách vận chuyển</span></li>
                <li><span>Chính sách đổi trả hàng</span></li>
                <li><span>Chính sách bảo hành</span></li>
                <li><span>Chính sách thanh toán</span></li>
            </ul>
        </div>


        
    </div>
  );
}
export default Bottom;