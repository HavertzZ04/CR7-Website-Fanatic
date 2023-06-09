import config from "../storage/config.js";
export default {
    

    showAside() {
        config.dataMyAside();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
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
