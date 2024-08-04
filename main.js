var tl = gsap.timeline({
   repeat:-1
});
tl
.to(".classcontainer ",{
        ease :Expo.easeInOut,
        width: "100%",
        duration: 2,
        stagger :2
 },"x");
tl
.to(".text h1" ,{
    ease:Expo.easeInOut,
    stagger:2,
    top: 0,
 },"x");
tl
.to(".text h1" ,{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top: -100,
 },"x");
 