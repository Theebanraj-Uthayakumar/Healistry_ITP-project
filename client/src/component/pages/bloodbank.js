import React from 'react'
import Container from '@material-ui/core/Container';

function bloodbank() {
    return (
        <div>
            <Container>
                <div class="row_bloodbank">
                    <div class="column_bloodbank">
                        <img src="images/Melri01.png" alt="Blood Bank" width="400px"></img>
                    </div>
                    <div class="column_bloodbank" style={{ paddingTop: "30px" }}>
                        <h2>Hospital Name</h2>
                        <p>Hospital Location - SLIIT Kandy Road Malabe Colombo Sri Lanka</p>
                        <p>Contact Number - 0766558653</p>
                    </div>
                </div>
                <div style={{ paddingTop: "150px", background: "images/Melri02.png" }}>
                    <center>
                        <h1>Available Blood Bank Blood Group Details</h1>
                        <table>
                            <tr>
                                <th width="40px" style={{ fontSize: "40px" }}> A+</th>
                                <td width="200px" style={{ fontSize: "40px" }}> - 74%</td>
                                <th width="40px" style={{ fontSize: "40px" }}> O+</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                            </tr>
                            <tr>
                                <th style={{ fontSize: "40px" }}> A-</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                                <th style={{ fontSize: "40px" }}> O-</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                            </tr>
                            <tr>
                                <th style={{ fontSize: "40px" }}> B+</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                                <th style={{ fontSize: "40px" }}> AB+</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                            </tr>
                            <tr>
                                <th style={{ fontSize: "40px" }}> B-</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                                <th style={{ fontSize: "40px" }}> AB-</th>
                                <td style={{ fontSize: "40px" }}> - 74%</td>
                            </tr>
                        </table>
                    </center>
                    <p>Note - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed urna vel ipsum egestas ultricies. Nunc magna turpis, ornare eu vestibulum sit amet, semper ut ex. Pellentesque ut risus porttitor, iaculis quam quis, sagittis tellus. Sed at neque non sem mollis tempor. Quisque tempus sed orci nec congue. Vivamus faucibus iaculis est, et volutpat sapien lobortis maximus. Morbi volutpat, metus at venenatis blandit, sem velit scelerisque justo, in hendrerit diam nulla a dui. Nulla et leo nec leo vulputate elementum. Fusce ut ante enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis suscipit tempus venenatis. Mauris et orci quam. Fusce mattis sit amet nulla vel mollis.</p>
                </div>
            </Container>
        </div>
    )
}

export default bloodbank
