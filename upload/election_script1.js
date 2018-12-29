var width=document.getElementById("viz_election").clientWidth;
var height=document.getElementById("viz_election").clientHeight;
console.log(height);
console.log("width:"+width);

var svg_election=d3.select("#viz_election")
          .append("svg")
          .attr("width", "100%")
          .attr("height","100%")
          .attr("preserveAspectRatio","xMidYMid")
          .attr("viewBox", "0 0 " + width + " " + height)
          ;
// var blue_col="#294056";
var orange_col_election="#aa6709";
var green_col_election="#6b883c";
// var body_white="rgb(250,250,250)";


var xwidth=[0];
for(var i=1; i<=fam.length;i++)
{
xwidth.push(width/fam.length*i/1.25);
}
console.log(xwidth);
var yheight=[0];
for(var i=1; i<positions.length;i++)
{
console.log(height);
yheight.push(height*i*20/positions.length);
}
var election_xScale = d3.scaleOrdinal()
                      .domain(fam)
                      .range(xwidth)
                      //.round(true) // <-- Enable rounding
                     //.election_paddingInner(0.05)
                      ;

var election_yScale=d3.scaleBand()
                  .domain(positions)
                  .range(yheight)
                  ;


// var colorScale=d3.scaleOrdinal()
//           .domain(fam)
//           .range(colors);


console.log("done");
var election_padding=width/5;
var rect_election_padding_x=width/fam.length/4;
var rect_election_padding_y=height/positions.length/2;








console.log(fam);
console.log(positions);
console.log(dataset);

var admin_color_rects=["#cbd9e6","#a9bfd6","#86a6c5","#638cb5","#4a739c","#3a5979","#294056"];

svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[0]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",election_yScale(positions[1])-election_yScale(positions[0])+0.5)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[6])
  .attr("opacity",0.7);

svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[1]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*3)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[5])
  .attr("opacity",0.7);

svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[4]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*2)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[4])
  .attr("opacity",0.7);

svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[6]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5))
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[3])
  .attr("opacity",0.7);

svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[7]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*3)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[2])
  .attr("opacity",0.7);

svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[10]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*3)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[1])
  .attr("opacity",0.7);


svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[13]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0]))
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*1)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",admin_color_rects[0])
  .attr("opacity",0.7);

  svg_election//.select("rect")
    .append("g")
    .append("rect")
    // .append("g")
    .attr("x",election_xScale(fam[fam.length-1])+(election_xScale(fam[1])))
    .attr("y",election_yScale(positions[0]))
    .attr("width",25)
    .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*13.7)
    .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
    .attr("fill",admin_color_rects[5])
    .attr("opacity",0.2);
svg_election//.select("rect")
  .append("g")
  .append("rect")
  // .append("g")
  .attr("x",election_xScale(fam[0]))
  .attr("y",election_yScale(positions[14]))
  .attr("width",election_xScale(fam[fam.length-1])+election_xScale(fam[1])-election_xScale(fam[0])+25)
  .attr("height",(election_yScale(positions[1])-election_yScale(positions[0])+0.5)*15.5)
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill","#d4e39c")
  .attr("opacity",0.2);


var rect=svg_election.selectAll("circle")
  .data(dataset)
  .enter()
  .append("g")
  .append("rect")
  .attr("x",function(d)
  {
  // console.log("x:"+d.x+" y:"+(d.y));
  // console.log("y:"+(d.y));
  return election_xScale(d.x);
  })
  .attr("y",function(d)
  {
  // console.log("y:"+(d.y));
  return election_yScale(d.y);
  })
  .attr("height",height/positions.length-rect_election_padding_y/1.5)
  .attr("width",function(d)
  {
  return election_xScale(fam[1])-election_xScale(fam[0]);
  })
  .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
  .attr("fill",function(d)
  {
  return "#f8e1ba";//"#efb95d";
  })
  .attr("stroke","#efb95d")
  .on("mouseover",function(d,i)
  {
    d3.select(this)
      .attr("stroke-width",2)
      .attr("stroke",green_col_election);  //color pay attention

    console.log("inside");
    svg_election.append("rect")
      .attr("id","overlay_vert")
      .attr("x",election_xScale(d.x))
      .attr("y",election_yScale(0))
      .attr("height",function(){
      return election_yScale(d.y);
      })//+height/positions.length-rect_election_padding_y/1.5)
      .attr("width",election_xScale(fam[1])-election_xScale(fam[0]))
      .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
      .attr("stroke",green_col_election)
      .attr("fill","none")
      // .attr("opacity",0.2)
      // .attr("class","overlay")
      ;

      svg_election.append("rect")
        .attr("id","overlay_hori")
        .attr("x",election_xScale(fam[0]))
        .attr("y",election_yScale(d.y))
        .attr("height",election_yScale(positions[1])-election_yScale(positions[0]))
        .attr("width",election_xScale(d.x))
        .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
        // .attr("opacity",0.2)
        .attr("stroke",green_col_election)
        .attr("fill","none") ;
  })
  .on("mouseout",function()
  {
  console.log("outside");
  d3.select(this).attr("stroke","#efb95d")
  ;
  // .attr("stroke",)
  svg_election.selectAll("#overlay_hori").remove();
  svg_election.selectAll("#overlay_vert").remove();
  });












var xAxis = d3.axisTop()
      .scale(election_xScale);


svg_election.append("g")
.attr("transform","translate("+(election_padding/1.5+(width/fam.length/2))+","+election_padding/2+")")
.call(xAxis)
.attr("class","edit axis")
.selectAll("text")
.style("text-anchor", "start")
.attr("transform", function(d) {
          return "rotate(-25)"
          })
;

var yAxis = d3.axisLeft()
.scale(election_yScale)
;

svg_election.append("g")
.attr("transform","translate("+election_padding/1.5+","+(election_padding/2)+")")
.call(yAxis)
.attr("class","edit axis")
;

for(var i=0; i<positions.length; i++)
{
//console.log(fam[0]);
    svg_election.append("g")
    .append("rect")

    .attr("x", election_xScale(fam[0]))
    .attr("y", election_yScale(positions[i]))
    .attr("height",rect_election_padding_y/8)
    .attr("width",election_xScale(fam[fam.length]))
    .attr("fill","#ffffff")
      .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
      .attr("class","grid");
}

svg_election.append("g")
  .append("rect")
  .attr("x", election_xScale(fam[0]))
  .attr("y", election_yScale(positions[positions.length-1])+(election_yScale(positions[1])-election_yScale(positions[0])))
  .attr("height",rect_election_padding_y/8)
  .attr("width",election_xScale(fam[fam.length]))
  .attr("fill","#ffffff")
    .attr("transform","translate("+election_padding/1.5+","+election_padding/2+")")
    .attr("class","grid");


for(var i=0; i<fam.length; i++)
{
//console.log(fam[0]);
 svg_election.append("g")
 .append("rect")

   .attr("x", election_xScale(fam[i]))
   .attr("y", election_yScale(positions[0]))
   .attr("height",election_yScale(positions[positions.length-1])+height/positions.length-rect_election_padding_y/1.5)
   .attr("width",rect_election_padding_x/10)
   .attr("fill","#ffffff")
     .attr("transform","translate("+(election_padding/1.5)+","+election_padding/2+")")
     .attr("class","grid");
}

svg_election.append("g")
.append("rect")

  .attr("x", election_xScale(fam[fam.length-1]))
  .attr("y", election_yScale(positions[0]))
  .attr("height",election_yScale(positions[positions.length-1])+height/positions.length-rect_election_padding_y/1.5)
  .attr("width",rect_election_padding_x/10)
  .attr("fill","#ffffff")
    .attr("transform","translate("+(election_padding/1.5+election_xScale(fam[1]))+","+election_padding/2+")")
    .attr("class","grid");


svg_election.append("text")
.attr("x",width/2)
.attr("y",height-rect_election_padding_y*6)
.text("Families they were elected from")
.attr("class", "lezends")

.style("text-anchor", "middle");

svg_election.append("text")
.attr("x",rect_election_padding_x)
.attr("y",rect_election_padding_y*5)
.text("Officers from the")
.attr("class", "lezends")
.style("font-size",12)
.style("text-anchor","start");

svg_election.append("text")
.attr("x",rect_election_padding_x)
.attr("y",rect_election_padding_y*6)
.text("administration system")
.attr("class", "lezends")
.style("font-size",12)
.style("text-anchor","start");



var stringpol= "M"+(election_xScale(fam[fam.length-1]))+" "+(height/3)+" L "+(election_xScale(fam[fam.length-1]))+" "+rect_election_padding_y;
svg_election.append("g")
          .append("defs").append("path")
          .attr("id", "pol")
          .attr("d", stringpol)
          .attr("transform","translate("+election_padding*1.05+","+election_padding/3+")")
          .attr("class","grid_null");
yAxis_thingpol = svg_election.append("g")
          .attr("id", "thingpol")
          ;

yAxis_thingpol.append("text")
          //.style("font-size", "17px")
          .append("textPath")
          .attr("xlink:href", "#pol")
          .attr("text-anchor", "middle")
          .attr("startOffset","40%")
          .text("Political")


          .attr("class","fonts");

yAxis_thingpol.append("use")
          .attr("xlink:href", "#pol")
          .style("stroke", "none")
          .style("fill", "none");


var stringciv= "M"+(election_xScale(fam[fam.length-1]))+" "+(height-height/6)+" L "+(election_xScale(fam[fam.length-1]))+" "+rect_election_padding_y;
svg_election.append("g")
          .append("defs").append("path")
          .attr("id", "civ")
          .attr("d", stringciv)
          .attr("transform","translate("+election_padding*1.05+","+election_padding/3+")");
yAxis_thingciv = svg_election.append("g")
          .attr("id", "thing")
          ;

yAxis_thingciv.append("text")
          //.style("font-size", "17px")
          .append("textPath")
          .attr("xlink:href", "#civ")
          .attr("text-anchor", "middle")
          .attr("startOffset","40%")
          .text("Civil")

          .attr("class","fonts");

yAxis_thingcil.append("use")
          .attr("xlink:href", "#civ")
          .style("stroke", "none")
          .style("fill", "none");
