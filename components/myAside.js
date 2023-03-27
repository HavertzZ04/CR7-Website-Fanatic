export default {
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

    

    showAside() {
        const data = this.nav.map((val, id) => {
            return (
                (val.link)
                ? this.list(val)
                : this.cards(val)
            );
        });
        document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""));
    },
    cards(p1) {
        return `
        <div class="p-4 mb-3 bg-light rounded">
            <h4>${p1.title}</h4>
            <p class="mb-0">${p1.paragraph}</p>
        </div>
        `;
    },
    list(p1) {
        return `
        <div class="p-4">
            <h4 class="">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
                ${p1.link.map((val, id) =>`<li><a href="${val.href}" target="blank">${val.name}</a></li>`).join("")}
            </ol>
        </div>
        `;
        
    },
};
