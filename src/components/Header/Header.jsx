import "./Header.scss";

const Header = () => {
    let lastScrollTop = 0;
    addEventListener("scroll", () => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > window.innerHeight + 100) {
            document.querySelector(".header").classList.add("header--hide");
            document.querySelector(".burger-btn").classList.add("header--hide");
        } else {
            document.querySelector(".header").classList.remove("header--hide");
            document
                .querySelector(".burger-btn")
                .classList.remove("header--hide");
        }
        lastScrollTop = scrollTop;
    });

    return (
        <header className="header header--hide">
            <a className="header__logo" href="#section1">
                Ягода Карпат
            </a>
            <a className="header-tel" href="tel:+380968065513">
                +38 (096) 806 55 13
            </a>
        </header>
    );
};

export default Header;
