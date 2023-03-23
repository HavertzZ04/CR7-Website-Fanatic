export default {
    image: "img/cr7-banner.jpg",
    title: "Cristiano Ronaldo",
    description: "CR7 is a Portuguese professional soccer player. He has won five Ballon d'Or awards and numerous other accolades, and is considered one of the greatest players of all time.",
    link: "Continue reading...",


    showImage(){
        document.querySelector(".img-banner").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",
        `<h1 class="display-4 ">${this.title}</h1>
        <p class="lead my-3">${this.description}</p>
        <p class="lead mb-0"><a href="https://en.wikipedia.org/wiki/Cristiano_Ronaldo" target="_blank" class="text-white fw-bold">${this.link}</a></p>
        `);
    }
}