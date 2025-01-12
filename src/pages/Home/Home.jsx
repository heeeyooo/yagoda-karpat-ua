import homeVideo from "./img/home-video.mp4";
import { productsData } from "../../data/productsData";
import "./../../components/Header/Header.css";
import "./../../components/BurgerBtn/BurgerBtn.css";
import "./Home.css";

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
                <a className="contact-us-btn" href="#section4">
                    Зв'яжіться з нами
                </a>
            </div>
            <div className="home-container__product-wrapper">
                {productsData.map((product) => {
                    return (
                        <a
                            className={product.imgNone}
                            key={product.id}
                            href={"#" + product.id}
                            data-title={product.name}
                        >
                            <img
                                className={product.imgNone}
                                loading="lazy"
                                src={product.icon}
                                alt={product.name}
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
