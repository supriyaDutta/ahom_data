var width=document.getElementById("viz_administration_timeline").clientWidth;
var height=document.getElementById("viz_administration_timeline").clientHeight;
// var width_officers=document.getElementById("administration_officers_info_individual").clientWidth;
// var height_officers=document.getElementById("administration_officers_info_individual").clientHeight;
console.log(height);
console.log(width);
var adm_timeline_padding_x=width/10;
var adm_timeline_padding_y=height/10;




//viz
var svg_administration_timeline=d3.select("#viz_administration_timeline")
          .append("svg")
          .attr("width", "100%")
          .attr("height","100%")
          .attr("preserveAspectRatio","xMidYMid")
          .attr("viewBox", "0 0 " + width + " " + height);

// var svg_administration_officers=d3.select("#administration_officers_info_individual")
//           .append("svg")
//           .attr("width","100%")
//           .attr("height","100%")
//           .attr("preserveAspectRatio","xMidYMid")
//           .attr("viewBox", "0 0 " + width_officers + " " + height_officers);
//
// svg_administration_officers.append("g") //last addition, officers info_rect
//           .append("rect")
//           .attr("x",0)
//           .attr("y",0)
//           .attr("height", height_officers)
//           .attr("width", 0)
//           .attr("id","officers_info")
//           // .attr("opacity",0)
//           ;

var adm_timeline_xScale=d3.scaleLinear()
          .domain([0,8])
          .range([0,width-adm_timeline_padding_x*2]);
var adm_timeline_yScale=d3.scaleLinear()
            .domain([0,6])
            .range([0,height-adm_timeline_padding_y*3]);
var rScale = d3.scaleSqrt() // <--New!
            .domain([0, d3.max(admin_dataset[0].people, function(d) { return d.size; })])
            .range([0, height/50]); // <--New!


//admin_colorscale
var admin_color_rects=["#cbd9e6","#a9bfd6","#86a6c5","#638cb5","#4a739c","#3a5979","#294056"];
var admin_colorScale=d3.scaleOrdinal()
                .domain([6,5,4,3,2,1,0])
                .range(admin_color_rects);

//rects
console.log(admin_dataset[0].levels);

//console.log(levels);
//nsole.log(levels_index);
var adm_back=svg_administration_timeline.selectAll("#viz_administration_timeline")
            .data(admin_dataset[2].levels)
            .enter()
            .append("g")
            .append("rect")
            .attr("id","levels")
            .attr("x",0)
            .attr("y",adm_timeline_yScale(-2))
            .attr("width", adm_timeline_xScale(8)+adm_timeline_xScale(1))
            .attr("height",function(d){
              console.log("rect:"+adm_timeline_yScale(d)+(adm_timeline_padding_y*4)+rScale(10-d));
              // console.log(admin_colorScale(d));
             return adm_timeline_yScale(d)+adm_timeline_padding_y*4+rScale(d);})
            // .attr("opacity",0.05)
            // .attr("stroke","red")
            .attr("fill",function(d){return admin_colorScale(d);})
            .attr("rx",width)
            .attr("ry",height/10)
            .attr("transform","translate("+adm_timeline_padding_x/2+","+adm_timeline_padding_y+")");


// var administration_officers_info_individual=



//circles
console.log(admin_dataset);

var strlenMultiplier=10;

var adm_system=svg_administration_timeline.selectAll("#viz_administration_timeline")
              .data(admin_dataset[2].people)
              .enter()
              .append("g")
              .append("circle")
              .attr("id","officials")
              .attr("cursor","pointer")
              .attr("cx",function(d){
              //  console.log(d.x);

                return adm_timeline_xScale(d.x);
              })
              .attr("cy", function(d){
              //  console.log("level:"+d.levels);
                return adm_timeline_yScale(d.levels);
              })
              .attr("stroke","#f4a029")
              .attr("stroke-width",function(d)
            {
              if(d.levels==0)
              {
                return 0;
              }
              return 1;
            })
              .attr("r",function(d){
                if(d.levels==0)
                {return rScale(9);}
                return rScale(6);
              })
              // .call(function(d){
              //   if(d.officials=="King")
              //   {
              //     console.log("king"+d.officials);
              //   }
              // })
              .attr("fill",function(d){
                if(d.levels==0)
                {
                  return "#f4a029";
                }
                return "#f8e1ba";
              })
              .attr("opacity",function(d){
                return d.size/2.5;
              })

              .attr("transform","translate("+adm_timeline_padding_x/1.05+","+adm_timeline_padding_y*2+")")
              .on("mouseover",function(d)
              {
                svg_administration_timeline.append("rect")
              				.attr("id","admin_hover_rect")
              				.attr("x",adm_timeline_xScale(d.x)+adm_timeline_padding_x/1.25+20)
              				.attr("y",adm_timeline_yScale(d.levels)+adm_timeline_padding_y*2-20)
              				.attr("width",function()
              			{
              				var strlen=(d.officials).length;
                      // if(strlen==4)
                      // strlen=5;
              			//	console.log(strlen);
              			//	if(strlen>10)
              				return strlen*strlenMultiplier;
              			//	else return 11*strlenMultiplier;
              			})
              				.attr("height",30)
              				.attr("fill","white")
              				.attr("stroke-opacity",0.2)
              				.attr("stroke","blue")
              				.attr("rx", 3)
              				.attr("ry",3);




                // console.log(d.description);
                      svg_administration_timeline.append("text")
                      .attr("id","admin_text_hover")
                      .attr("class", "hover_text")
                      .attr("cursor","pointer")
                      .attr("x",adm_timeline_xScale(d.x)+adm_timeline_padding_x/1.25+25)
                      .attr("y",adm_timeline_yScale(d.levels)+adm_timeline_padding_y*2)
                      .text(d.officials);
              })
              .on("mouseout",function()
              {
                svg_administration_timeline.selectAll("#admin_text_hover").remove();
                svg_administration_timeline.selectAll("#admin_hover_rect").remove();
              })
              .on("click", function(d)
            {
              // svg_administration_officers.select("#officers_info")
              //   .text(""+d.officials+"");
              // document.getElementById("invisible_text").style.display="block";

              //.innerHTML=;
              document.getElementById("text_officers").innerHTML=d.description;
              openNav();


              // console.log(d.officials);
            });





  //admin_colorlegends
svg_administration_timeline.append("rect")
  .attr("x",0)
  .attr("y",-adm_timeline_yScale(2))
  .attr("width",width-adm_timeline_padding_x/2)
  .attr("height",adm_timeline_yScale(2)+height/7)
  .attr("transform","translate("+adm_timeline_padding_x/2.5+",-1)")
  .attr("stroke-width",10)
  .attr("fill","white")
;

  var adm_timeline_xScale_legend=d3.scaleLinear()
            .domain([0,6])
            .range([0,width/3]);
  for(var i=0;i<7;i++)
  {
  svg_administration_timeline//.selectAll("#viz_administration")
                .append("g")
                .append("rect")
                .attr("x",adm_timeline_xScale_legend(i))
                .attr("y", 0)
                .attr("width",adm_timeline_xScale_legend(1))
                .attr("height",20)
                .attr("fill",admin_colorScale(i))
                .attr("transform","translate("+(width-adm_timeline_xScale_legend(1)*7-adm_timeline_padding_x)+","+adm_timeline_padding_y/3+")")
                ;
  }

  svg_administration_timeline.append("text")
          .attr("x",adm_timeline_xScale_legend(0))
          .attr("y", 0)
          .attr("transform","translate("+(width-adm_timeline_xScale_legend(1)*7-adm_timeline_padding_x*1.5)+","+adm_timeline_padding_y/1.25+")")
          .text("Higher")
          .attr("class","lezends_small")
          .style("text-anchor","middle");
svg_administration_timeline.append("text")
        .attr("x",adm_timeline_xScale_legend(8))
        .attr("y", 0)
        .attr("transform","translate("+(width-adm_timeline_xScale_legend(1)*7-adm_timeline_padding_x)+","+adm_timeline_padding_y/1.25+")")
        .text("Lower")
        .attr("class","lezends_small")
        .style("text-anchor","middle");
svg_administration_timeline.append("text")
        .attr("x",adm_timeline_xScale_legend(3.5))
        .attr("y", 0)
        .attr("transform","translate("+(width-adm_timeline_xScale_legend(1)*7-adm_timeline_padding_x)+","+adm_timeline_padding_y/5+")")
        .text("Political Hierarchy")
        .attr("class","lezends_small")
        .style("text-anchor","middle");




//xSlider
// var slider = svg_slider.append("g")
//     .attr("class", "slider")
//      .attr("transform", "translate(" + adm_timeline_padding_x/10 + "," + 10 + ")")
//     ;
//
//
//
// slider.append("line")
//   .attr("class", "track")
//   .attr("x1", xSlider.range()[0])
//   .attr("x2", xSlider.range()[1])
//   .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
//   .attr("class", "track-inset")
//   .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
//   .attr("class", "track-overlay")
//   .call(d3.drag()
//       .on("start.interrupt", function() { slider.interrupt(); })
//       .on("start drag", function() { hue(xSlider.invert(d3.event.x)); }));
//
// slider.insert("g", ".track-overlay")
//   .attr("class", "ticks")
//   .attr("transform", "translate(0," + 18 + ")")
//   .selectAll("text")
//   .data(xSlider.ticks(10))
//   .enter().append("text")
//   .attr("x", xSlider)
//   .attr("text-anchor", "middle")
//   .text(function(d) { return d; });
//
// var handle = slider.insert("circle", ".track-overlay")
//   .attr("class", "handle")
//   .attr("r", 9);
//
// $("#viz_administration_timeline").waypoint(function(){
// slider.transition() // Gratuitous intro!
//   .duration(7000)
//   .tween("hue", function() {
//     var i = d3.interpolate(1228, 1826);
//     return function(t) { hue(i(t)); };
//   });
// });
//
//
// function hue(h) {
//   handle.attr("cx", xSlider(h));
//   check(h);
// };


function check(h)
{
  console.log(h);
  var year=year_check(h);
console.log(year);

var levels_index;
switch(year)
{
  case 1751:
  levels_index=0;
  break;
  case 1603:
  levels_index=1;
  break;
  case 1228:
  levels_index=2;
  break;
  case 1332:
  levels_index=3;
  break;
  case 1497:
  levels_index=4;
  break;
  case 1552:
  levels_index=5;
  break;
}

var levels=admin_dataset[levels_index].levels;
console.log(levels);


svg_administration_timeline.selectAll("#levels")
.data(admin_dataset[levels_index].levels)
.transition()
.duration(100)
.ease(d3.easeLinear)
.attr("height",function(d){

return adm_timeline_yScale(d)+adm_timeline_padding_y*4+rScale(10-d);
})

.attr("fill",function(d){return admin_colorScale(d);})
;

    console.log(admin_dataset[levels_index].people);

svg_administration_timeline.selectAll("#officials")
.data(admin_dataset[levels_index].people)
.transition()
.duration(300)
.ease(d3.easeLinear)
.attr("cx",function(d){
console.log(d.officials+": "+d.levels);

return adm_timeline_xScale(d.x);
})
.attr("cy", function(d){

return adm_timeline_yScale(d.levels);
});


    console.log("done");



}



  function year_check(year)
  {
    if(year<=1828)
    {
      if(year<1751)
      {
          if(year<1603)
          {
            if(year<1552)
                {
                    if(year<1497)
                    {
                        if(year<1332)
                        {
                          return 1228;
                        }
                    return 1332;
                    }
                  return 1497;
                }
            return 1552;
          }
        return 1603;
      }
      return 1751;
    }
  }


  function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
    // document.getElementById("mySidenav").style.borderLeft = "3px solid #6b883c";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mySidenav").style.borderLeft = "0px";
    // document.getElementById("main").style.marginLeft= "0";
  }
