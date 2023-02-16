import "../Components.css"
import {
    UsergroupAddOutlined,
    UserOutlined,
    TwitterOutlined,
    FacebookOutlined,
    InstagramOutlined,
    MailOutlined,
    WhatsAppOutlined
} from '@ant-design/icons';
function Footer() {
    return (
        // <div className="container">
        <>
            <div className="footermain">
                <div className="row">
                    <div className="col-md-8 footer-profile">
                        <div className="footercards">
                            <div className="eachcardfooter">
                                <div className="headericon-footer">
                                    <UsergroupAddOutlined style={{ fontSize: 50, color: "#000" }} />
                                </div>
                                <div className="cardbody-footer">
                                    <h3>
                                        For Customers
                                    </h3>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure repellat quia, esse itaque saepe minima cum. Odio ea velit dolore reprehenderit sit alias, accusantium quo. Perferendis dolorem vitae consectetur!</p>
                                </div>
                            </div>
                            <div className="eachcardfooter">
                                <div className="headericon-footer">
                                    <UserOutlined style={{ fontSize: 50, color: "#000" }} />
                                </div>
                                <div className="cardbody-footer">
                                    <h3>
                                        For Venue Owners
                                    </h3>
                                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iure repellat quia, esse itaque saepe minima cum. Odio ea velit dolore reprehenderit sit alias, accusantium quo. Perferendis dolorem vitae consectetur!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ backgroundColor: "#fff" }}>
                        <div className="secondcard">
                            <div className="footer2header">
                                <h3>
                                    Love In Comments
                                </h3>
                            </div>
                            <div className="footer2img">
                                <img src={require("../../Assets/Images/review.jpg")} alt="" />
                            </div>
                            <div className="username">
                                <h3>
                                    Neelum Muneer
                                </h3>
                                <p>
                                    <span style={{ fontWeight: 800, color: "#F3AB00" }}> ❝</span>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sequi neque maxime labore molestiae facere laborum rem assumenda nisi delectus? Amet sunt non nihil quisquam accusamus, et ullam animi fugit <span style={{ fontWeight: 700, color: "#F3AB00" }}>❞</span> .
                                </p>
                                <span style={{ color: "#F3AB00" }}>
                                    ❒❒❒❒
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#343434" }}>
                <div className="container">
                    <div className="footer2">
                        <div>
                            <p>
                                Connect with us on :
                            </p>
                            <FacebookOutlined style={{ padding: "0px 5px", color: "#fff" }} />
                            <TwitterOutlined style={{ padding: "0px 5px", color: "#fff" }} />
                            <InstagramOutlined style={{ padding: "0px 5px", color: "#fff" }} />
                            <MailOutlined style={{ padding: "0px 5px", color: "#fff" }} />
                        </div>
                        <div>
                            <WhatsAppOutlined style={{ padding: "0px 5px", color: "#fff" }} /><p>111-222-333</p>
                        </div>
                        <div className="reserved">
                            <p>All rights reserved © 2023</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
        // </div>
    );
}

export default Footer;