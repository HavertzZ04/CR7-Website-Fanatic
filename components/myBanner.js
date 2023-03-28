export default {

    datas : {
        image: "img/cr7-banner.jpg",
        title: "Cristiano Ronaldo",
        description: "CR7 is a Portuguese professional soccer player. He has won five Ballon d'Or awards and numerous other accolades, and is considered one of the greatest players of all time.",
        link: "Continue reading...",
    },

    showImage(){
        document.querySelector(".img-banner").style.backgroundImage = `url(${this.datas.image})`;
    },

    Show(){ //Create the worker
        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});

        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#banner").append(...doc.body.children);

        ws.terminate();
        })
    }
}
