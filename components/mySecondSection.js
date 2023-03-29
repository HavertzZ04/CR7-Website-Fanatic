export default {
    datas : {
        subtitleOne: "Biography",
        titleOne: "Early life",
        paragraftOne: "Cristiano Ronaldo dos Santos Aveiro was born on 5 February 1985 in the São Pedro parish of Funchal, the capital of the Portuguese island of Madeira, and grew up in the nearby parish of Santo António. He is the fourth and youngest child of Maria Dolores dos Santos Viveiros da Aveiro, a cook, and José Dinis Aveiro.",
        paragraftTwo: "As a child, Ronaldo played for Andorinha from 1992 to 1995, where his father was the kit man, and later spent two years with Nacional. In 1997, aged 12, he went on a three-day trial with Sporting CP, who signed him for a fee of £1,500. He subsequently moved from Madeira to Alcochete, near Lisbon, to join Sporting's youth academy. By age 14, Ronaldo believed he had the ability to play semi-professionally and agreed with his mother to cease his education to focus entirely on soccer. With a troubled life as a student and living in Lisbon area away from his Madeiran family, he didn't complete schooling beyond the 6th grade. While popular with other students at school, he had been expelled after throwing a chair at his teacher, who he said had 'disrespected' him.",
        titleTwo: "Debut ",
        paragraftFour: "At the age of 17, Ronaldo played his first professional game for the Portuguese Super LeagueIn 2003, for the first time, Manchester United paid such a young player 12 million pounds as a signing amount. After this there has been no looking back.",
    },

    show(){
        const ws = new Worker("storage/wsSecondSection.js", {type: "module"});

        ws.postMessage({module: "dataList", data: this.datas});
        ws.addEventListener("message", (e)=> {
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#texts").append(...doc.body.children);

        ws.terminate();
        })
    }
}
