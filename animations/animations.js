import gsap, {Bounce} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export const heroAnimations = () => {
  let tl = gsap.timeline({
    defaults: {
      duration: 0.4,
      ease: "power1.inOut",
    },
  });

  tl.to('.hero__img', {transform: 'translateY(0)', opacity: 1 })
  .to('.hero__logo', {transform: 'scale(1)'})
  .to('.hero-title', {opacity: 1, transform: 'trasnlateX(0)'})
  .to('.hero-book', {opacity: 1, transform: 'trasnlateX(0)', onComplete: shiftImage})
  .to('.scroll-img', {opacity: 1, delay: 5})
  .to('.scroll-img', {transform: 'translateY(-20px)', yoyo: true, repeat: -1, yoyoEase: Bounce.easeOut, duration: .75});

  function shiftImage() {
    gsap.to(".img-shift", { scale: 1.1, duration: 15, yoyo: true, repeat: -1 });
  }
};

export const scrollAbout = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: '100px 80%',
    }
  });

  tl.to('.about__heading', {opacity: 1, transform: 'translateY(0)', duration: .35})
  .to('.about__content', {opacity: 1, transform: 'translateY(0)', duration: .35})
  .to('.about__img', {opacity: 1, transform: 'translateY(0)', duration: .35})
  
}

export const scrollServices = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services",
      start: '100px 80%',
    }
  });

  tl.to('.services__heading', {opacity: 1, transform: 'translateY(0)', duration: .35})
  .to('.services__content', {opacity: 1, transform: 'translateY(0)', duration: .35})
  .to('.services__img', {opacity: 1, transform: 'translateY(0)', duration: .35})
  
}

export const scrollContact = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: '100px 80%',
    }
  });

  tl.to('.contact__heading', {opacity: 1, transform: 'translateY(0)', duration: .35})
  .to('.contact__content', {opacity: 1, transform: 'translateY(0)', duration: .35})
  .to('.contact__book', {opacity: 1, transform: 'translateY(0)', duration: .35})
  
}