export default {

    datas : {
        title: "UEFA Champions League",
        paragraftOne: "Cristiano Ronaldo was nicknamed 'Mister Champions' because he was the first player in history to win this title 5 times. The UEFA Champions League is the best European club championship. The first title was won with Manchester United and the others ones were obtained with Real Madrid. Also he has won 32 trophies in his career, including seven league titles.",
        paragraftTwo: "He currently holds the record as the competition's all-time top scorer with a total of 141 goals. He is also the top assister with 42 goal assists, the top scorer in playoffs with 67 goals and he is even the player with the most games played with a total of 187.",
        image: "img/cr7-champions.jpg",
        paragraftThree: "Currently (2023) Cristiano Ronaldo has 5 Champions League which he won in the following years:",
    },

    table : [
        {
            titleOne: "#",
            titleTwo: "Year",
            titleThree: "Team",
            titleFour: "Age",
        },
        {
            tableOne: "1",
            tableTwo: "2008",
            tableThree: "Manchester United",
            tableFour: "23",
        },
        {
            tableOne: "2",
            tableTwo: "2014",
            tableThree: "Real Madrid",
            tableFour: "29",
        },
        {
            tableOne: "3",
            tableTwo: "2016",
            tableThree: "Real Madrid",
            tableFour: "31",
        },
        {
            tableOne: "4",
            tableTwo: "2017",
            tableThree: "Real Madrid",
            tableFour: "32",
        },
        {
            tableOne: "5",
            tableTwo: "2018",
            tableThree: "Real Madrid",
            tableFour: "33",
        }
    ],

    show(){
        const ws = new Worker("storage/wsFourthSection.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(".champions").append(...doc.body.children);

        ws.terminate();
        })
    },

    showMain(){
        document.querySelector(".champions").insertAdjacentHTML("beforeend",
        )
    },
}