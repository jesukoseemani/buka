let controller,gridscene,workScene,lineScene

const burger = document.querySelector(".burger");

burger.addEventListener("click", showNav);

function showNav(e){

  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.3, { rotate: "45", y: 6, background: "#fafafa" });
    gsap.to(".line2", 0.3, { rotate: "-45", y: -6, background: "#fafafa"});
    gsap.to(".nav-container", .8, { clipPath: "circle(350rem at 86% 11%)", opacity: 1});
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.3, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.3, { rotate: "0", y: 0, background: "white" });
    gsap.to(".nav-container", .8, { clipPath: "circle(4rem at 86% 11%)", opacity: 0});
    document.body.classList.remove("hide");
  }

e.preventDefault();
};

function slides(){
controller = new ScrollMagic.Controller();

const t1 = gsap.timeline({defaults: {duration: 0.2, ease: "power2.inOut"}});
 t1.fromTo(".description__grid", {opacity:0, y:"50%" }, {opacity:1, y: "0%"});

gridscene = new ScrollMagic.Scene({
  triggerElement: ".description__heading p",
  triggerHook: 0,
  // reverse: false
  
})
.setTween(t1)
// .addIndicators({
//   colorStart: "black",
//   colorTrigger: "black",
//   name: "page",
//   indent: 200})
.addTo(controller);

//ANOTHER ANIMATION

const t2 = gsap.timeline({defaults:{ease: "power2.inOut"}});

t2.fromTo(".works__flex-left",0.5, {opacity:0, y: "100%"}, {opacity:1, y: "0"});

t2.fromTo(".works__flex-right",0.5, {opacity:0, x: "50%"}, {opacity:1, x: "0"}, "-=0.2");

workScene = new ScrollMagic.Scene({
  triggerElement: ".works",
  triggerHook: 0
})
// .addIndicators({
//   colorStart: "black",
//   colorTrigger: "black",
//   name: "page",
//   indent: 200})
.setTween(t2)
.addTo(controller);

//ANOTHER ANIMATION

const t3 = gsap.timeline({defaults: {ease: "power3.out"}});

t3.fromTo(".line",0.1, {background:"#fafafa"}, {background:"#11694c"});

lineScene = new ScrollMagic.Scene({
  triggerElement: ".hero__links",
  triggerHook: 0
})
// .addIndicators({
//   colorStart: "black",
//   colorTrigger: "black",
//   name: "page",
//   indent: 200})
.setTween(t3)
.addTo(controller);

//ANOTHER ANIMATION

const t4 = gsap.timeline({defaults: {ease: "power3.out"}});

t4.fromTo(".line",0.1, {background:"#11694c"}, {background:"black"});

lineScene2= new ScrollMagic.Scene({
  triggerElement: ".bg-video",
  triggerHook: 0
})
// .addIndicators({
//   colorStart: "black",
//   colorTrigger: "black",
//   name: "page",
//   indent: 200})
.setTween(t4)
.addTo(controller);



};
slides();

