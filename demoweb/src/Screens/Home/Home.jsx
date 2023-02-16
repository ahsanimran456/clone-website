import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import Services from "../../Components/Service/Services";
import GetServices from "../../Components/GetServices/GetServices";
import Footer from "../../Components/Footer/Footer";
import {
    useEffect, useState, useRef
} from "react";

function Home() {
    const [loader, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(!loader)
        }, 3000);
    }, []);
    return (
        <>
            {
                loader ?
                    <div style={{ width: "100%", height: "100vh" }}>
                        <img src={require('../../Assets/Images/loader2.gif')} alt="" style={{ width: "100%", height: "100%" }} />
                    </div> :
                    <div >
                        <section>
                            <HeaderSlider />
                        </section>
                        <section>
                            <Services />
                        </section>
                        <section>
                            <GetServices />
                        </section>
                        <section>
                            <Footer />
                        </section>
                    </div>
            }
        </>
    );
}

export default Home;