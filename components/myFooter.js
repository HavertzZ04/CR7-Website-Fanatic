export default {
    datas : {
        paragraft : "Web page created as a tribute to my idol CR7, with love: ",
        top : "Back to top"
    },

    show(){
        const ws = new Worker("storage/wsFooter.js", {type: "module"});
    
        ws.postMessage({module: "dataList", data: this.datas});
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".footerCr7").append(...doc.body.children);
    
        ws.terminate();
        })
    }
}