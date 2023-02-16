import '../Components.css'
import {
    SearchOutlined,
    DollarCircleOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
function GetServices() {
    return (<>
        <div className="booksService">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="book-heading">
                            <h3>How Book Services ?</h3>
                        </div>
                        <div className="bookservicesection">
                            <div className="bookSearcheach">
                                <div className='bookicons'>
                                    <SearchOutlined style={{ fontSize: 25, fontWeight: 700, color: "#000" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: 5 }}>
                                        Search Services
                                    </p>
                                    <p>
                                        Search ,reivews, short list and share the best Banquet Halls, Party halls near you
                                    </p>
                                </div>
                            </div>
                            <div className="bookSearcheach">
                                <div className='bookicons'>
                                    <DollarCircleOutlined style={{ fontSize: 25, fontWeight: 700, color: "#000" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: 5 }}>
                                        Request Quote
                                    </p>
                                    <p>
                                        Search ,reivews, short list and share the best Banquet Halls, Party halls near you
                                    </p>
                                </div>
                            </div>
                            <div className="bookSearcheach">
                                <div className='bookicons'>
                                    <CheckCircleOutlined style={{ fontSize: 25, fontWeight: 700, color: "#000" }} />
                                </div>
                                <div>
                                    <p style={{ marginBottom: 5 }}>
                                        Book a Service
                                    </p>
                                    <p>
                                        Search ,reivews, short list and share the best Banquet Halls, Party halls near you
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="bootytvideo">
                            <div className="bookytheader">
                                <h3>
                                    Watch Video
                                </h3>
                            </div>
                            <div className='ytvideo'>
                                <img src={require("../../Assets/Images/yt.gif")} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default GetServices;