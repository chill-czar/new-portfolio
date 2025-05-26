// const counterURL = 'https://api.counterapi.dev/hit/shivamvashist.github.io/Portfolio/views';

// fetch(counterURL)
//   .then(res => res.json())
//   .then(data => {
//     document.getElementById('view-count').innerText = data.value;
//   });


// /$(window).on("load",function(){
//     $(".loader-container").fadeOut("slow")
// });

var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display = "none"
    // setTimeout(()=>{
    // loader.style.display = "none"
    // },1200) ;
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


function scrollToSection(id) {
    console.log(id)

    document.getElementById(`${id.id}`).scrollIntoView({
        behavior:"smooth"
    });
}

// document.querySelectorAll(".particleCanvas").forEach((canvas) => {
//     const ctx = canvas.getContext("2d");
//     let particles = [];
  
//     // Set canvas size based on element size
//     function resizeCanvas() {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     }
  
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);
  
//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.radius = Math.random() * 2 + 0.5;
//         this.speedX = Math.random() * 0.3 - 0.15;
//         this.speedY = Math.random() * 0.3 - 0.15;
//       }
  
//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
  
//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
//       }
  
//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "#2d23c0";
//         ctx.shadowColor = "#2d23c0";
//         ctx.shadowBlur = 8;
//         ctx.fill();
//       }
//     }
  
//     function initParticles(count = 100) {
//       particles = [];
//       for (let i = 0; i < count; i++) {
//         particles.push(new Particle());
//       }
//     }
  
//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });
//       requestAnimationFrame(animate);
//     }
  
//     initParticles(100);
//     animate();
//   });