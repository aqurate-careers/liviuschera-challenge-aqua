import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import products from "./products.json";

const swiperWrapper = document.getElementById("carousel");

products.forEach((product) => {
    const { link, name, image, original_price, discounted_price } = product;
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    // slide.className = "swiper-slide";
    slide.innerHTML = `
        <div class="item">
            <div class="image-wrapper">
                <img class="image" src="${image}" alt="${name}">
            </div>
            <div class="name-wrapper">
                <a class="name" href="${link}">${name}</a>
            </div>
            <div class="price-wrapper">
                <span class="${
                    discounted_price ? `original-price` : `discounted-price`
                }">${original_price}&nbsp; &euro;</span>
                ${
                    discounted_price
                        ? `<span class="discounted-price">${discounted_price}&nbsp;&euro;</span>`
                        : ""
                }
            </div>
            <div class="action-wrapper">
                <button class="action">Add to cart</button>
            </div>

            <div class="wishlist-wrapper">
              <a class ="wishlist-button" role="button" href="#"></a>
        </div>
        </div>
    `;
    swiperWrapper.appendChild(slide);
});

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Autoplay],
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});
