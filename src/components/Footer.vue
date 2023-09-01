<template>
  <div class="footer">
    <ul>
        <li><router-link class="lg:text-lg md:text-md footer-item" to="/comingsoon">Impressum</router-link></li>
        <li><router-link class="lg:text-lg md:text-md footer-item" to="/comingsoon">Datenschutz</router-link></li>
        <li><router-link class="lg:text-lg md:text-md footer-item" to="/comingsoon">AGB</router-link></li>
        <li><router-link class="lg:text-lg md:text-md footer-item" to="/comingsoon">Copy Write</router-link></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.footer {
position: fixed;
background: linear-gradient(to top, #121a16, transparent);
bottom: 0;
width: 100%;
color: white;
padding: 30px 0;
text-align: center;
}

a {
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
font-weight: 100;
text-decoration: none;
text-transform: uppercase;
color: white;
}

a:hover {
    color: rgb(182, 194, 175);
}

.footer ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}
.footer li {
    margin: 0 15px;
}

@media(max-width: 500px) {
.footer-item {
  font-size: 12px;
}
}

 </style>