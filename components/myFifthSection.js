import config from "../storage/config.js";
export default {
  

    show(){
      config.dataMyFifthSection();
      Object.assign(this, JSON.parse(localStorage.getItem("myFifthSection")))
      const ws = new Worker("storage/wsFifthSection.js", {type: "module"});

      ws.postMessage({module: "dataList", data: this.datas});
      ws.addEventListener("message", (e)=> {
          let doc = new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector(".portugal").append(...doc.body.children);

      ws.terminate();
      })
  }
}