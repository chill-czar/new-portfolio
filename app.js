// /$(window).on("load",function(){
//     $(".loader-container").fadeOut("slow")
// });

var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display = "none"
    // setTimeout(()=>{
    // loader.style.display = "none"
    // },2000) ;
})


// const cursorDot = document.querySelector(".cursor")



// window.addEventListener("mousemove",(e)=>{
//     const posX= e.clientX
//     const posY= e.clientY
//     cursorDot.style.left=`${posX}px`;
//     cursorDot.style.top=`${posY}px`;
// })



const cursorDot = document.querySelector("[data-cursor]")

window.addEventListener("mousemove",function(e){
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left=`${posX-15}px`;
    cursorDot.style.top=`${posY-15}px`;
})


window.addEventListener("mousedown", () => {
    cursorDot.style.transform = "scale(0.5)";
    // cursorDot.style.backgroundColor="rgba(255,0,0,0.7)"
});

// Reset the cursor after the click is released
window.addEventListener("mouseup", () => {
    cursorDot.style.transform = "scale(1)";
    // cursorDot.style.backgroundColor="rgba(60,60,60,0.07)"
});


