import config from "../storage/config.js";
export default {
    
    Show(){
        config.dataMyFirstSection();
        Object.assign(this, JSON.parse(localStorage.getItem("myFirstSection")))

        const ws = new Worker("storage/wsFirstSection.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(".shops").append(...doc.body.children);

        ws.terminate();
        })
    }
}