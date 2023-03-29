export default {
    datas : [
        {
            subtitle: "GLASSES",
            title: "Eyewear",
            description: "A contemporary collection able to masterfully match any type of look: classic colors for everyday style alternate with more eye-catching tones.",
            buy: "Buy now",
            image: "img/cr7-glasses.jpg",
        },
        {
            subtitle: "SHOES",
            title: "Footwear",
            description: "A new footwear line that further enriches the whole collection and interprets the style of the most demanding and eccentric man.",
            buy: "Buy now",
            image: "img/cr7-shoes.jpg"

        },
        {
            subtitle: "PERFUME",
            title: "Fragrance",
            description: "Discover the brand new casual evening fragrance inspired by Cristiano Ronaldo's bold and optimistic Spirit.",
            buy: "Buy now",
            image: "img/cr7-fragrance.jpg"

        },
        {
            subtitle: "SETS",
            title: "Underwear",
            description: "Working with quality materials and many years of experience of producing underwear, the CR7 collections delivers a perfect and unique fit.",
            buy: "Buy now",
            image: "img/cr7-underwear.jpg"

        },
        {
            subtitle: "HOTELS",
            title: "Pestana Hotel Group",
            description: "Cristiano Ronaldo's hotel group around the world offering a VIP service, winning the world's travel award 2022.",
            buy: "Book now",
            image: "img/cr7-hotel.jpg"
        },
        {
            subtitle: "MUSEUM",
            title: "CR7 Museu",
            description: "It is dedicated to the trophies of Cristiano Ronaldo. It is located in Ronaldo's birthplace, the city of Funchal on the Portuguese island of Madeira.",
            buy: "Get tickets now",
            image: "img/cr7-museum.jpg",

        },
],



    Show(){
        const ws = new Worker("storage/wsFirstSection.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(".shops").append(...doc.body.children);

        ws.terminate();
        })
    }
}