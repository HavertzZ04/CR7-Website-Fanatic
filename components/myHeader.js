export default {
    title: {
        name: "CR7",
        href:"#"
    },
    teams: [
        {
            name: "Sporting CP",
            href:"https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Sporting_CP"
        },
        {
            name: "Manchester United",
            href:"https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Manchester_United"
        },
        {
            name: "Real Madrid",
            href:"https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Real_Madrid"
        },
        {
            name: "Juventus",
            href:"https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Juventus"
        },
        {
            name: "Al-Nassr FC",
            href:"https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Al_Nassr"
        },
        {
            name: "Portugal",
            href:"https://en.wikipedia.org/wiki/Cristiano_Ronaldo#International_career"
        },
    ],

    listarTitle(){
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