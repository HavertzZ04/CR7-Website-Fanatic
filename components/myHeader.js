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

    listarTeams(){
        let template = "";
        this.teams.forEach((val, id) => {
            template += `<a class="p-2 link-secondary" href="${val.href}" target="blank">${val.name}</a>`
        });
        document.querySelector("#teams").insertAdjacentHTML("beforeend", template);
    }

}