export default {
    subtitleGlasses: "GLASSES",
    titleGlasses: "Eyewear",
    descriptionGlasses: "A contemporary collection able to masterfully match any type of look: classic colors for everyday style alternate with more eye-catching tones.",
    buyGlasses: "Buy now",
    imageGlasses: "img/cr7-glasses.jpg",

    subtitleShoes: "SHOES",
    titleShoes: "Footwear",
    descriptionShoes: "A new footwear line that further enriches the whole collection and interprets the style of the most demanding and eccentric man.",
    buyShoes: "Buy now",
    imageShoes: "img/cr7-shoes.jpg",

    subtitleFragrance: "PERFUME",
    titleFragrance: "Fragrance",
    descriptionFragrance: "Discover the brand new casual evening fragrance inspired by Cristiano Ronaldo's bold and optimistic Spirit.",
    buyFragrance: "Buy now",
    imageFragrance: "img/cr7-fragrance.jpg",

    subtitleUnderwear: "SETS",
    titleUnderwear: "Underwear",
    descriptionUnderwear: "Working with quality materials and many years of experience of producing underwear, the CR7 collections delivers a perfect and unique fit.",
    buyUnderwear: "Buy now",
    imageUnderwear: "img/cr7-underwear.jpg",

    subtitleHotel: "HOTELS",
    titleHotel: "Pestana Hotel Group",
    descriptionHotel: "Cristiano Ronaldo's hotel group around the world offering a VIP service, winning the world's travel award 2022.",
    buyHotel: "Book now",
    imageHotel: "img/cr7-hotel.jpg",

    subtitleMuseum: "MUSEUM",
    titleMuseum: "CR7 Museu",
    descriptionMuseum: "It is dedicated to the trophies of Cristiano Ronaldo. It is located in Ronaldo's birthplace, the city of Funchal on the Portuguese island of Madeira.",
    buyMuseum: "Get tickets now",
    imageMuseum: "img/cr7-museum.jpg",
    
    showStoreImages(){
        document.querySelector("#glassesPhoto").style.backgroundImage = `url(${this.imageGlasses})`;
        document.querySelector("#shoesPhoto").style.backgroundImage = `url(${this.imageShoes})`;
        document.querySelector("#fragrancePhoto").style.backgroundImage = `url(${this.imageFragrance})`;
        document.querySelector("#underwearPhoto").style.backgroundImage = `url(${this.imageUnderwear})`;
        document.querySelector("#hotelPhoto").style.backgroundImage = `url(${this.imageHotel})`;
        document.querySelector("#museumPhoto").style.backgroundImage = `url(${this.imageMuseum})`;


    },
    
    showStore(){
        document.querySelector("#glasses").insertAdjacentHTML("beforeend",
        `<strong class="d-inline-block mb-2 text-primary">${this.subtitleGlasses}</strong>
        <h3 class="mb-0 titleShop">${this.titleGlasses}</h3>
        <p class="card-text mb-auto">${this.descriptionGlasses}</p>
        <a href="https://www.cr7-eyewear.com/en/" class="stretched-link" target="_blank">${this.buyGlasses}</a>
        `);

        document.querySelector("#shoes").insertAdjacentHTML("beforeend",
        `<strong class="d-inline-block mb-2 text-primary">${this.subtitleShoes}</strong>
        <h3 class="mb-0 titleShop">${this.titleShoes}</h3>
        <p class="card-text mb-auto">${this.descriptionShoes}</p>
        <a href="https://www.cr7footwear.com/password" class="stretched-link" target="_blank">${this.buyShoes}</a>
        `);

        document.querySelector("#fragrance").insertAdjacentHTML("beforeend",
        `<strong class="d-inline-block mb-2 text-primary">${this.subtitleFragrance}</strong>
        <h3 class="mb-0 titleShop">${this.titleFragrance}</h3>
        <p class="card-text mb-auto">${this.descriptionFragrance}</p>
        <a href="https://cr7fragrances.store/pages/home-int" class="stretched-link" target="_blank">${this.buyFragrance}</a>
        `);

        document.querySelector("#underwear").insertAdjacentHTML("beforeend",
        `<strong class="d-inline-block mb-2 text-primary">${this.subtitleUnderwear}</strong>
        <h3 class="mb-0 titleShop">${this.titleUnderwear}</h3>
        <p class="card-text mb-auto">${this.descriptionUnderwear}</p>
        <a href="https://cr7underwear.com/" class="stretched-link" target="_blank">${this.buyUnderwear}</a>
        `);

        document.querySelector("#hotel").insertAdjacentHTML("beforeend",
        `<strong class="d-inline-block mb-2 text-primary">${this.subtitleHotel}</strong>
        <h3 class="mb-0 titleShop">${this.titleHotel}</h3>
        <p class="card-text mb-auto">${this.descriptionHotel}</p>
        <a href="https://www.pestanacr7.com/en" class="stretched-link" target="_blank">${this.buyHotel}</a>
        `);

        document.querySelector("#museum").insertAdjacentHTML("beforeend",
        `<strong class="d-inline-block mb-2 text-primary">${this.subtitleMuseum}</strong>
        <h3 class="mb-0 titleShop">${this.titleMuseum}</h3>
        <p class="card-text mb-auto">${this.descriptionMuseum}</p>
        <a href="https://www.pestanacr7.com/es/hoteles" class="stretched-link" target="_blank">${this.buyMuseum}</a>
        `);
    }
}