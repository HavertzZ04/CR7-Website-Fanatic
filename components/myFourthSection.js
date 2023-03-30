import config from "../storage/config.js";
export default {


    show(){

        config.dataMyFourthSection();
        Object.assign(this, JSON.parse(localStorage.getItem("myFourthSection")))
        const ws = new Worker("storage/wsFourthSection.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".champions").append(...doc.body.children);

        ws.terminate();
        })
    },

    showMain(){
        config.dataMyFourthSection();
        Object.assign(this, JSON.parse(localStorage.getItem("myFourthSection")))
        document.querySelector(".champions").insertAdjacentHTML("beforeend",
        )
    },
}