import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import Services from "../../Components/Service/Services";
import GetServices from "../../Components/GetServices/GetServices";
import Footer from "../../Components/Footer/Footer";
function Home() {
    return (
        <div>
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
    );
}

export default Home;