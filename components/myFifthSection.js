export default {
    datas :{
      title: "Trophies with Portugal",
      paragraftOne: "Cristiano Ronaldo has won two titles with Portugal: the 2016 Euro Cup and the 2019 UEFA Nations League. The native of the island of Madeira, Funchal specifically, made his debut with the Portuguese team on August 20, 2003.",
      paragraftTwo: "On March 23, 2023 Cristiano Ronaldo is the player with the Most International Caps in History, 197 in total.",
    },

    show(){
      const ws = new Worker("storage/wsFifthSection.js", {type: "module"});

      ws.postMessage({module: "dataList", data: this.datas});
      ws.addEventListener("message", (e)=> {
          let doc = new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector(".portugal").append(...doc.body.children);

      ws.terminate();
      })
  }
}