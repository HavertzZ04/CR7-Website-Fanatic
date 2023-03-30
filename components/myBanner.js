import config from "../storage/config.js";
export default {


    showImage(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")))
        document.querySelector(".img-banner").style.backgroundImage = `url(${this.datas.image})`;
    },

    Show(){ //Create the worker

        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")))
        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});

        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#banner").append(...doc.body.children);

        ws.terminate();
        })
    }
}
