let wsFooter = {
    dataList(e){
        return`
        <p>${e.paragraft}<a
        href="https://github.com/HavertzZ04">HavertzZ</a>
        </p>
        <p>
            <a href="#">${e.top}</a>
        </p>
        `
    }
};

self.addEventListener("message", (e)=>{
    postMessage(wsFooter[`${e.data.module}`](e.data.data));
})