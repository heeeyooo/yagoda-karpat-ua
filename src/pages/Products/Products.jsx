import { useState } from "react";
import Product from "../../components/Product/Product";
import { productsData } from "../../data/productsData";
import "./Products.css";

const Products = () => {
    const [search, setSearch] = useState("");

    addEventListener("keyup", () => {
        const slider = document.querySelectorAll(".my-swiper");
        slider.forEach((slide) => {
            slide.classList.add("active");
        });
        const productInfo = document.querySelectorAll(
            ".product-info-container"
        );
        productInfo.forEach((product) => {
            product.classList.add("active");
        });
        const slider1 = document.querySelectorAll(".my-swiper-1");
        slider1.forEach((slide) => {
            slide.classList.add("active");
        });
        const productInfo1 = document.querySelectorAll(
            ".product-info-container-1"
        );
        productInfo1.forEach((product) => {
            product.classList.add("active");
        });
    });

    return (
        <div className="products-container" id="section3">
            <h3 className="products-main-info">Продукція</h3>
            <p className="filter-title">Фільтер</p>
            <input
                className="search-input"
                type="text"
                placeholder="Який продукт ви шукаєте?"
                onChange={(e) => setSearch(e.target.value)}
            />
            {productsData
                .filter((item) => {
                    return search.toLowerCase() === ""
                        ? item
                        : item.title
                              .toLowerCase()
                              .startsWith(search.toLowerCase());
                })
                .map((product) => {
                    return <Product product={product} key={product.id} />;
                })}
        </div>
    );
};

export default Products;
