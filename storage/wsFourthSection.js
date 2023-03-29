let wsFourthSection = {
    dataList(e){
        return`
        <h2>${e.title}</h2>
        <p>${e.paragraftOne}</p>
        <p>${e.paragraftTwo}</p>
        <img src="${e.image}" class="col-md-12 img-fluid" alt="" id="cr7-ball">
        <p>${e.paragraftThree}</p>
        `
    }
};

self.addEventListener("message", (e)=>{
    postMessage(wsFourthSection[`${e.data.module}`](e.data.data));
})
