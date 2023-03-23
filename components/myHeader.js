export default {
    title: {
        name: "CR7",
        href:"#"
    },
    teams: [
        {
            name: "Sporting CP",
            href:"#"
        },
        {
            name: "Manchester United",
            href:"#"
        },
        {
            name: "Real Madrid",
            href:"#"
        },
        {
            name: "Juventus",
            href:"#"
        },
        {
            name: "Al-Nassr FC",
            href:"#"
        },
    ],

    listarTitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend", `<h1 class="text-center">${this.title.name}</h1>`);
    },

    listarTeams(){
        let template = "";
        this.teams.forEach((val, id) => {
            template += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#teams").insertAdjacentHTML("beforeend", template);
    }

}