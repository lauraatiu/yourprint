<template>
    <section id="about-content">
      <div class="about-text">
          <h1  style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="about uppercase font-light lg:text-7xl md:text-5xl sm:text-xl">Über</h1>
          <p style="letter-spacing: 2px; font-family: Caveat;" class="lg:text-8xl md:text-5xk sm:text-3xl font-light">YOURPRINT</p>
          <p class="subheading font-light" style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">"Yourprint" ist eine  Non-Profit-Organisation, die sich mit leidenschaftlichem Engagement dem Umweltschutz und der Förderung von Nachhaltigkeit verschrieben hat; durch eine breite Palette innovativer Projekte, kreative Bildungsinitiativen und bedeutsame Partnerschaften strebt die Organisation danach, das Bewusstsein für Umweltfragen zu erhöhen, Menschen zu inspirieren, umweltfreundliche Entscheidungen zu treffen, und eine positive Veränderung in der Welt zu bewirken.</p>
        </div>
      <div class="about-img">
          <img src="../assets/media/climate.jpg" alt="Plakat mit der Aufschrift 'Climate Justice Now'">
      </div> 
    </section>

    <section id="work">
      <div class="work-title">
          <h2 class="font-light">Internationale<br>Zusammenarbeit</h2>
      </div>

      <div class="imagetext-wrapper">
          <img class="firstimg" src="../assets/media/trees.jpg">
          <h3 class="allworklinks" href="#">Nachhaltige Forstwirtschaft</h3> 
      </div>

      <div class="workcontainer1">
          <img id="a" class="workmedia" src="../assets/media/green1.jpg" alt="Grünes Feld">
          <div id="b" class="blankspace"></div>
          <img id="c" class="workmedia" src="../assets/media/tree1.jpg" alt="Grüner Wald">
          <h3 id="d" class="allworklinks" href="#">Ackerbau</h3>
          <div id="e" class="blankspace"></div>
          <h3 id="f" class="allworklinks" href="#">Baumgesundheit</h3>
      </div>

      <div class="workcontainer2">
          <img id="g" class="workmedia" src="../assets/media/emission1.jpg" alt="Industriepark">
          <div id="h" class="blankspace"></div>
          <img id="i" class="workmedia" src="../assets/media/plastic1.jpg" alt="Plastikmüll">
          <h3 id="j" class="allworklinks" href="#">Emissionskontrollen</h3>
          <div id="k" class="blankspace"></div>
          <h3 id="l" class="allworklinks" href="#">Strand Clean-Up</h3>
      </div>

      <div class="workcontainer3">
          <img class="workmedia" src="../assets/media/plastic2.jpg" alt="Frau steht in Plastikmüll">
          <h3 class="allworklinks" href="#">hilf uns</h3>
      </div>
      <div class="space pb-8">

      </div>
    </section>
</template>

<script>
export default {
  name: 'Info'
};
</script>

<style scoped>
.logo {
width: 3rem;
height: 3rem
}

#about-content {
    padding: 100px 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    flex-wrap: wrap-reverse;

}
.about-text {
    width: 700px;
    max-width: 90%;
}
.about {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 100;
    letter-spacing: 2px;
}  
.subheading {
    font-size: 20px;
    padding-top: 20px;
    text-align: justify;
    line-height: 175%;
}
.about-img{
    border-radius: 50%;
    z-index: -1;
    margin-top: 50px;
    height: 600px;
    width: 600px;
    max-height: 70vw;
    max-width: 70vw;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: brightness(0.5)
}

.about-img img{
    height: 100%;
}

#work {
    padding-left: 50px;
    padding-right: 50px;
}
.work-title {
    margin-bottom: -108px;
    text-align: center;
    font-family: 'Caveat';
    font-weight: 100;
    font-size: 80px;
    letter-spacing: 5px;
    overflow: overlay;
    z-index: 1;
}
.imagetext-wrapper {
    display: flex;
    flex-direction: column;
}
.firstimg {
    width: 100%;
    z-index: -1;
    height: 450px;
    object-fit: cover;
    object-position: 50% 10%;
    filter: brightness(0.5)
}

.workcontainer1 {
    display: grid; 
    grid-template-columns: 2fr 1fr 4fr;
    grid-template-rows: 500px 30px;
    padding-top: 50px;
    grid-template-areas: 
        "a b c"
        "d e f";
}
.workcontainer2 {
    display: grid; 
    grid-template-columns: 4fr 1fr 2fr;
    grid-template-rows: 500px 30px;
    padding-top: 50px;
    grid-template-areas: 
        "g h i"
        "j k l";
}
.workcontainer3 {
    display: grid; 
    grid-template-columns: 1fr;
    grid-template-rows: 500px 30px;
    padding-top: 50px;
}
.workmedia {
    height: 500px;
    width: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    z-index: -1;
}
h3.allworklinks {
    padding-top: 10px;
    padding-bottom: 10px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    text-decoration: none;
    font-size: 20px;
    font-weight: 100;
    letter-spacing: 2px; 
}
h3.allworklinks:hover {
  color: rgb(182, 194, 175);
}
#a{
    grid-area: a;
}
#b{
    grid-area: b;
}
#c{
    grid-area: c;
}
#d{
    grid-area: d;
}
#e{
    grid-area: e;
}
#f{
    grid-area: f;
}
#g{
    grid-area: g;
}
#h{
    grid-area: h;
}
#i{
    grid-area: i;
}
#j{
    grid-area: j;
}
#k{
    grid-area: k;
}
#l{
    grid-area: l;
}
@media(max-width:850px) {
    .works-title{
        font-size: 7.5vw;
        margin-bottom: -80px;
    }
    .workcontainer1{
        display: grid; 
        grid-template-columns: 1fr;
        grid-template-rows: 30px 400px 30px 400px 30px;
        grid-template-areas:
            "d"
            "a"
            "b"
            "c"
            "f";
        padding-top: 50px;
    }
    .workcontainer2{
        display: grid; 
        grid-template-columns: 1fr;
        grid-template-rows: 30px 400px 30px 400px 30px;
        grid-template-areas:
            "j"
            "g"
            "h"
            "i"
            "l";
        padding-top: 50px;
    }
    .workcontainer3{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 400px 30px;
    }
    .workmedia{
        height: 400px;
        width: 100%;
    }

    h2 {
      font-size: 80px;
    }
}

@media(max-width:650px) {
    .works-title{
        font-size: 6.5vw;
        margin-bottom: -50px;
    }

    h2 {
      font-size: 60px;
    }
}
@media(max-width:500px) {
    .works-title{
        font-size: 6vw;
        margin-bottom: -40px;
    }
    .about-img img{
        height: 100%;
    }
    h2 {
      font-size: 35px;
    }




    
  }
</style>