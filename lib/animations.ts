import anime from 'animejs';

export const fadeEnter = (targets: string | HTMLElement, delay: number = 0) => {
  anime({
    targets,
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutExpo',
    duration: 800,
    delay
  });
};

export const slideInLeft = (targets: string | HTMLElement) => {
  anime({
    targets,
    translateX: [-100, 0],
    opacity: [0, 1],
    easing: 'easeOutQuad',
    duration: 400
  });
};

export const pulseElement = (targets: string | HTMLElement) => {
  anime({
    targets,
    scale: [1, 1.05, 1],
    easing: 'easeInOutSine',
    duration: 1000,
    loop: true
  });
};
