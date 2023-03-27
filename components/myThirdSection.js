export default {
    title: "Ballon D'or",
    paragraftOne: "CR7 won his first Ballon d'Or in 2008 when he was still playing for Manchester United. He was also voted the club's player of the year that season and helped them to win three successive league titles between 2007 and 2009.",
    paragraftTwo: "Through a remarkable career with Manchester United, Real Madrid, Juventus, Sporting Lisbon and his nation Portugal, Ronaldo has been an ever-present contender and winner of the Ballon d'Or alongside his great rival Lionel Messi.",
    image: "img/cr7-ball.jpg",
    paragraftThree: "Currently (2023) Cristiano Ronaldo has 5 Ballon d'Or which he won in the following years:",

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
            tableTwo: "2013",
            tableThree: "Real Madrid",
            tableFour: "28",
        },
        {
            tableOne: "3",
            tableTwo: "2014",
            tableThree: "Real Madrid",
            tableFour: "29",
        },
        {
            tableOne: "4",
            tableTwo: "2016",
            tableThree: "Real Madrid",
            tableFour: "31",
        },
        {
            tableOne: "5",
            tableTwo: "2017",
            tableThree: "Real Madrid",
            tableFour: "32",
        }
    ],

    showMain(){
        document.querySelector(".golden").insertAdjacentHTML("beforeend",
        `
        <h2>${this.title}</h2>
        <p>${this.paragraftOne}</p>
        <p>${this.paragraftTwo}</p>
        <img src="${this.image}" class="col-md-12 img-fluid" alt="" id="cr7-ball">
        <p>${this.paragraftThree}</p>
        
        ` )
    },
}