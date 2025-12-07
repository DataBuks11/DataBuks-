import { Howl } from 'howler';

const clickSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'], // Short click
  volume: 0.2,
});

const successSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'], // Soft chime
  volume: 0.2,
});

const navigationSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], // Pop
  volume: 0.1,
});

export const playClick = () => clickSound.play();
export const playSuccess = () => successSound.play();
export const playNav = () => navigationSound.play();
