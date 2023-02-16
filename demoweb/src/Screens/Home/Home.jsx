import HeaderSlider from "../../Components/HeaderSlider/HeaderSlider";
import Services from "../../Components/Service/Services";
function Home() {
    return (
        <div>
            <section>
                <HeaderSlider />
            </section>
            <section>
                <Services />
            </section>
        </div>
    );
}

export default Home;