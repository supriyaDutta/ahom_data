var width=document.getElementById("viz_depose").clientWidth;
var height=document.getElementById("viz_depose").clientHeight;
//  //console.log(height);
var padding_x=width/20;
var padding_y=height/20;
var interim_col="#86a6c5";
var blue_col="#294056";
var orange_col="#f4a029";
var body_white="rgb(250,250,250)";
var svg_depose=d3.select("#viz_depose")
          .append("svg")
          .attr("width", "100%")
          .attr("height","100%")
          .attr("perserveAspectRatio", "xMinYMid")
          .attr("viewBox", "0 0 " + width + " " + height);
var depose_legend=d3.select("#depose_legend")
        .append("svg")
        .attr("width", "100%")
        .attr("height",100)
        .attr("perserveAspectRatio", "xMinYMid")
        .attr("viewBox", "0 0 " + width + " 100");


var sc_width=width-padding_x*3;
var sc_height=height-padding_y*5;
// var xScale=d3.scaleLinear()
//             .domain([0,50])
//             .range([0,sc_width]);
var kings_rev=kings.reverse();
var yScale=d3.scaleBand()
            .domain(kings_rev)
            .range([0,sc_height]);
var xScale=d3.scaleLinear()
            .domain([1225,1830])
            .range([0,sc_width]);

var rScale=d3.scaleLinear()
          .domain([0,width])
          .range([0,width]);



function make_x_gridlines() {
    return d3.axisBottom(xScale)
              .ticks(10)
    }
function make_y_gridlines() {
    return d3.axisLeft(yScale)
              .ticks(5)
    }

var symbolDiamondGen = d3.symbol()
.type(d3.symbolDiamond)
.size(60)
// .attr("class", "shapeDiamond")
;

svg_depose.append("g")
    .attr("class", "grid")
    .attr("id","x_grids")
    .attr("transform", "translate("+padding_x*2.5+","+(sc_height+padding_y*3)+ ")")
    .call(make_x_gridlines()
    .tickSize(-(height-padding_y*5))
    .tickFormat("")
  );
svg_depose.append("g")
        .attr("class", "grid")
        .attr("id","y_grids")
        .attr("transform", "translate("+padding_x*2.5+","+(padding_y*3)+")")
        .call(make_y_gridlines()
        .tickSize(-(width-padding_x*3))
        .tickFormat("")
      );
var strlenG;
var strlenMultiplier=10;
var interimp1=svg_depose.append("g")
          .append("rect")
          .attr("id","interim1")
          .attr("x",xScale(1376))
          .attr("y",yScale(kings_rev[0]))
          .attr("height",yScale(kings_rev[kings_rev.length-1])+yScale(kings_rev[1])-yScale(kings_rev[0]))
          .attr("width",xScale(1380)-xScale(1376))
          .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
          .attr("fill",interim_col)
          // .attr("opacity",0.5)
          .on("mouseover",function()
        {
          svg_depose.append("rect")
                .attr("id","depose_hover_rect")
                .attr("y",function()
                {


                  //  //console.log("rect");
                  return yScale("Sunyeopha");
                })
                .attr("x",function(){


                  return xScale(1376)+padding_x/10+10;
                })
                .attr("width",function()
              {

                var strlen=20;
              //	 //console.log(strlen);
              //	if(strlen>10)
                return strlen*strlenMultiplier;
              //	else return 11*strlenMultiplier;
              })
                .attr("height",35)
                .attr("fill","white")
                .attr("stroke-opacity",0.2)
                .attr("stroke","#08519c")
                .attr("rx", 3)
                .attr("ry",3)
                .attr("transform","translate("+padding_x*2.5+","+(padding_y*2.25)+")");


        svg_depose.append("text")
                .attr("id","depose_texthover1")
                    .attr("y",function()
                    {

                      return yScale("Sunyeopha");
                    })
                    .attr("x", function()
                    {

                      return xScale(1376)+padding_x/10+20;
                    //  //console.log();
                    // return xScale(d.timeline2)+padding_x/10+10;
                    })
                    .text(function(){
                    //  //console.log("Name:"+name+", Timeline:"+timeline+", Reign:"+duration);
                      return "Interim Period: 1376-1380";
                    })
                    .attr("text-anchor","start")
                    .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
                    .attr("class","fonts hover_text");

        });

var interimp2=svg_depose.append("g")
          .append("rect")
          .attr("id","interim2")
          .attr("x",xScale(1389))
          .attr("y",yScale(kings_rev[0]))
          .attr("height",yScale(kings_rev[kings_rev.length-1])+yScale(kings_rev[1])-yScale(kings_rev[0]))
          .attr("width",xScale(1397)-xScale(1389))
          .attr("fill",interim_col)
          // .attr("opacity",0.5)
          .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
          .on("mouseover",function()
        {
          svg_depose.append("rect")
                .attr("id","depose_hover_rect")
                .attr("y",function()
                {


                  //  //console.log("rect");
                  return yScale("Sunyeopha");
                })
                .attr("x",function(){


                  return xScale(1397)+padding_x/10+10;
                })
                .attr("width",function()
              {

                var strlen=20;
              //	 //console.log(strlen);
              //	if(strlen>10)
                return strlen*strlenMultiplier;
              //	else return 11*strlenMultiplier;
              })
                .attr("height",35)
                .attr("fill","white")
                .attr("stroke-opacity",0.2)
                .attr("stroke","#08519c")
                .attr("rx", 3)
                .attr("ry",3)
                .attr("transform","translate("+padding_x*2.5+","+(padding_y*2.25)+")");


        svg_depose.append("text")
                .attr("id","depose_texthover1")
                    .attr("y",function()
                    {

                      return yScale("Sunyeopha");
                    })
                    .attr("x", function()
                    {

                      return xScale(1397)+padding_x/10+20;
                    //  //console.log();
                    // return xScale(d.timeline2)+padding_x/10+10;
                    })
                    .text(function(){
                    //  //console.log("Name:"+name+", Timeline:"+timeline+", Reign:"+duration);
                      return "Interim Period: 1389-1397";
                    })
                    .attr("text-anchor","start")
                    .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
                    .attr("class","fonts hover_text");

        })
        .on("mouseout",function(){
          d3.select("#depose_texthover1").remove();
          d3.select("#depose_hover_rect").remove();
        });
var endyear=1850;
svg_depose.append("g")
          .append("rect")
          .attr("id","rect_depose_highlight")
          .attr("y",yScale(kings_rev[0]))
          .attr("x",xScale(1900))
          .attr("height",yScale(kings[kings.length-1])+yScale(kings[1])-yScale(kings[0]))
          .attr("width",xScale("1824")-xScale("1641"))
          .attr("fill",green_col_election)
          // .attr("stroke","#768c27")
          // .attr("stroke-width",5)
          .attr("fill-opacity",0.3)
          .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
          ;
var circle=svg_depose.selectAll("circle")
          .data(dataset_depose)
          .enter()
          .append("g")
          .append("rect")
          .attr("y",function(d)
          {
          return yScale(d.name);
          })
          .attr("x",function(d){
            if(d.timeline1==1675)
            {
              if(d.duration==0.055)
                {  return xScale(d.timeline1+d.duration);}
            }
           if(d.timeline1==1675 && d.duration==2)
          {
            //  //console.log(d.name);
            return xScale(1675+0.135);
          }

          return xScale(d.timeline1);
          })
          .attr("height", function(d)
          {
          return yScale(kings_rev[1])-yScale(kings_rev[0]);
          })
          .attr("width",function(d)
          {
            if((xScale(d.timeline2)-xScale(d.timeline1))==0)
             return xScale(d.timeline2+d.duration)-xScale(d.timeline1);
             if(d.timeline1==1675 && d.duration==2)
            {
               //console.log(d.name);
              return xScale(d.timeline2)-xScale(d.timeline1+0.135);
            }
          return xScale(d.timeline2)-xScale(d.timeline1);
          })
          .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
          .attr("fill", function(d){
            if(d.chosen==0 || d.chosen==1)
            {
              return "#f4a029";
            }

            else if(d.chosen==2 || d.chosen==3)
            {
              return "#08519c";
            }

          })
          .attr("stroke-width", function(d){
            if(d.chosen==1 || d.chosen==3)
            {
              d3.select(this).attr("stroke","#e60000");
              return 2;
            }

          })

          .attr("opacity",0.7)
          // .attr("transform","translate("+padding_x*2+","+padding_y/2+")")
          // .attr("stroke-width",10)
          .on("mouseover", function(d)
          {

            if(svg_depose.select("#depose_hover_rect"))
            {
              svg_depose.select("#depose_hover_rect").remove();
              svg_depose.select("#depose_texthover1").remove();
              svg_depose.select("#depose_texthover2").remove();
              svg_depose.select("#depose_texthover3").remove();
            }

              svg_depose.append("rect")
                    .attr("id","depose_hover_rect")
                    .attr("y",function()
                    {


                       //console.log("rect");
                      return yScale(d.name);
                    })
                    .attr("x",function(){

                      var namestr=d.name.length;
                      var reign=d.Reign.length;
                      var timeperiod=22;
                      if(namestr>timeperiod)
                      {
                        if(namestr>reign)
                        {
                          strlenG=namestr;
                        }
                      }

                      else if(reign>timeperiod){

                        strlenG=reign;
                      }
                      else {
                        strlenG=timeperiod;
                      }


                      if((xScale(d.timeline2)+((strlenG+5)*10))>xScale(endyear))
                      {
                         //console.log("outside");
                        return xScale(d.timeline1)-((strlenG)*strlenMultiplier)-8;
                      }
                       //console.log("old:"+xScale(d.timeline1)+padding_y*2);
                      return xScale(d.timeline2)+padding_x/10+10;
                    })
                    .attr("width",function()
                  {
                    var namestr=d.name.length;
                    var reign=d.Reign.length;
                    var timeperiod=22;
                    if(namestr>timeperiod)
                    {
                      if(namestr>reign)
                      {
                        strlenG=namestr;
                      }
                    }

                    else if(reign>timeperiod){

                      strlenG=reign;
                    }
                    else {
                      strlenG=timeperiod;
                    }
                    var strlen=strlenG;
                  //	 //console.log(strlen);
                  //	if(strlen>10)
                    return strlen*strlenMultiplier;
                  //	else return 11*strlenMultiplier;
                  })
                    .attr("height",80)
                    .attr("fill","white")
                    .attr("stroke-opacity",0.2)
                    .attr("stroke","#08519c")
                    .attr("rx", 3)
                    .attr("ry",3)
                    .attr("transform","translate("+padding_x*2.5+","+(padding_y*2.25)+")");


            svg_depose.append("text")
                    .attr("id","depose_texthover1")
                        .attr("y",function()
                        {

                          return yScale(d.name);
                        })
                        .attr("x", function()
                        {
                          var namestr=d.name.length;
                          var reign=d.Reign.length;
                          var timeperiod=22;
                          if(namestr>timeperiod)
                          {
                            if(namestr>reign)
                            {
                              strlenG=namestr;
                            }
                          }

                          else if(reign>timeperiod){

                            strlenG=reign;
                          }
                          else {
                            strlenG=timeperiod;
                          }


                          if((xScale(d.timeline2)+((strlenG+5)*10))>xScale(endyear))
                          {
                             //console.log("outside");
                            return xScale(d.timeline1)-((strlenG)*strlenMultiplier)+2;
                          }
                           //console.log("old:"+xScale(d.timeline1)+padding_y*2);
                          return xScale(d.timeline2)+padding_x/10+20;
                        //  //console.log();
                        // return xScale(d.timeline2)+padding_x/10+10;
                        })
                        .text(function(){
                        //  //console.log("Name:"+name+", Timeline:"+timeline+", Reign:"+duration);
                          return "Name:  "+d.name;
                        })
                        .attr("text-anchor","start")
                        .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
                        .attr("class","fonts hover_text");

              svg_depose.append("text")
                      .attr("id","depose_texthover2")
                          .attr("y",function()
                          {

                            return yScale(d.name)+30;
                          })
                          .attr("x", function()
                          {
                            var namestr=d.name.length;
                            var reign=d.Reign.length;
                            var timeperiod=22;
                            if(namestr>timeperiod)
                            {
                              if(namestr>reign)
                              {
                                strlenG=namestr;
                              }
                            }

                            else if(reign>timeperiod){

                              strlenG=reign;
                            }
                            else {
                              strlenG=timeperiod;
                            }


                            if((xScale(d.timeline2)+((strlenG+5)*10))>xScale(endyear))
                            {
                               //console.log("outside");
                              return xScale(d.timeline1)-((strlenG)*strlenMultiplier)+2;
                            }
                             //console.log("old:"+xScale(d.timeline1)+padding_y*2);
                            return xScale(d.timeline2)+padding_x/10+20;
                          })
                          .text(function(){
                          //  //console.log("Name:"+name+", Timeline:"+timeline+", Reign:"+duration);
                            return "Timeperiod:  "+(d.timeline1)+"-"+(d.timeline2);
                          })
                          .attr("class","fonts hover_text")
                          .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
                          .attr("text-anchor","start");


              svg_depose.append("text")
                      .attr("id","depose_texthover3")
                          .attr("y",function()
                          {

                                return yScale(d.name)+15;
                          })
                          .attr("x", function()
                          {
                            var namestr=d.name.length;
                            var reign=d.Reign.length;
                            var timeperiod=22;
                            if(namestr>timeperiod)
                            {
                              if(namestr>reign)
                              {
                                strlenG=namestr;
                              }
                            }

                            else if(reign>timeperiod){

                              strlenG=reign;
                            }
                            else {
                              strlenG=timeperiod;
                            }


                            if((xScale(d.timeline2)+((strlenG+5)*10))>xScale(endyear))
                            {
                               //console.log("outside");
                              return xScale(d.timeline1)-((strlenG)*strlenMultiplier)+2;
                            }
                             //console.log("old:"+xScale(d.timeline1)+padding_y*2);
                            return xScale(d.timeline2)+padding_x/10+20;
                          })
                          .text(function(){
                          //  //console.log("Name:"+name+", Timeline:"+timeline+", Reign:"+duration);
                           //console.log(d.Reign);
                            return "Reign:  "+d.Reign;
                          })
                          .attr("class","fonts hover_text")
                            .attr("transform","translate("+padding_x*2.5+","+(padding_y*3)+")")
                          .attr("text-anchor","start");


                  // svg_depose.append("rect")
                  //       .attr("id","primogeniture_l")
                  //       .attr("x",)
                  //       .attr("y",)
                  //       .attr("height",7)
                  //       .attr("width",20)
                  //       .attr("fill",)


          })
          .on("mouseout", function()
        {
          svg_depose.select("#depose_hover_rect").remove();
          svg_depose.select("#depose_texthover1").remove();
          svg_depose.select("#depose_texthover2").remove();
          svg_depose.select("#depose_texthover3").remove();
        });



var xAxis=d3.axisBottom()
          .scale(xScale);


var yAxis = d3.axisLeft()
              .scale(yScale)
              ;
var gX=svg_depose.append("g")
            .call(xAxis)
            .attr("id","gX")
            .attr("transform","translate("+padding_x*2.5+","+(height-padding_y*2)+")")
            .attr("class","axis")
            .selectAll("text")
            .style("text-anchor", "start")
            // .attr("transform", function(d) {
            //             return "rotate(-65)"
            //             })
            ;
svg_depose.append("g")
             .attr("transform","translate("+padding_x*2.5+","+padding_y*3+")")
              .call(yAxis)
              .attr("class","axis_depose")
              // .selectAll("text")
              // .attr("transform", function(d) {
              //           return "rotate(-25)"
              //           })
            //  .attr("class","edit")
              ;
svg_depose.append("text")
      .attr("x", (sc_width+padding_x*3)/2)
      .attr("y", sc_height+padding_y*4.5)
      .text("Timeperiod(years)")
      .style("text-anchor", "middle")

      .attr("class","lezends");


// svg_depose.append("text")
//                 .attr("x", padding_x)
//                 .attr("y", sc_height/2)
//                 .style("text-anchor", "start")
//                 .text("Timeline")
//                 .attr("transform", "rotate(-90)")
//                 ;



svg_depose.append("g")
      .append("text")
      .attr("x",padding_x)
      .attr("y",padding_y*2.2)
      .text("Kings")
      .style("text-anchor","middle")
      .attr("class","lezends");

svg_depose.append("g")
      .append("text")
      .attr("x",padding_x)
      .attr("y",padding_y*2.7)
      .text("(1228-1824)")
      .style("text-anchor","middle")
      .attr("class","lezends");


depose_legend//.selectAll("rect")
            //  .append("g")
              .append("rect")
              .attr("x",width/5)
              .attr("y",10)
              .attr("height",10)
              .attr("width",20)
              .attr("fill", "#f4a029")
              .attr("opacity",0.7);

depose_legend.append("rect")
              .attr("x",width/5*2)
              .attr("y",10)
              .attr("height",10)
              .attr("width",20)
              .attr("fill", "#e60000")
              .attr("opacity",0.7);
depose_legend.append("rect")
              .attr("x", width/5*3)
              .attr("y",10)
              .attr("height",10)
              .attr("width",20)
              .attr("fill", "#08519c")
              .attr("opacity",0.7);


depose_legend.append("text")
            .attr("x",width/5+25)
            .attr("y",15)
            // .attr("font-size","10px")
            .text("Elected through")
            .attr("class","lezends_small");

depose_legend.append("text")
            .attr("x",width/5+25)
            .attr("y",25)
            // .attr("font-size","10px")
            .text("primogeniture")
            .attr("class","lezends_small");

depose_legend.append("text")
            .attr("x",width/5*2+25)
            .attr("y",15)
            // .attr("font-size","10px")
            .text("Deposed by")
            .attr("class","lezends_small");

depose_legend.append("text")
            .attr("x",width/5*2+25)
            .attr("y",25)
            // .attr("font-size","10px")
            .text("ministers")
            .attr("class","lezends_small");

depose_legend.append("text")
            .attr("x",width/5*3+25)
            .attr("y",15)
            // .attr("font-size","10px")
            .text("Elected by")
            .attr("class","lezends_small");

depose_legend.append("text")
            .attr("x",width/5*3+25)
            .attr("y",25)
            // .attr("font-size","10px")
            .text("ministers")
            .attr("class","lezends_small");





function update()
{
  endyear=1820;
   //console.log("updating");

  new_xScale=d3.scaleLinear()
              .domain([1641,1820])
              .range([0,sc_width]);
  // svg_depose.select
  xScale=new_xScale;
  d3.select("#gX").transition()
  .call(xAxis.scale(new_xScale))
   //console.log("done");



   // svg_depose.select("#rect_depose_highlight")
   // .transition()
   //   .attr("fill-opacity",0.5);

circle.data(dataset_depose)
  .transition()
  .duration(1000)

  .attr("x",function(d){
      if(d.timeline1<1641)
      return 0;
      if(d.timeline1==1675)
      {
      if(d.duration==0.055)
      {  return xScale(d.timeline1+d.duration);}
      else if(d.duration==2)
      {
        return xScale(d.timeline1+0.138);
      }
      }
      return new_xScale(d.timeline1);
  })
  .attr("width",function(d)
  {
    if(d.timeline1<1641)
    return 0;
    if((xScale(d.timeline2)-xScale(d.timeline1))==0)
    return new_xScale(d.timeline2+d.duration)-new_xScale(d.timeline1);
    if(d.timeline1==1675 && d.duration==2)
   {
      //console.log(d.name);
     return new_xScale(d.timeline2)-new_xScale(d.timeline1+0.135);
   }
  return new_xScale(d.timeline2)-new_xScale(d.timeline1);
  })

;

svg_depose.select("#interim1").transition()
        .attr("opacity",0);
svg_depose.select("#interim2").transition()
        .attr("opacity",0);


}


function update2()
{
  endyear=1681;
  //  //console.log("updating");

  new_xScale=d3.scaleLinear()
              .domain([1670,1681])
              .range([0,sc_width]);
  // svg_depose.select
  xScale=new_xScale;
  d3.select("#gX").transition()
  .call(xAxis.scale(new_xScale))
  //  //console.log("done");



circle.data(dataset_depose)
  .transition()
  .duration(1000)

  .attr("x",function(d){
    if(d.timeline1<=1670)
    return 0;
    else if(d.timeline1>=1681)
    return 1682;
    if(d.timeline1==1675)
    {
      if(d.duration==0.055)
    {  return xScale(d.timeline1+d.duration);}
      else if(d.duration==2)
      {
        return xScale(d.timeline1+0.135);
      }
    }
  return new_xScale(d.timeline1);
  })
  .attr("width",function(d)
  {
    if(d.timeline1<1670 || d.timeline1>=1681)
    return 0;
    if((xScale(d.timeline2)-xScale(d.timeline1))==0)
    return new_xScale(d.timeline2+d.duration)-new_xScale(d.timeline1);
    if(d.timeline1==1675 && d.duration==2)
   {
     //  //console.log(d.name);
     return new_xScale(d.timeline2)-new_xScale(d.timeline1+0.135);
   }
  return new_xScale(d.timeline2)-new_xScale(d.timeline1);
})

;
svg_depose.select("#interim1").transition()
        .attr("opacity",0);
svg_depose.select("#interim2").transition()
        .attr("opacity",0);

svg_depose.selectAll("#rect_depose_highlight")
          .transition()
          .attr("x",new_xScale(1900))
          ;
}
function update_original()
{
  endyear=1830;
  //  //console.log("updating");

  new_xScale=d3.scaleLinear()
              .domain([1225,1830])
              .range([0,sc_width]);
  // svg_depose.select
  xScale=new_xScale;
  d3.select("#gX").transition()
  .call(xAxis.scale(new_xScale))
  //  //console.log("done");

circle.data(dataset_depose)
  .transition()
  .duration(1000)
  .attr("x",function(d){
    if(d.timeline1==1675)
    {
      if(d.duration==0.055)
    {  return xScale(d.timeline1+d.duration);}
      else if(d.duration==2)
      {
        return xScale(d.timeline1+0.138);
      }
    }
  return new_xScale(d.timeline1);
  })
  .attr("width",function(d)
  {


    if((xScale(d.timeline2)-xScale(d.timeline1))==0)
    return new_xScale(d.timeline2+d.duration)-new_xScale(d.timeline1);
    if(d.timeline1==1675 && d.duration==2)
   {
     //  //console.log(d.name);
     return new_xScale(d.timeline2)-new_xScale(d.timeline1+0.135);
   }
  return new_xScale(d.timeline2)-new_xScale(d.timeline1);
});

svg_depose.select("#interim1").transition()
        .attr("opacity",0.5);
svg_depose.select("#interim2").transition()
        .attr("opacity",0.5);


//  //console.log("update3");
svg_depose.selectAll("#rect_depose_highlight")
          .transition()
          .attr("x",new_xScale(1900))
            // .attr("opacity",0)
          // .attr("width",0)
        ;
//   .on("mouseover",function(d)
// {
//   svg_depose.select("#depose_hover_rect")
//       .data(dataset_depose)
//       .transition()
//       .attr("y",function(d){
//          //console.log("new:"+new_yScale(d.timeline1)+padding_y*2);
//       return new_yScale(d.timeline1)+padding_y*2;});
// })

    // .attr("y",function(d){
    // return yScale(d.timeline1);
    // })
}
function update3()
{
  endyear=1850;
  update_original();
  svg_depose.selectAll("#rect_depose_highlight")
            .transition()
            .duration(700)
            .attr("x",new_xScale(1641))
            .attr("width",new_xScale(1824)-new_xScale(1641))
            .attr("opacity",0.5)
          ;


}
