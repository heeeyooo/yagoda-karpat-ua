import bilberryIcon from "/img/icons/bilberry-icon.png";
import lingonberryIcon from "/img/icons/lingonberry-icon.png";
import elderberryIcon from "/img/icons/elderberry-icon.png";
import raspberryIcon from "/img/icons/raspberry-icon.png";
import strawberryIcon from "/img/icons/strawberry-icon.png";
import plumIcon from "/img/icons/plum-icon.png";
import boletusIcon from "/img/icons/boletus-icon.png";
import chanterelleIcon from "/img/icons/chanterelle-icon.png";
import rosehipIcon from "/img/icons/rosehip-icon.png";
import sweetPepperIcon from "/img/icons/sweet-pepper.png";
import apricotIcon from "/img/icons/apricot-icon.png";
import homeVideo from "./img/home-video.mp4";
import "./Home.css";
import "./../../components/Header/Header.css";
import "./../../components/BurgerBtn/BurgerBtn.css";

const Home = () => {
    addEventListener("scroll", () => {
        const homeContainer = document.querySelector(".js-home-container");

        let homeContainerRect = homeContainer.getBoundingClientRect().bottom;
        if (homeContainerRect < 0) {
            document.querySelector(".header").classList.add("header--active");
            document
                .querySelector(".burger-btn")
                .classList.add("burger-btn--translate");
        } else {
            document
                .querySelector(".header")
                .classList.remove("header--active");
            document
                .querySelector(".burger-btn")
                .classList.remove("burger-btn--translate");
        }
    });

    return (
        <div className="home-container js-home-container" id="section1">
            <video
                className="home-video"
                src={homeVideo}
                autoPlay
                loop
                playsInline
                muted
                // controls
            ></video>
            <div className="home-container__wrapper">
                <div>
                    <h1 className="home-main-info">
                        Оптовий виробник замороженик та сушених продуктів
                    </h1>
                    <p className="home-info">
                        Ми виробляємо заморожені та сушені ягоди, фрукти, гриби
                        та овочі
                    </p>
                </div>

                {/* <div className="contact-us-btn-container"> */}
                <a className="contact-us-btn" href="#section4">
                    Зв'яжіться з нами
                </a>
                {/* </div> */}
            </div>
            <div className="home-container__product-wrapper">
                <a href="#bilberry">
                    <img src={bilberryIcon} alt="Bilberry" />
                </a>
                <a href="#lingonberry">
                    <img src={lingonberryIcon} alt="" />
                </a>
                <a href="#elderberry">
                    <img src={elderberryIcon} alt="" />
                </a>
                <a href="#rosehip">
                    <img src={rosehipIcon} alt="" />
                </a>
                <a href="#strawberry">
                    <img src={strawberryIcon} alt="" />
                </a>
                <a href="#raspberry">
                    <img src={raspberryIcon} alt="" />
                </a>
                <a href="#plum">
                    <img src={plumIcon} alt="" />
                </a>
                <a href="#sweet-pepper">
                    <img src={sweetPepperIcon} alt="" />
                </a>
                <a href="#boletus">
                    <img src={boletusIcon} alt="" />
                </a>
                <a href="#chanterelle">
                    <img src={chanterelleIcon} alt="" />
                </a>
                <a href="#apricot">
                    <img src={apricotIcon} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Home;
