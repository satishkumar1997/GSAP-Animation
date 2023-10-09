const carPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 100, y: -50 },{x: 200, y:-80},{x:700,y:-60},{x: 900, y:-90},{x:-10, y:-10}],
    
};
const sunPathPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 100, y: -50 },{x: 200, y:-80},{x:700,y:-60},{x: 900, y:-90},{x:-10, y:-10}],
    
};

const tween = new TimelineLite();
tween.add(
    TweenLite.to(".sun", 1, {
        bezier: carPath,
        ease: Power1.easeInOut
    })
);
const tweens = new TimelineLite();
tween.add(
    TweenLite.to(".car", 1, {
        bezier: carPath,
        ease: Power1.easeInOut
    })
);
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 5000,
    triggerHook: 0
})
.setTween(tween)
// .addIndicators()
.setPin('.animation')
.addTo(controller);
const sunPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [{ x: 100, y: -50 },{x: 200, y:-80},{x:700,y:-60},{x: 900, y:-90},{x:-10, y:-10}],
    
};






