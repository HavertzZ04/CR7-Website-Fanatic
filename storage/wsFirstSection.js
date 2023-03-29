let wsFirstSection = {
    dataList(p1){
        let template = "";
        p1.forEach((val, id) => {
            template += `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.subtitle}</strong>
                        <h3 class="mb-0 titleShop">${val.title}</h3>
                        <p class="card-text mb-auto">${val.description}</p>
                        <a href="#" class="stretched-link" target="_blank">${val.buy}</a>
                    </div>
                    <div  class="col-auto d-none d-lg-block">
                        <img src="${val.image}" id="imageShops" class="bd-placeholder-img" width="200" height="250"preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#55595c"/></img>
                    </div>  
                </div>
            </div>`
        });
        return template
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsFirstSection[`${e.data.module}`](e.data.data))
})