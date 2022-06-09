let map = L.map('map').setView([19.0000000, -70.6667000], 6);

let marker = L.marker([18.500772, -69.923266]).addTo(map);

let marker2 = L.marker([19.485856264392513, -70.73335172804906]).addTo(map);

let marker3 = L.marker([18.431124578957327, -69.97286231577688]).addTo(map);

let marker4 = L.marker([18.50254440121251, -69.8942483665183]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords, 13);
})

document.getElementById("pinchable").onclick = muestraMensaje;

function muestraMensaje() {
    alert('1- Dos hombres armados asaltan a dos mujeres y le quitan un celular, 2- Hombre roba en una tienda de celulares, 3- Hombre roba retrovisores a carros, 4- Dos hombres asaltan a un hombre');
  }