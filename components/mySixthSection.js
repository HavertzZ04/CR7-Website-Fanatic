export default {
  datas : {
    title: "Actual Club",
    date: "March 24, 2023 by ",
    person: "HavertzZ",
    paragraftOne: "Cristiano Ronaldo has a history and career as a footballer that to this day, even at almost 40 years of age, still makes him <strong>one of the most valuable players in the world.</strong> Of course, it goes without saying that his value is not the same as when he was younger and had more energy and assertiveness on the court, but in any case, not all athletes are still in demand after so many years in the sport, much less are they still sought after. by teams to be part of their leagues.",
    paragraftTwo: "Initially, <strong>the arrival of Cristiano Ronaldo to Al-Nassr</strong> raised many doubts about how remarkable his participation would be, but in a recent match against Damac, the player became the center of attention and left his fans happy with the results. And it is that CR7 scored three goals in 45 minutes and helped the Saudi league to recover its leadership, which was surely the <strong>dream of Prince Faisal Bin Turki</strong>, owner of the team, which motivated the purchase of the player in the first place, as part of a strategy to fill the team with experienced players and to increase the fame and reputation of his team.",
    image: "img/cr7-asia.jpg",
    paragraftThree: "Whatever his motivation and the strategies that accompany him, there is no doubt that Cristiano Ronaldo is <strong>fulfilling the expectations that have been placed on him</strong> and that his game feels much more valuable now than in recent games. And although there are still many games to play, the Portuguese footballer seems to have started this new stage of his career on the right foot.",
  },


  show(){
    const ws = new Worker("storage/wsSixthSection.js", {type: "module"});

    ws.postMessage({module: "dataList", data: this.datas});
    ws.addEventListener("message", (e)=> {
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(".alNassr").append(...doc.body.children);

    ws.terminate();
    })
  }
}