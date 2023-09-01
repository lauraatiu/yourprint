<template>
    <img src="../assets/media/comingsoon.jpg" alt="grüne Wiese" autoplay muted loop>
    <div class="start-text flex flex-column justify-content-center align-items-center w-full h-screen px-4">
      <h1 class="lg:text-7xl md:text-5xl sm:text-4xl pt-5 font-medium text-center" style="color: #ffffff; font-family: 'Caveat'; letter-spacing: 7px;">Coming Soon!</h1>
      <p class="lg:text-xl md:text-lg sm:text-sm font-medium flex justify-content-center pt-2 line-height-3 text-center descr" style="letter-spacing: 2px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';">Wir arbeiten stetig an dem Ausbau und der Verbesserung unserer Webseite. Für diesen Bereich liegen aktuell leider keine Infos vor.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
  
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: brightness(0.6);
  }
  
  
  </style>