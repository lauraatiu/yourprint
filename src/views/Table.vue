<template>
  <section id="table-content">
    <div class="table-img" alt="">
        <img src="../assets/media/fire.jpg" alt="Waldbrand">
    </div>
    <div class="table-text">
        <h2  style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;" class="table-class uppercase font-light lg:text-7xl md:text-5xl sm:text-xl">Über die Emissionstablle</h2>
        <p class="subheading font-light" style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Wenn du weiter runter scrollst, findest du eine Tabelle, die dir Auskunft über Länder mit deren Emission im globalen Kontext und deren Emission pro Kopf gibt. Zusätzlich wird pro Land das Unternehmen aufgelistet, dass die größte Emission aufweist. Du kannst die Tabelle nach Land und Unternehmen sortierten und über das Suchfeld nach Daten filtern.<i> Manchmal musst du die Seite noch einmal aktualisieren, bevor du diese Funktionen nutzen kannst. Viel Spaß!</i></p>
    </div> 
  </section>
  <div class="start-text flex flex-column justify-content-center align-items-center w-full h-screen px-4">
    <main class="table">
      <section class="table__header">
        <h1 class="uppercase font-medium">Globale CO2 Tabelle</h1>
        <div class="input-group">
          <input
            type="search"
            placeholder="Search Data..."
            @input="handleInput"
            v-model="searchValue"
            :maxlength="maxInputLength"
          />
        </div>
      </section>
      <section class="table__body">
        <table>
            <thead>
                <tr>
                    <th> Land <span class="icon-arrow">&UpArrow;</span></th>
                    <th> Anteil an globaler Emission</th>
                    <th> Emission pro Kopf</th>
                    <th> Unternehmen <span class="icon-arrow">&UpArrow;</span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>China</td>
                  <td>12%</td>
                  <td>2 Tonnen</td>
                  <td>Axana Inc.</td>
                </tr>
                <tr>
                  <td>USA</td>
                  <td>15%</td>
                  <td>4 Tonnen</td>
                  <td>EcoCorp</td>
                </tr>
                <tr>
                  <td>Indien</td>
                  <td>7%</td>
                  <td>1.5 Tonnen</td>
                  <td>GreenEarth Inc.</td>
                </tr>
                <tr>
                  <td>Russland</td>
                  <td>8%</td>
                  <td>3 Tonnen</td>
                  <td>PetroEco</td>
                </tr>
                <tr>
                  <td>Brasilien</td>
                  <td>4%</td>
                  <td>2.5 Tonnen</td>
                  <td>TropiCO2</td>
                </tr>
                <tr>
                  <td>Japan</td>
                  <td>5%</td>
                  <td>4.8 Tonnen</td>
                  <td>TechEco</td>
                </tr>
                <tr>
                  <td>Deutschland</td>
                  <td>6%</td>
                  <td>8 Tonnen</td>
                  <td>GreenWays</td>
                </tr>
                <tr>
                  <td>Südafrika</td>
                  <td>3%</td>
                  <td>2.2 Tonnen</td>
                  <td>EcoLife</td>
                </tr>
                <tr>
                  <td>Australien</td>
                  <td>2%</td>
                  <td>15 Tonnen</td>
                  <td>NatureServe</td>
                </tr>
                <tr>
                  <td>Kanada</td>
                  <td>4%</td>
                  <td>10 Tonnen</td>
                  <td>EnviroTech</td>
                </tr>
                
            </tbody>
        </table>
        </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const searchValue = ref('');
const maxInputLength = ref(25);

const handleInput = (event) => {
  searchValue.value = event.target.value.replace(/[^a-zA-Z0-9\s]/g, '');
  searchTable();
};

const searchTable = () => {
  const search_data = searchValue.value.toLowerCase();
  const table_rows = document.querySelectorAll('tbody tr');

  table_rows.forEach((row, i) => {
    const table_data = row.textContent.toLowerCase();

    row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
    row.style.setProperty('--delay', i / 25 + 's');
  });
};

onMounted(() => {
  const table_rows = document.querySelectorAll('tbody tr');
  const table_headings = document.querySelectorAll('thead th');

  table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.addEventListener('click', () => {
      table_headings.forEach(h => h.classList.remove('active'));
      head.classList.add('active');

      document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
      table_rows.forEach(row => {
        row.querySelectorAll('td')[i].classList.add('active');
      });

      head.classList.toggle('asc', sort_asc);
      sort_asc = !sort_asc;

      sortTable(i, sort_asc);
    });
  });

  function sortTable(column, sort_asc) {
    const sortedRows = [...table_rows].sort((a, b) => {
      const first_row = a.querySelectorAll('td')[column].textContent.toLowerCase();
      const second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

      return sort_asc ? (first_row < second_row ? -1 : 1) : (first_row < second_row ? 1 : -1);
    });

    sortedRows.forEach(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
  }
});
</script>


  
<style scoped>

* {
    margin: 0;
    padding: 0;
    font-weight: 100;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;;
}

#table-content {
    padding: 100px 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    flex-wrap: wrap;

}
.table-text {
    width: 700px;
    max-width: 90%;
}
.table-class {
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
.table-img{
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

.table-img img{
    height: 100%;
}

h1 {
  font-size: 30px;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
}

main.table {
    width: 82vw;
    height: 65vh;
    background-color: #161616;
    border: solid 1px white;
}

.table__header {
    width: 100%;
    height: 10%;
    background-color: #121212;
    padding: .8rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.table__header .input-group {
    width: 35%;
    height: 100%;
    background-color: rgb(84, 101, 72);
    padding: 0 .8rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .2s;
}

.table__header .input-group:hover {
    width: 45%;
    background-color: rgb(84, 101, 72);
    box-shadow: 0 .1rem .4rem #0002;
}

.table__header .input-group input {
    width: 100%;
    padding: 0 .5rem 0 .3rem;
    background-color: transparent;
    border: none;
    font-weight: 100;
    text-transform: uppercase;
    outline: none;
}

.table__body {
    width: 95%;
    max-height: calc(89% - 1.6rem);
    background-color: #161616;
    margin: .8rem auto;
    border-radius: .6rem;
    overflow: auto;
    overflow: overlay;
}

.table__body::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: rgb(84, 101, 72);
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
    visibility: visible;
}

table {
    width: 100%;
}

table, th, td {
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
}

thead th {
    position: sticky;
    top: 0;
    left: 0;
    font-weight: 500;
    color: rgb(182, 194, 175);
    background-color: #161616;
    cursor: pointer;
    text-transform: capitalize;
}

tbody tr {
    --delay: .1s;
    transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
    opacity: 0;
    transform: translateX(100%);
}

tbody tr:hover {
    background-color: rgba(37, 47, 33, 0.4) !important;
}

tbody tr td {
    transition: .2s ease-in-out;
}

tbody tr.hide td {
    padding: 0;
    font: 0 / 0 sans-serif;
    transition: .2s ease-in-out .5s;
}


@media (max-width: 1000px) {

h1 {
  font-size: 20px;
}

td:not(:first-of-type) {
        min-width: 12.1rem;
    }
}

thead th span.icon-arrow {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    border: 1.4px solid transparent;
    text-align: center;
    font-size: 1rem;
    margin-left: .5rem;
    transition: .2s ease-in-out;
}

thead th:hover span.icon-arrow{
    border: 1.4px solid #ffffff;
}

thead th:hover {
    color: #ffffff;
}

thead th.active span.icon-arrow{
    background-color: #161616;
    color: #fff;
}

thead th.asc span.icon-arrow{
    transform: rotate(180deg);
}

thead th.active,tbody td.active {
    color: #ffffff;
}

.export__file {
    position: relative;
}

@media (max-width: 600px) {

h1 {
  font-size: 15px;
}
}

.input-group {
  font-size: 7px;
}

</style>
  