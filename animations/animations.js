import gsap, {Bounce} from "gsap";

export const heroAnimations = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power1.inOut",
    },
  });

  const greenTile = document.getElementById("green-tile");
  const blueTile = document.getElementById("blue-tile");
  const yellowTile = document.getElementById("yellow-tile");
  const imgTile = document.getElementById("img-tile");

  tl.to(greenTile, { opacity: 1, transform: "none" })
    .to(blueTile, { opacity: 1, transform: "none" })
    .to(yellowTile, { opacity: 1, transform: "none" })
    .to(imgTile, { opacity: 1, transform: "none" })
    .to(".hero__content", {
      opacity: 1,
      transform: "none",
      onComplete: shiftImage,
    })
    .to(".scroll", { delay: 5, opacity: 1 })
    .to('.scroll img', {transform: 'translateY(-20px)', yoyo: true, repeat: -1, yoyoEase: Bounce.easeOut, duration: .75});


  function shiftImage() {
    gsap.to(".img-shift", { scale: 1.1, duration: 15, yoyo: true, repeat: -1 });
  }
};
