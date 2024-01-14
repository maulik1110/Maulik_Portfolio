// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });


var icon =  document.getElementById("icon");

document.querySelector(".end-video button").addEventListener("mouseover",function(){
    gsap.to(".end-video video",{
        opacity: 1,
        duration: 1.5,
        ease: Power4
    })
})

document.querySelector(".end-video button").addEventListener("mouseleave",function(){
    gsap.to(".end-video video",{
        opacity: 0,
        duration: 1.5,
        ease: Power4
    })
})


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
gsap.from(".nav h3, .nav a,.icons",{
    stagger: 0.1,
    opacity: 0,
    y: -30,
    duration: .5,
})

gsap.from(".page1-main h1",{
    stagger: 0.1,
    opacity: 0,
    y: -60,
    duration: 3
})

gsap.from(".box video",{
    // stagger: 0.2,
    opacity: 0,
    y: -30,
    duration: 4
})

var mouse = document.querySelector(".mouse")
var page1 = document.querySelector(".page1")

page1.addEventListener("mousemove",function(d){
    // console.log(d.x);
    mouse.style.left = d.x+"px";
    mouse.style.top = d.y+"px";
})

document.querySelector("#elem1").addEventListener("mousemove",function(dets){
    document.querySelector("#elem1 img").style.scale = 1;
    document.querySelector("#elem1 img").style.opacity = 1;
    document.querySelector("#elem1 img").style.left = (dets.x - 160) + "px";
    document.querySelector("#elem1 img").style.top = (dets.y - 250) + "px";
})

document.querySelector("#elem1").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem1 img").style.scale = 0;
    document.querySelector("#elem1 img").style.opacity = 0;
})

document.querySelector("#elem2").addEventListener("mousemove",function(dets){
    document.querySelector("#elem2 img").style.scale = 1;
    document.querySelector("#elem2 img").style.opacity = 1;
    document.querySelector("#elem2 img").style.left = (dets.x - 500) + "px";
    document.querySelector("#elem2 img").style.top = (dets.y - 250) + "px";
})

document.querySelector("#elem2").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem2 img").style.scale = 0;
    document.querySelector("#elem2 img").style.opacity = 0;
})
document.querySelector("#elem3").addEventListener("mousemove",function(dets){
    document.querySelector("#elem3 img").style.scale = 1;
    document.querySelector("#elem3 img").style.opacity = 1;
    document.querySelector("#elem3 img").style.left = (dets.x - 800) + "px";
    document.querySelector("#elem3 img").style.top = (dets.y - 250) + "px";
})

document.querySelector("#elem3").addEventListener("mouseleave",function(dets){
    document.querySelector("#elem3 img").style.scale = 0;
    document.querySelector("#elem3 img").style.opacity = 0;
})
