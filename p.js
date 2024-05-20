var t1=gsap.timeline({
    repeat:-1
});


t1
.to(".imgcontaiber",{
    width:"100%",
    ease:Expo.easeInOut,
    stagger:2
},'a')
.to(".imgcontaiber",{
    opacity:0,
    ease:Expo.easeInOut,
    stagger:2,
    delay:2
},'a')
.to(".text h1",{
    top:0,
    ease:Expo.easeInOut,
    stagger:2
},'a')
.to(".text h1",{
    top:"-100%",
    ease:Expo.easeInOut,
    stagger:2,
    delay:2
},'a')

