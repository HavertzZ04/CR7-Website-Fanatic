import config from "../storage/config.js";
export default {
    

    listarTitle(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")))
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<h1 class="text-center">${this.title.name}</h1>`);
    },



    Show(){ //Create tge worker
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        
        ws.postMessage({module: "listTeams", data: this.teams});
        
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");

        document.querySelector("#teams").append(...doc.body.children);

        ws.terminate();
        })
    }

}