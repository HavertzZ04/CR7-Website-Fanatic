let wsMyBanner = {
    dataList(e){
        return`
        <h1 class="display-4 ">${e.title}</h1>
        <p class="lead my-3">${e.description}</p>
        <p class="lead mb-0"><a href="https://en.wikipedia.org/wiki/Cristiano_Ronaldo" target="_blank" class="text-white fw-bold">${e.link}</a></p>
        `
    }
};

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
})
