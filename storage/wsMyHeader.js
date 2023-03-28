export let wsMyHeader = {
    listTeams(p1){
        let template = "";
        p1.forEach((val, id) => {
            template += `<a class="p-2 link-secondary" href="${val.href}" target="blank">${val.name}</a>`
        });
        return template
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data))
})