import '../Components.css'
import {
    MailOutlined,
    PhoneOutlined,
    UnorderedListOutlined,
    EnvironmentOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import Carousel from 'react-bootstrap/Carousel';
import { data } from './sliderData';
import './module.css'
import Signup from '../Form/Signup';
import Login from '../Form/Login';
import { useState } from 'react';

function HeaderSlider() {
   const [signup,setSignup] = useState(false);
   const [login,setLogin] = useState(false);


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
                <Carousel fade  controls={true} touch={true} >
                    {
                        data.map((Dataitems)=>{
                            return(
                                <Carousel.Item key={Dataitems.id} className={Dataitems.name} interval={1000}touch={true} disabled={false}>
                        <div className="slider-content">
                            <div className="slider-header">
                                <div className="slider-logo">
                                <h3>EVENT MANAGEMENT</h3>
                                </div>
                               
                                <div className="login-info">
                                <button style={{ cursor: "pointer" }} className="buttonSignup" onClick={()=>{
                                    setSignup(!signup)
                                    setLogin(false)
                                }}>Sign Up</button>
                                {
                                    signup && <Signup/>
                                }
                            <button style={{ cursor: "pointer" }} className="buttonSignup" onClick={()=>{
                                setLogin(!login)
                                setSignup(false)
                            }}>Sign In</button>
                            {
                                    login && <Login/>
                                }
                                </div>
                                
                            </div>
                            <div className="inner-content">
                            <h3>Give your Events a Royal Look</h3>
                            <div className='Seeworks'>
                                <button>See how It Works</button>
                            </div>
                            <div className='sliderSearch'>
                                <div style={{ position: "relative" }}>
                                    <EnvironmentOutlined className='searchicons' />
                                    <input type="text" placeholder='Find Location' />
                                </div>
                                <div style={{ position: "relative" }}>
                                    <CalendarOutlined className='searchicons' />
                                    <input type="text" placeholder='Select Service' />
                                </div>
                                <div>
                                    <button>Search</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Carousel.Item>
                            )
                        })

                    }
                    {/* <Carousel.Item interval={1000}touch={true} >
                        <img
                            className="d-block w-100"
                            src={require("../../Assets/Images/background2.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption className='custom-heading'>
                            <h3>EVENT MANAGEMENT</h3>
                        </Carousel.Caption>
                        <Carousel.Caption className='custom-btnlogin' >
                            <button style={{ cursor: "pointer" }}>Sign Up</button>
                            <button style={{ cursor: "pointer" }}>Sign In</button>
                        </Carousel.Caption>
                        <Carousel.Caption className='sliderSearchContainer'>
                            <h3>Give your Events a Royal Look</h3>
                            <div className='Seeworks'>
                                <button>See how It Works</button>
                            </div>
                            <div className='sliderSearch'>
                                <div style={{ position: "relative" }}>
                                    <EnvironmentOutlined className='searchicons' />
                                    <input type="text" placeholder='Find Location' />
                                </div>
                                <div style={{ position: "relative" }}>
                                    <CalendarOutlined className='searchicons' />
                                    <input type="text" placeholder='Select Service' />
                                </div>
                                <div>
                                    <button>Search</button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}touch={true} >
                        <img
                            className="d-block w-100"
                            src={require("../../Assets/Images/background1.jpg")}
                            alt="First slide"
                        />
                        <Carousel.Caption className='custom-heading'>
                            <h3>EVENT MANAGEMENT</h3>
                        </Carousel.Caption>
                        <Carousel.Caption className='custom-btnlogin' >
                            <button style={{ cursor: "pointer" }}>Sign Up</button>
                            <button style={{ cursor: "pointer" }}>Sign In</button>
                        </Carousel.Caption>
                        <Carousel.Caption className='sliderSearchContainer'>
                            <h3>Give your Events a Royal Look</h3>
                            <div className='Seeworks'>
                                <button>See how It Works</button>
                            </div>
                            <div className='sliderSearch'>
                                <div style={{ position: "relative" }}>
                                    <EnvironmentOutlined className='searchicons' />
                                    <input type="text" placeholder='Find Location' />
                                </div>
                                <div style={{ position: "relative" }}>
                                    <CalendarOutlined className='searchicons' />
                                    <input type="text" placeholder='Select Service' />
                                </div>
                                <div>
                                    <button>Search</button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </div>

        </>
    );
}

export default HeaderSlider;