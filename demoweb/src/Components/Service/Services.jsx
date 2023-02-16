import '../Components.css'
function Services() {
    return (
        <div className="OurServices">
            <div className="container">
                <div className='main-services'>
                    <div className="services-heading">
                        <h3>
                            Our Best Services For You
                        </h3>
                    </div>
                    <div className="row servicessec">
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/background1.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>PARTY HALLS</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/haircut.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>SALOONS</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/catring.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>CATRING SERVICES</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/dress design.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>DRESS DESIGERS</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                    </div>
                    <div className="row servicessec">
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/orginatization.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>EVENT ORGANIZERS</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/background3.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>STAGE DECORATION</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/background2.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>LIGHTING DECORATION</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className='viewcart'>
                                <img src={require("../../Assets/Images/rentacar.jpg")} alt="" />
                            </div>
                            <div>
                                <h3>RENT A CAR</h3>
                            </div>
                            <div>
                                <span>33 EVENTS | 45Structive Providers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;