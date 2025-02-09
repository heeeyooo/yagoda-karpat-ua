import "./BurgerBtn.scss";

const BurgerBtn = () => {
    function toggleBurgerBtn() {
        const burgerBtn = document.querySelector(".burger-btn");
        const midLine = document.querySelector(".burger-btn__line");
        const mobileMenu = document.querySelector(".nav-curtain");
        burgerBtn.classList.toggle("burger-btn--active");
        midLine.classList.toggle("burger-btn__line--active");
        mobileMenu.classList.toggle("nav-curtain--active");
        document.querySelector(".curtain").classList.toggle("curtain--active");
        // hide list of products in menu by clicking menu btn
        document
            .querySelector(".nav-curtain__grid-dropdown")
            .classList.remove("nav-curtain__grid-dropdown--active");
        document
            .querySelector(".products-btn")
            .classList.remove("products-btn--active");
        document.body.classList.toggle("body--hidden");
    }
    return (
        <div className="burger-btn__wrapper">
            <div onClick={toggleBurgerBtn} className="burger-btn">
                <div className="burger-btn__line"></div>
            </div>
        </div>
    );
};

export default BurgerBtn;
