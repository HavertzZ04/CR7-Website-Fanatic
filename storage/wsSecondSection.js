let wsSecondSection = {
    dataList(e){
        return`
        <h3 class="pb-4 mb-4  border-bottom">${e.subtitleOne}</h3>
        <h2>${e.titleOne}</h2>
        <p>${e.paragraftOne}</p>
        <p>${e.paragraftTwo}</p>
        <h2>${e.titleTwo}</h2>
        <p>${e.paragraftFour}</p>
        <img src="img/cr7-sporting.jpg"  class="col-md-12 img-fluid" alt="" id="cr7-sporting">
        `
    }
};

self.addEventListener("message", (e)=>{
    postMessage(wsSecondSection[`${e.data.module}`](e.data.data));
})
