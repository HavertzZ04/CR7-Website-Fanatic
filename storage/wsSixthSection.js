let wsSixthSection = {
    dataList(e){
        return`
        <h2>${e.title}</h2>
        <p class="blog-post-meta">${this.date}<a href="https://github.com/HavertzZ04">${e.person}</a></p>
        <p>${e.paragraftOne}</p>
        <blockquote>
          <p>${e.paragraftTwo}</p>
        </blockquote>
        <img src="${e.image}" class="col-md-12 img-fluid" id="alN" alt="" id="cr7-asia">
        <p>${e.paragraftThree}</p>
        `
    }
};

self.addEventListener("message", (e)=>{
    postMessage(wsSixthSection[`${e.data.module}`](e.data.data));
})