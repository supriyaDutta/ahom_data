

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Vwcml5YWR1dHRhIiwiYSI6ImNqbGYwZmRmbDBwZ2MzcG10MzMzdGg5YmoifQ.ZNvHvzDM6ojY36bVdqVorQ';
const map_fam = new mapboxgl.Map({
container: 'map_fam',
style: 'mapbox://styles/supriyadutta/cjpv70syn006m2rofxbvjxfep',
// boxZoom:true,
scrollZoom:false,
center: [92.551411, 26.599464],
zoom: 6.5,
maxZoom:8,
minZoom:3.6,
});
map_fam.addControl(new mapboxgl.NavigationControl());








// console.log(layer.source.data.geometry.coordinates);


map_fam.on('load', function () {

  map_fam.addLayer(layer1);
  map_fam.addLayer(layer2);
  map_fam.addLayer(layer3);
  map_fam.addLayer(layer4);
  map_fam.addLayer(layer5);
  map_fam.addLayer(layer6);
  map_fam.addLayer(layer7);
  map_fam.addLayer(layer8);
  map_fam.addLayer(layer9);
  map_fam.addLayer(layer10);
  map_fam.addLayer(layer11);
  mapTransition_fam(1);
});


function mapTransition_fam(index)
{
// var index=8;
for(var i=1;i<=11;i++)
{

  map_fam.setPaintProperty("maine"+i,"fill-opacity",0);
}
map_fam.setPaintProperty("maine"+index,"fill-opacity",0.5);


}
