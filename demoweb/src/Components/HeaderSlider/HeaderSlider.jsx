import '../Components.css'
import {
    MailOutlined,
    PhoneOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import Carousel from 'react-bootstrap/Carousel';
function HeaderSlider() {
    return (
        <>
            <div className="topheader">
                <div className='emailquiery'>
                    <MailOutlined
                        style={{ marginRight: 10 }} />
                    <span>
                        CustomerCare@traveltriangle.com
                    </span>
                </div>
                <div className='emailquiery' style={{ marginRight: "150px", border: "none" }}>
                    <PhoneOutlined
                        style={{ marginRight: 10 }} />
                    <span>
                        111-222-333
                    </span>
                </div>
                <div className='listServices'>
                    <UnorderedListOutlined style={{ fontSize: 30 }} />
                    <div>
                        <span>List Your Services <br /> For Free</span>
                    </div>
                </div>
            </div>
            <div className="slider">
                <Carousel fade >
                    <Carousel.Item interval={100000} >
                        <img
                            className="d-block w-100"
                            src={require("../../Assets/Images/background4.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption className='custom-heading'>
                            <h3>EVENT MANAGEMENT</h3>
                        </Carousel.Caption>
                        <Carousel.Caption className='custom-btnlogin'>
                            <button style={{ cursor: "pointer" }}>Sign Up</button>
                        </Carousel.Caption>
                        <Carousel.Caption className='custom-btnsign'>
                            <button style={{ cursor: "pointer" }}>Sign In</button>
                        </Carousel.Caption>

                        <Carousel.Caption className='sliderSearchContainer'>
                            <h3>Give your Events a Royal Look</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            <div>
                                <button>See how It Works</button>
                            </div>
                            <div className='sliderSearch'>
                                <div>
                                    <input type="text" />
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                                <div>
                                    <button>Search</button>
                                </div>
                            </div>
                        </Carousel.Caption>

                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={require("../../Assets/Images/background2.jpg")}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require("../../Assets/Images/background3.jpg")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </>
    );
}

export default HeaderSlider;