import config from "../storage/config.js";
export default {
    

    show(){
        config.dataMySecondSection();
        Object.assign(this, JSON.parse(localStorage.getItem("mySecondSection")))
        const ws = new Worker("storage/wsSecondSection.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#texts").append(...doc.body.children);

        ws.terminate();
        })
    }
}
