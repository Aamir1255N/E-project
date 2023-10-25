var tl = gsap.timeline()

tl.from(".navbar", {
  y: -30,
  opacity: 0,
  duration: 1,
})

tl.from(".Header-caption h1,.Header-caption p,.Header-caption .btn", {
  y:90,
  duration: 1,
  delay: 0.4,
  opacity: 0,
  stagger: 0.3
})
gsap.from("#ac", {
  y:90,
  duration: 1,
  delay:0.3,
  opacity: 0,
  stagger:0.2,
  scrollTrigger: {
    trigger: "#ac",
    scroller: "body"
  }
})
gsap.from(".page1-img", {
  x: 100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1 #img1",
    scroller: "body"
  }
})
gsap.from("#page1 .page1-contant", {
  x: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1 .page1-contant",
    scroller: "body"
  }
})
gsap.from(".heading", {
  y: 90,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body"
  }
})
gsap.from(".box", {
  y: 80,
  duration: 1,
  delay: 0.2,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".box",
    scroller: "body"
  }
})
gsap.from("#page2,#page2 div h1,#page2 div p,div .btn", {
  y: 80,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body"
  }
})
gsap.from("#page4 h1,.card-container",{
  y:80,
  duration:1,
  opacity:0,
  delay:0.3,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"body"
  }
})
gsap.from(".footer",{
  y:100,
  duration:1,
  delay:0.8,
  opacity:0,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body"
  }
})

