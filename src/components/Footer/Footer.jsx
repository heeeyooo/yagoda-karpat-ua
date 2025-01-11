import { productsData } from "../../data/productsData";
import "./Footer.css";
import organicImg from "./img/certificates/organic-logo.jpg";

const Footer = () => {
    const scrollToTop = () => {
        document.documentElement.scrollTop = 0;
    };

    function expandFooterList(container, btn) {
        document
            .querySelector(container)
            .classList.toggle("grid-container--expand");
        document
            .querySelector(btn)
            .classList.toggle("footer__expand-btn--active");
    }

    return (
        <footer className="footer">
            <button
                title="Повернутись наверх"
                className="to-top-btn"
                onClick={scrollToTop}
            >
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-up"></i>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
            <a className="footer-logo" href="#section1">
                Ягода Карпат
            </a>
            <div className="certificate-container">
                <p className="certificate-info">Наші сертифікати</p>
                <img className="certificate-img" src={organicImg} alt="" />
            </div>
            <hr />
            <div className="footer-nav-container">
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name f-navigation">
                            Навігація
                        </p>
                        <button
                            className="footer__expand-btn1"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container1",
                                    ".footer__expand-btn1"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container1">
                        <ul className="footer-link js-footer__list1">
                            <li>
                                <a className="f-home" href="#section1">
                                    Головна
                                </a>
                            </li>
                            <li>
                                <a className="f-about" href="#section2">
                                    Про нас
                                </a>
                            </li>
                            <li>
                                <a className="f-products" href="#section3">
                                    Продукція
                                </a>
                            </li>
                            <li>
                                <a className="f-contacts" href="#section4">
                                    Контакти
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-berries">Ягоди</p>
                        <button
                            className="footer__expand-btn2"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container2",
                                    ".footer__expand-btn2"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container2">
                        <ul className="footer-link">
                            {productsData
                                .filter((product) => {
                                    return product.type == "berry";
                                })
                                .map((product) => {
                                    return (
                                        <li key={product.id}>
                                            <a href={"#" + product.id}>
                                                {product.title}
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-fruits">Фрукти</p>
                        <button
                            className="footer__expand-btn3"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container3",
                                    ".footer__expand-btn3"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container3">
                        <ul className="footer-link">
                            {productsData
                                .filter((product) => {
                                    return product.type == "fruit";
                                })
                                .map((product) => {
                                    return (
                                        <li key={product.id}>
                                            <a href={"#" + product.id}>
                                                {product.title}
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-vegetables">Овочі</p>
                        <button
                            className="footer__expand-btn4"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container4",
                                    ".footer__expand-btn4"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container4">
                        <ul className="footer-link">
                            {productsData
                                .filter((product) => {
                                    return product.type == "vegetable";
                                })
                                .map((product) => {
                                    return (
                                        <li key={product.id}>
                                            <a href={"#" + product.id}>
                                                {product.title}
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
                <div>
                    <div className="footer__top-title">
                        <p className="footer-nav-name m-mushrooms">Гриби</p>
                        <button
                            className="footer__expand-btn5"
                            onClick={() =>
                                expandFooterList(
                                    ".grid-container5",
                                    ".footer__expand-btn5"
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                    <div className="grid-container5">
                        <ul className="footer-link">
                            {productsData
                                .filter((product) => {
                                    return product.type == "mushroom";
                                })
                                .map((product) => {
                                    return (
                                        <li key={product.id}>
                                            <a href={"#" + product.id}>
                                                {product.title}
                                            </a>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
                <hr className="extra-hr" />
            </div>
            <div className="footer__rights-creator">
                <p className="rights">© 2024 Ягода Карпат</p>
                <p className="creator">
                    Made with <i class="fa-regular fa-heart"></i> by{" "}
                    <a
                        href="https://stepandordiai.netlify.app/"
                        target="_blank"
                    >
                        Stepan Dordiai
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
