import "./Content.css"
function Content() {
    return (
        <div className="Content">
            <div className="Content-center"><h1 id="content-center">Thông tin mới nhất</h1></div>
                
            <div id="content">
                <div id="content2">
                    <div itemscope="">
                        <table>
                            <tbody>
                                <tr> 
                                    <td style={{verticalAlign: "middle", font: "message-box"}}><h1>TRUNG NGUYEN ORGANIC</h1></td>
                                    <td style={{verticalAlign:"middle"}}></td>
                                </tr>
                            </tbody>
                        </table>
                        <table id="company">
                            <tbody>
                                <tr class="even">
                                    <th>Company Name</th>
                                    <td itemprop="name">TRUNG NGUYEN ORGANIC</td>
                                </tr>
                                <tr class="odd">
                                    <th>Address</th>
                                    <td itemprop="streetAddress">85 Le Thi Hong Gam Street, Vinh Thanh Ward, Rach Gia City&nbsp</td>
                                </tr>
                                <tr class="even">
                                    <th>ZIP</th>
                                    <td itemprop="postalCode">&nbsp;</td>
                                </tr>
                                <tr class="odd">
                                    <th>City</th>
                                    <td itemprop="addressLocality">Kien Giang Province&nbsp;
                                                        </td>
                                </tr>
                                <tr class="even">
                                    <th>Region</th>
                                    <td itemprop="addressRegion">&nbsp;&nbsp;</td>
                                </tr>
                                <tr class="odd">
                                    <th>Country</th>
                                    <td itemprop="addressCountry">VIETNAM&nbsp;</td>
                                </tr>
                                <tr class="even">
                                    <th>Phone</th>
                                    <td itemprop="telephone">+84  9 39971682&nbsp;</td>
                                </tr>
                                <tr class="odd">
                                    <th>Fax</th>
                                    <td itemprop="faxNumber">&nbsp;</td>
                                </tr>

                                <tr class="even">
                                    <th>E-mail</th>
                                    <td itemprop="email"><a href="mailto:trungnguyenorganic@gmail.com">trungnguyenorganic@gmail.com</a>&nbsp;</td>
                                </tr>
                                <tr class="odd">
                                    <th>www</th>
                                    <td><a itemprop="url" href="http://www.trungnguyenorganic.com" target="_blank">www.trungnguyenorganic.com</a>&nbsp;</td>
                                </tr>

                               
                            <tr class="odd">
                                <th>Certification</th>
                                <td>&nbsp;&nbsp;</td>
                            </tr>
                            <tr class="even">
                                <th>Company certificate</th>
                                <td>&nbsp;</td>
                            </tr><tr class="odd">
                                <th>Registration No.</th>
                                <td></td>
                            </tr>
                            <tr class="even">
                                <th>Link to the certificate</th>
                                <td><a href="http://" target="_blank">&nbsp;</a></td>
                            </tr>
                            <tr class="odd">
                                <th>Label</th>
                                <td><a href="http://"></a>&nbsp;</td>
                            </tr>
                            <tr class="even">
                                <th>Surface</th>
                                <td>&nbsp;</td>
                            </tr>
                            <tr class="odd">
                                <th>Founded</th>
                                <td>&nbsp;</td>
                            </tr>
                            <tr class="even">
                                <th>Contact person</th>
                                <td>&nbsp;</td>
                            </tr>
                            <tr class="odd">
                                <th>Products to sell</th>
                                <td>CORDYCEPS MILITARIS</td>
                            </tr>
                            <tr class="even">
                                <th>Products to buy</th>
                                <td>CORDYCEPS MILITARIS</td>
                            </tr>
                            <tr class="odd">
                                <th>Service provider for products</th>
                                <td></td>
                            </tr>

                            <tr class="even">
                                <th>Company profile</th>
                                <td style={{textAlign: "justify"}}>&nbsp;&nbsp;</td>
                            </tr>
                            <tr class="odd">
                                <th></th>
                                <td style={{textAlign: "justify"}}>&nbsp;&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content;