<template>
    <div
      class="header"
      :style="getHeaderStyle"
      style="background: linear-gradient(to bottom, #121a16, transparent);"
    >
      <div id="logo" class="pr-4">
        <router-link to="/home">
          <div class="flex flex-row align-items-center">
            <img src="../../tree.svg" class="logo" />
            <p
              style="font-family: Caveat"
              class="lg:text-5xl md:text-3xl sm:text-2xl font-light your-print"
            >
              YOURPRINT
            </p>
          </div>
        </router-link>
      </div>
      <div class="navv">
        <div
          id="navbar"
          class="flex flex-row"
          :class="getNavbarClass"
        >
          <ul id="navigation">
            <li>
              <router-link
                class="lg:text-3xl md:text-xl sm:text-md"
                to="/home"
              >
                Startseite
              </router-link>
            </li>
            <li>
              <router-link
                class="lg:text-3xl md:text-xl sm:text-md"
                to="/info"
              >
                Info
              </router-link>
            </li>
            <li>
              <router-link
                class="lg:text-3xl md:text-xl sm:text-md"
                to="/table"
              >
                CO-2 Tabelle
              </router-link>
            </li>
            <li>
              <router-link
                class="lg:text-3xl md:text-xl sm:text-md"
                to="/comingsoon"
              >
                Kontakt
              </router-link>
            </li>
          </ul>
        </div>
        <div class="bx bx-menu" tabindex="1" id="menu-icon"></div>
      </div>
    </div>
    <router-view />
  </template>
  
  <script setup>
  document.addEventListener("DOMContentLoaded", function () {
    const rtlLangs = [
      "ar",
      "ar-AE",
      "ar-SA",
      "ar-EG",
      "he",
      "ur",
      "ps",
      "ku",
    ];
  
    const lang = document.documentElement.lang;
    const isRtl = rtlLangs.includes(lang);
  
    if (isRtl) {
      var header = document.querySelector(".header");
      header.style.flexDirection = "row-reverse";
      var nav = document.querySelector(".navv");
      nav.style.marginRight = "auto";
      nav.style.marginLeft = "0";
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('#menu-icon');
  var navlist = document.querySelector('#navigation');

  menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
  });
});

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

ul{
padding: 0;
}

.header {
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
padding: 45px;
width: 100%;
}

a {
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: white;
font-size: large;
font-weight: 100;
text-decoration: none;
text-transform: uppercase;
}

a.active, a:hover {
    color: rgb(182, 194, 175);
}

.logo {
width: 3rem;
height: 3rem
}

.your-print {
letter-spacing: 5px;
}

#navigation {
display: flex;
flex-direction: row;
list-style: none;
gap: 30px;
align-items: center;
color: white;
z-index: 100;
}


#menu-icon {
    font-size: 30px;
    display: none;
}

@media(max-width: 795px){
    .logo{
        width: 2rem;
        height: 2rem;
    }

    #menu-icon {
        display: block;
    }

    #navigation {
        position: absolute;
        top: -800px;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        background: #8b806f;
        transition: all .50s ease;
        text-align: left;
        z-index: 100;
        font-size: 20px;
    }

    #navigation a {
        padding: 10px;
        margin: 10px;
        display: block;
        border-bottom: solid 1px white;
    }

    #navigation.open {
    top: 100%;
  }
}

 </style>