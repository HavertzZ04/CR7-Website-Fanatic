export default {
    title: "Trophies with Portugal",
    paragraftOne: "Cristiano Ronaldo has won two titles with Portugal: the 2016 Euro Cup and the 2019 UEFA Nations League. The native of the island of Madeira, Funchal specifically, made his debut with the Portuguese team on August 20, 2003.",
    paragraftTwo: "On March 23, 2023 Cristiano Ronaldo is the player with the Most International Caps in History, 197 in total.",

    showTexts(){
        document.querySelector(".portugal").insertAdjacentHTML("beforeend",
        `
        <h2>${this.title}</h2>
        <p>${this.paragraftOne}</p>
        <p>${this.paragraftTwo}</p>
        <div class="twitter">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">🇵🇹 Portugal with Cristiano Ronaldo:<br><br>🥇 2016 Euro Champions<br>🥇 2019 Nations League Champions<br>🥈 2004 Euro Runners-up<br>🥉 2017 Confederations Cup 3rd Place<br>🏅 2006 World Cup 4th place<br>🏅 2012 Euro Semi-finalists<br><br>Pure greatness ✨🐐 <a href="https://t.co/KUh4iCUvUA">pic.twitter.com/KUh4iCUvUA</a></p>&mdash; UEFA Cristiano League (@UCR7L) <a href="https://twitter.com/UCR7L/status/1606293870685212672?ref_src=twsrc%5Etfw">December 23, 2022</a></blockquote>
        </div>
        `);
    },
}