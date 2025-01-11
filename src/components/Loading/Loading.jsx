import { useEffect } from "react";
import "./Loading.css";

const Loading = () => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.querySelector(".wrapper").style.display = "initial";
        setTimeout(() => {
            document.querySelector(".loading").style.display = "none";
            document.querySelector(".header").classList.remove("header--hide");
            document
                .querySelector(".burger-btn")
                .classList.remove("header--hide");
            document.body.style.overflowY = "visible";
            document.body.style.position = "static";
        }, 3000);
    }, []);

    return (
        <div className="loading">
            <p className="loading__title">Ягода Карпат</p>
        </div>
    );
};

export default Loading;
