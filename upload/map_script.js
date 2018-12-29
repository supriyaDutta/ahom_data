

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vwcml5YWR1dHRhIiwiYSI6ImNqbGYwZmRmbDBwZ2MzcG10MzMzdGg5YmoifQ.ZNvHvzDM6ojY36bVdqVorQ';
const map_adm = new mapboxgl.Map({
container: 'map_adm',
style: 'mapbox://styles/supriyadutta/cjpv70syn006m2rofxbvjxfep',
// boxZoom:true,
scrollZoom:false,
center: [91.551411, 25.599464],
zoom: 6,
maxZoom:7,
minZoom:5.6,
});
map_adm.addControl(new mapboxgl.NavigationControl());








// console.log(layer.source.data.geometry.coordinates);


map_adm.on('load', function () {

  map_adm.addLayer(layer1);
  map_adm.addLayer(layer2);
  map_adm.addLayer(layer3);
  map_adm.addLayer(layer4);
  map_adm.addLayer(layer5);
  map_adm.addLayer(layer6);
  map_adm.addLayer(layer7);
  map_adm.addLayer(layer8);
  map_adm.addLayer(layer9);
  map_adm.addLayer(layer10);
  map_adm.addLayer(layer11);
  mapTransition_adm(1);
});


function mapTransition_adm(index)
{
// var index=8;
for(var i=1;i<=11;i++)
{

  map_adm.setPaintProperty("maine"+i,"fill-opacity",0);
}
map_adm.setPaintProperty("maine"+index,"fill-opacity",0.5);


}
