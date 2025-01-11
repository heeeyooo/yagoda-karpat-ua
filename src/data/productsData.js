import bilberryImg from "./products-img/bilberry.jpg";
import bilberryImg2 from "./products-img/bilberry2.jpg";
import lingonberryImg from "./products-img/lingonberry.jpg";
import lingonberryImg2 from "./products-img/lingonberry2.jpg";
import rosehipImg from "./products-img/rosehip.jpg";
import rosehipImg2 from "./products-img/rosehip2.jpg";
import elderberryImg from "./products-img/elderberry.png";
import strawberryImg from "./products-img/strawberry.jpg";
import strawberryImg2 from "./products-img/strawberry2.jpg";
import raspberryImg from "./products-img/raspberry.jpg";
import raspberryImg2 from "./products-img/raspberry2.jpg";
import raspberryImg3 from "./products-img/raspberry3.jpg";
import plumImg from "./products-img/plum.jpg";
import plumImg2 from "./products-img/plum2.jpg";
import apricotImg from "./products-img/apricot.jpg";
import sweetPepperImg from "./products-img/sweet-pepper.jpg";
import sweetPepperImg2 from "./products-img/sweet-pepper2.jpg";
import sweetPepperImg3 from "./products-img/sweet-pepper3.jpg";
import sweetPepperImg4 from "./products-img/sweet-pepper4.jpg";
import boletusImg from "./products-img/boletus.jpg";
import boletusImg2 from "./products-img/boletus2.jpg";
import boletusImg3 from "./products-img/boletus3.jpg";
import boletusImg4 from "./products-img/boletus4.jpg";
import boletusImg5 from "./products-img/boletus5.jpg";
import chanterelleImg from "./products-img/chanterelle.jpg";
import chanterelleImg2 from "./products-img/chanterelle2.jpg";
import sourCherryImg from "./products-img/sour-cherry.jpg";
import sourCherryImg2 from "./products-img/sour-cherry2.jpg";
import honeyFungusImg from "./products-img/honey-fungus.jpg";
import honeyFungusImg2 from "./products-img/honey-fungus2.jpg";
import blackberryImg from "./products-img/blackberry.jpg";

const productsData = [
    {
        id: "bilberry",
        type: "berry",
        productContainer: "product-container",
        title: "Чорниця",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [bilberryImg, bilberryImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "lingonberry",
        type: "berry",
        productContainer: "product-container1",
        title: "Брусниця",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [lingonberryImg, lingonberryImg2],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "rosehip",
        type: "berry",
        productContainer: "product-container",
        title: "Шипшина",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [rosehipImg, rosehipImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "elderberry",
        type: "berry",
        productContainer: "product-container1",
        title: "Бузина",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [elderberryImg],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "strawberry",
        type: "berry",
        productContainer: "product-container",
        title: "Полуниця",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [strawberryImg, strawberryImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "raspberry",
        type: "berry",
        productContainer: "product-container1",
        title: "Малина",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [raspberryImg2, raspberryImg, raspberryImg3],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "plum",
        type: "fruit",
        productContainer: "product-container",
        title: "Слива",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [plumImg, plumImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "apricot",
        type: "fruit",
        productContainer: "product-container1",
        title: "Абрикос",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?",
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [apricotImg],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "sweet-pepper",
        type: "vegetable",
        productContainer: "product-container",
        title: "Перець солодкий",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [
            sweetPepperImg,
            sweetPepperImg2,
            sweetPepperImg3,
            sweetPepperImg4,
        ],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "boletus",
        type: "mushroom",
        productContainer: "product-container1",
        title: "Гриб білий",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [
            boletusImg,
            boletusImg2,
            boletusImg3,
            boletusImg4,
            boletusImg5,
        ],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "chanterelle",
        type: "mushroom",
        productContainer: "product-container",
        title: "Гриб лисичка",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [chanterelleImg, chanterelleImg2],
        classSwiper: "my-swiper",
        infoContainer: "product-info-container",
    },
    {
        id: "sour-cherry",
        type: "fruit",
        productContainer: "product-container1",
        title: "Вишня",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [sourCherryImg, sourCherryImg2],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
    {
        id: "honey-fungus",
        type: "mushroom",
        productContainer: "product-container",
        title: "Гриб опеньок",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [honeyFungusImg, honeyFungusImg2],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container",
    },
    {
        id: "blackberry",
        type: "berry",
        productContainer: "product-container1",
        title: "Ожина",
        info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo enim, debitis fugit nulla voluptatum ab libero consequuntur veritatis ullam adipisci magnam quibusdam obcaecati quos rerum iste, temporibus dicta architecto et?`,
        pack: "паперовий мішок 25 кг",
        temp: "-21 °C",
        origin: "Україна",
        productImages: [blackberryImg],
        classSwiper: "my-swiper-1",
        infoContainer: "product-info-container-1",
    },
];

export { productsData };
