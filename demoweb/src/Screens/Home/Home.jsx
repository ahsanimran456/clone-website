import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import Services from "../../Components/Service/Services";
import GetServices from "../../Components/GetServices/GetServices";
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
        </div>
    );
}

export default Home;