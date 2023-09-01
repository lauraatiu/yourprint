<template>
  <video src="../assets/media/secondvideo-yp.mp4" autoplay muted loop></video>
  <div class="start-text flex flex-column justify-content-center align-items-center w-full h-screen px-4">
    <p class="uppercase lg:text-4xl md:text-2xl sm:text-lg text-center" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif'; letter-spacing: 7px; font-weight: 600;">Klimawandel</p>
    <h1 class="lg:text-7xl md:text-5xl sm:text-4xl pt-5 font-medium text-center" style="color: #ffffff; font-family: 'Caveat'; letter-spacing: 7px;">Willkommen bei Yourprint</h1>
    <p class="lg:text-xl md:text-lg sm:text-sm font-medium flex justify-content-center pt-2 line-height-3 text-center descr" style="letter-spacing: 2px; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';">Wir, bei Yourprint, schaffen Transparenz und informieren über den Klimawandel und dessen Folgen, die uns alle betreffen. Als Non-Profit-Organisation möchten wir eine Plattform für Naturschutz bieten und über aktuelle Projekte berichten. Danke, dass du einen Teil dazu beitragen möchtest!</p>
    <Button class="mt-4" size="small" style="background-color: transparent; color: white; border: 1px solid white;" icon="pi pi-arrow-right" label="CO-2 Tabelle" @click="goToTable"/>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'Home',
  components: {
    Button,
  },
  methods: {
    goToTable() {
      this.$router.push("/table");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.descr {
  padding-right: 200px;
  padding-left: 200px;
}

video {
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(0.6);
}

@media(max-width: 1200px) {
  .descr {
    padding-left: 100px;
    padding-right: 100px;
  }
}

@media(max-width: 900px) {
  .descr {
    padding-left: 50px;
    padding-right: 50px;
  }
}

@media(max-width: 600px) {
  .descr {
    padding-left: 0px;
    padding-right: 0px;
  }
}

</style>