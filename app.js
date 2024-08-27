// /$(window).on("load",function(){
//     $(".loader-container").fadeOut("slow")
// });

var loader = document.getElementById("preloader");

// function loaderr(){
//     window.addEventListener("load",function(){
//         loader.style.display = "none" ;
//     })
// };

// setTimeout(loaderr(),2000);

window.addEventListener("load",function(){
    loader.style.display = "none" ;
})


//cursor

const cursorDot = document.querySelector("[data-cursor]")

window.addEventListener("mousemove",function(e){
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left=`${posX}px`;
    cursorDot.style.top=`${posY}px`;
})

// window.addEventListener("click",function(){
//     cursorDot.style.backgroundColor = red;
// })
