import "./BurgerBtn.scss";

const BurgerBtn = () => {
    function setNav() {
        const burgerBtn = document.querySelector(".burger-btn");
        const midLine = document.querySelector(".burger-btn__line");
        const mobileMenu = document.querySelector(".menu");
        burgerBtn.classList.toggle("burger-btn--active");
        midLine.classList.toggle("burger-btn__line--active");
        mobileMenu.classList.toggle("menu--active");
        document.querySelector("#home").classList.toggle("home--active");
        document.querySelector("#about").classList.toggle("about--active");
        document
            .querySelector("#products")
            .classList.toggle("products--active");
        document
            .querySelector("#contacts")
            .classList.toggle("contacts--active");
        document.querySelector(".curtain").classList.toggle("curtain--active");
        // hide list of products in menu by clicking menu btn
        document
            .querySelector(".grid-container")
            .classList.remove("grid-container--expand");
        document
            .querySelector(".products-btn")
            .classList.remove("products-btn--active");
        document.body.classList.toggle("body--active");
    }
    return (
        <div className="burger-btn__wrapper">
            <div onClick={setNav} className="burger-btn header--hide">
                <div className="burger-btn__line"></div>
            </div>
        </div>
    );
};

export default BurgerBtn;
