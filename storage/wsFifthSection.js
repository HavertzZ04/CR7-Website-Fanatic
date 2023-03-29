let wsFifthSection = {
    dataList(e){
        return`
        <h2>${e.title}</h2>
        <p>${e.paragraftOne}</p>
        <p>${e.paragraftTwo}</p>
        <div class="twitter">
          <blockquote class="twitter-tweet"><p lang="en" dir="ltr">🇵🇹 Portugal with Cristiano Ronaldo:<br><br>🥇 2016 Euro Champions<br>🥇 2019 Nations League Champions<br>🥈 2004 Euro Runners-up<br>🥉 2017 Confederations Cup 3rd Place<br>🏅 2006 World Cup 4th place<br>🏅 2012 Euro Semi-finalists<br><br>Pure greatness ✨🐐 <a href="https://t.co/KUh4iCUvUA">pic.twitter.com/KUh4iCUvUA</a></p>&mdash; UEFA Cristiano League (@UCR7L) <a href="https://twitter.com/UCR7L/status/1606293870685212672?ref_src=twsrc%5Etfw">December 23, 2022</a></blockquote>
        </div>
        `
    }
};

self.addEventListener("message", (e)=>{
    postMessage(wsFifthSection[`${e.data.module}`](e.data.data));
})