export default {
    paragraft : "Web page created as a tribute to my idol CR7, with love: ",
    top : "Back to top",

    showText(){
        document.querySelector(".footerCr7").insertAdjacentHTML("beforeend",
        `
        <p>${this.paragraft}<a
        href="https://github.com/HavertzZ04">HavertzZ</a>
        </p>
        <p>
            <a href="#">${this.top}</a>
        </p>
        `);
    }
}