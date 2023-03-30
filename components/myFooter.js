import config from "../storage/config.js";
export default {
    

    show(){
        config.dataFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("footer")))

        const ws = new Worker("storage/wsFooter.js", {type: "module"});
    
        ws.postMessage({module: "dataList", data: this.datas});
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".footerCr7").append(...doc.body.children);
    
        ws.terminate();
        })
    }
}