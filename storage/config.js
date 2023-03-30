export default{
    dataMyFirstSection(){
        localStorage.setItem("myFirstSection", JSON.stringify({
            datas : [
                {
                    subtitle: "GLASSES",
                    title: "Eyewear",
                    description: "A contemporary collection able to masterfully match any type of look: classic colors for everyday style alternate with more eye-catching tones.",
                    buy: "Buy now",
                    image: "img/cr7-glasses.jpg",
                },
                {
                    subtitle: "SHOES",
                    title: "Footwear",
                    description: "A new footwear line that further enriches the whole collection and interprets the style of the most demanding and eccentric man.",
                    buy: "Buy now",
                    image: "img/cr7-shoes.jpg"
        
                },
                {
                    subtitle: "PERFUME",
                    title: "Fragrance",
                    description: "Discover the brand new casual evening fragrance inspired by Cristiano Ronaldo's bold and optimistic Spirit.",
                    buy: "Buy now",
                    image: "img/cr7-fragrance.jpg"
        
                },
                {
                    subtitle: "SETS",
                    title: "Underwear",
                    description: "Working with quality materials and many years of experience of producing underwear, the CR7 collections delivers a perfect and unique fit.",
                    buy: "Buy now",
                    image: "img/cr7-underwear.jpg"
        
                },
                {
                    subtitle: "HOTELS",
                    title: "Pestana Hotel Group",
                    description: "Cristiano Ronaldo's hotel group around the world offering a VIP service, winning the world's travel award 2022.",
                    buy: "Book now",
                    image: "img/cr7-hotel.jpg"
                },
                {
                    subtitle: "MUSEUM",
                    title: "CR7 Museu",
                    description: "It is dedicated to the trophies of Cristiano Ronaldo. It is located in Ronaldo's birthplace, the city of Funchal on the Portuguese island of Madeira.",
                    buy: "Get tickets now",
                    image: "img/cr7-museum.jpg",
        
                },
        ],


        }))
    },
    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
            nav: [
                {
                    title: "Fun Fact",
                    paragraph: `With a total of <b>122 goals</b> for Portugal, Cristiano Ronaldo holds the record for <b>the highest international goalscorer</b>  among active male soccer players.`,
                },
                {
                    title: "Player Profile",
                    link: [
                        {
                            name: "Style of Play",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Style_of_play"
                        },
                        {
                            name: "Image",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Image"
                        },
                        {
                            name: "Goal Celebration",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Goal_celebrations"
                        },
                        {
                            name: "Rivalry with Messi",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Rivalry_with_Lionel_Messi"
                        },
                    ]
                },
                {
                    title: "Personal Life",
                    link: [
                        {
                            name: "Family",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Family,_children,_and_relationships"
                        },
                        {
                            name: "Health",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Health"
                        },
                        {
                            name: "Philanthropy",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Philanthropy"
                        },
                        {
                            name: "Legal Issues",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Legal_issues"
                        }
                    ]
                },
                {
                    title: "Career Statistics",
                    link: [
                        {
                            name: "Club",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#Club"
                        },
                        {
                            name: "International",
                            href: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo#International"
                        }
                    ]
                },       
                
            ],
        }))
    },
    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            datas : {
                image: "img/cr7-banner.jpg",
                title: "Cristiano Ronaldo",
                description: "CR7 is a Portuguese professional soccer player. He has won five Ballon d'Or awards and numerous other accolades, and is considered one of the greatest players of all time.",
                link: "Continue reading...",
            },
        }))
    },
    dataMyFifthSection(){
        localStorage.setItem("myFifthSection", JSON.stringify({
            datas :{
                title: "Trophies with Portugal",
                paragraftOne: "Cristiano Ronaldo has won two titles with Portugal: the 2016 Euro Cup and the 2019 UEFA Nations League. The native of the island of Madeira, Funchal specifically, made his debut with the Portuguese team on August 20, 2003.",
                paragraftTwo: "On March 23, 2023 Cristiano Ronaldo is the player with the Most International Caps in History, 197 in total.",
              },
        }))
    },
    dataFooter(){
        localStorage.setItem("footer", JSON.stringify({
            datas : {
                paragraft : "Web page created as a tribute to my idol CR7, with love: ",
                top : "Back to top"
            },
        }))
    },
    dataMyFourthSection(){
        localStorage.setItem("myFourthSection", JSON.stringify({
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
        }))
    },
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
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
            ]
        }))
    },
    dataMySecondSection(){
        localStorage.setItem("mySecondSection", JSON.stringify({
            datas : {
                subtitleOne: "Biography",
                titleOne: "Early life",
                paragraftOne: "Cristiano Ronaldo dos Santos Aveiro was born on 5 February 1985 in the São Pedro parish of Funchal, the capital of the Portuguese island of Madeira, and grew up in the nearby parish of Santo António. He is the fourth and youngest child of Maria Dolores dos Santos Viveiros da Aveiro, a cook, and José Dinis Aveiro.",
                paragraftTwo: "As a child, Ronaldo played for Andorinha from 1992 to 1995, where his father was the kit man, and later spent two years with Nacional. In 1997, aged 12, he went on a three-day trial with Sporting CP, who signed him for a fee of £1,500. He subsequently moved from Madeira to Alcochete, near Lisbon, to join Sporting's youth academy. By age 14, Ronaldo believed he had the ability to play semi-professionally and agreed with his mother to cease his education to focus entirely on soccer. With a troubled life as a student and living in Lisbon area away from his Madeiran family, he didn't complete schooling beyond the 6th grade. While popular with other students at school, he had been expelled after throwing a chair at his teacher, who he said had 'disrespected' him.",
                titleTwo: "Debut ",
                paragraftFour: "At the age of 17, Ronaldo played his first professional game for the Portuguese Super LeagueIn 2003, for the first time, Manchester United paid such a young player 12 million pounds as a signing amount. After this there has been no looking back.",
            },
        }))
    },
    dataMySixthSection(){
        localStorage.getItem("mySixthSection", JSON.stringify({
            datas : {
                title: "Actual Club",
                date: "March 24, 2023 by ",
                person: "HavertzZ",
                paragraftOne: "Cristiano Ronaldo has a history and career as a footballer that to this day, even at almost 40 years of age, still makes him <strong>one of the most valuable players in the world.</strong> Of course, it goes without saying that his value is not the same as when he was younger and had more energy and assertiveness on the court, but in any case, not all athletes are still in demand after so many years in the sport, much less are they still sought after. by teams to be part of their leagues.",
                paragraftTwo: "Initially, <strong>the arrival of Cristiano Ronaldo to Al-Nassr</strong> raised many doubts about how remarkable his participation would be, but in a recent match against Damac, the player became the center of attention and left his fans happy with the results. And it is that CR7 scored three goals in 45 minutes and helped the Saudi league to recover its leadership, which was surely the <strong>dream of Prince Faisal Bin Turki</strong>, owner of the team, which motivated the purchase of the player in the first place, as part of a strategy to fill the team with experienced players and to increase the fame and reputation of his team.",
                image: "img/cr7-asia.jpg",
                paragraftThree: "Whatever his motivation and the strategies that accompany him, there is no doubt that Cristiano Ronaldo is <strong>fulfilling the expectations that have been placed on him</strong> and that his game feels much more valuable now than in recent games. And although there are still many games to play, the Portuguese footballer seems to have started this new stage of his career on the right foot.",
              },
        }))
    },
    dataMyThirdSection(){
        localStorage.getItem("myThirdSection", JSON.stringify({
            datas : {
                title: "Ballon D'or",
                paragraftOne: "CR7 won his first Ballon d'Or in 2008 when he was still playing for Manchester United. He was also voted the club's player of the year that season and helped them to win three successive league titles between 2007 and 2009.",
                paragraftTwo: "Through a remarkable career with Manchester United, Real Madrid, Juventus, Sporting Lisbon and his nation Portugal, Ronaldo has been an ever-present contender and winner of the Ballon d'Or alongside his great rival Lionel Messi.",
                image: "img/cr7-ball.jpg",
                paragraftThree: "Currently (2023) Cristiano Ronaldo has 5 Ballon d'Or which he won in the following years:",
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
        }))
    }


}