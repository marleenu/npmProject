(()=>{var e={860:e=>{"use strict";e.exports=require("express")}},s={};function r(t){var i=s[t];if(void 0!==i)return i.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,r),n.exports}(()=>{const e=r(860),s=e(),t=process.env.PORT||3e3;s.use(e.static("public")),s.use(e.static("src")),s.set("view engine","ejs"),s.get("/src/scripts.js",((e,s)=>{s.sendFile(__dirname+"scripts.js")})),s.get("/",((e,s)=>{s.render("index")})),s.listen(process.env.PORT||t,(e=>{}))})()})();