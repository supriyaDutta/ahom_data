var width=document.getElementById("viz_administration").clientWidth;
var height=document.getElementById("viz_administration").clientHeight;
console.log(height);
console.log(width);
var ad_padding_x=width/10;
var ad_padding_y=height/10;
var svg_administration=d3.select("#viz_administration")
          .append("svg")
          .attr("width", "100%")
          .attr("height","100%")
          .attr("preserveAspectRatio","xMidYMid")
          .attr("viewBox", "0 0 " + width + " " + height);





var x_ad_Scale=d3.scaleLinear()
  .domain([0,8])
  .range([0,width-ad_padding_x*2]);
var y_ad_Scale=d3.scaleLinear()
    .domain([0,6])
    .range([0,height-ad_padding_y*3]);
var rScale = d3.scaleSqrt() // <--New!
    .domain([0, d3.max(admin_dataset[0].people, function(d) { return d.size; })])
    .range([0, height/50]); // <--New!


//colorscale
var color_rects=["#cbd9e6","#a9bfd6","#86a6c5","#638cb5","#4a739c","#3a5979","#294056"];
var colorScale=d3.scaleOrdinal()
        .domain([6,5,4,3,2,1,0])
        .range(color_rects);

var color_officials=[];
// var color_officials_scale=d3.scaleOrdinal()
          // .range([0,6]);
//rects
console.log(admin_dataset[4].levels);
var levels=function(){
for(var i=0;i<5;i++)
{
if(admin_dataset[i].time==1603)
return admin_dataset[i].levels;
}
};
console.log(levels);

var adm_back=svg_administration.selectAll("#viz_administration")
    .data(levels)
    .enter()
    .append("g")
    .append("rect")
    .attr("x",0)
    .attr("y",-y_ad_Scale(2))
    .attr("width", x_ad_Scale(8)+x_ad_Scale(1))
    .attr("height",function(d){
      console.log("rect:"+y_ad_Scale(d)+(ad_padding_y*4)+rScale(10));
      // console.log(colorScale(d));
     return y_ad_Scale(d)+ad_padding_y*4+rScale(10);})
    // .attr("opacity",0.05)
    // .attr("stroke","red")
    .attr("fill",function(d){return colorScale(d);})
    .attr("rx",width)
    .attr("ry",height/10)
    .attr("cursor","pointer")
    .attr("transform","translate("+ad_padding_x/2+","+ad_padding_y+")")
  //   .call(function(d)
  // {
  //   svg_administration//.selectAll("#viz_administration_highlight")
  //
  //       .append("g")
  //       .append("rect")
  //       .attr("x",0)
  //       .attr("y",-y_ad_Scale(2))
  //       .attr("width", x_ad_Scale(8)+x_ad_Scale(1))
  //       .attr("height",function(d){
  //         // console.log("rect:"+y_ad_Scale(d)+(ad_padding_y*4);
  //         // console.log(colorScale(d));
  //        return y_ad_Scale(d)+ad_padding_y*4;})
  //       // .attr("opacity",0.05)
  //       // .attr("stroke","red")
  //       .attr("fill","black")
  //       // .attr("opacity",0.5)
  //       .attr("rx",width)
  //       .attr("ry",height/10)
  //       .attr("transform","translate("+ad_padding_x/2+","+ad_padding_y+")");
  // })
    .on("mouseover", function(d){

      d3.select(this)
        .attr("fill","#eef4f7");

      svg_administration.append("g")
        .append("rect")
        .attr("id","level_hover_rect")
        .attr("x",function(){
          var coordinates= d3.mouse(this);
          var x = coordinates[0];
           return x+10;
        })
        .attr("y",function()
        {  var coordinates= d3.mouse(this);
          var y = coordinates[1];
           return y;
        })
        .attr("height",function()
      {
        if(d==0)
        return 25;
        else return 50;
      })
        .attr("class","hover_rect")
        .attr("rx",3)
        .attr("ry",3)
        // .attr("transform","translate("+ad_padding_x/2+",0)")
        .attr("width",function()
      {
        switch(d){
          case 0:
          return 120;
        case 1:
        return 120;
        break;
        case 2:
        return 110;
        break;
        case 3:
        return 150;
        break;
        case 4:
        return 170;
        break;
        case 5:
        return 150;
        break;
        case 6:
        return 110;
        break;
      }
    });


    svg_administration.append("g")
      .append("text")
      .attr("id","level_hover_text")
      .attr("x",function(){var coordinates= d3.mouse(this);
var x = coordinates[0];
return x+20;})
      .attr("y",function(){
        var coordinates= d3.mouse(this);
          var y = coordinates[1];
           return y;
      })
      .attr("class","hover_text")
        .attr("transform","translate(0,"+ad_padding_y/4+")")
      // .attr("transform","translate("+ad_padding_x/2+","+ad_padding_y/4+")")
      .text(function(){
        switch(d)
        {
          case 0:

          break;
          case 1:
          return "Patra Mantri";
            // svg_administration.append("")
          break;
          case 2:
          return "Pali Mantri";
          break;
          case 3:
          return "Meldangiya Roja"
          break;
          case 4:
          return "Datiyoliya Gohain";
          break;
          case 5:
          return "Chakiyal Bisoya";
          break;
          case 6:
          return "Kuwarir mel";
          break;
        }
      });


      svg_administration.append("g")
        .append("text")
        .attr("id","level_hover_text_clickMore")
        .attr("x",function(){
          var coordinates= d3.mouse(this);
var x = coordinates[0];
return x+20;})
        .attr("y",function(){
          var coordinates= d3.mouse(this);
            var y = coordinates[1];
            if(d==0)
            return y;
             return y+20;
        })
        .attr("class","hover_text")
        .attr("transform","translate(0,"+ad_padding_y/4+")")
        .text("CLICK TO KNOW MORE")
        .attr("class", "clickmore");


    })
    .on("mouseout",function()
  {
    svg_administration.select("#level_hover_rect").remove();
    svg_administration.select("#level_hover_text").remove();
    svg_administration.select("#level_hover_text_clickMore").remove();
    d3.select(this)
      .attr("fill",function(d){return colorScale(d);});
  })
  .on("click",function(d)
{
  var description;
  switch(d)
  {
    case 0:
    description="The king was the head of the administration system. He had the absolute power. However, for carrying out any important command he had to take permission from the <span class='bold500'>Patra Mantri</span>. When found guilty the king could grant any punishment to the offender, including bloodshed(considered the highest form of punishment, only allowed by the king).";
    break;
    case 1:
    description="Second in the hierarchy were the Patra Mantris. They were namely: <br><span class='bold500'>Buragohain</span>, <span class='bold500'><br>Bargohain</span> and <span class='bold500'><br>Barpatra Gohain</span>.<br> They were king's advisers. They were allotted specific areas of the kingdom which would they rule on king's behalf. They had the power to decide who could be the next King; elect kings from the then princes and  depose them out. When three of the Patra mantri agreed on something, that had to be followed. The King would always had to take approval from them.";
    break;
    case 2:
    description="Pali mantri were third in the hierarchy. They were:<br><span class='bold500'>Barphukan</span> and <span class='bold500'><br>Barbarua</span>.<br> Barbarua was Judge, Army General and King's Advisor. <br>Barphukan was the Judge, Army General and King’s Advisor. He was given the power to decide/advice the king on making or deposing kings of <em class='italics'>Panbari</em>, <em class='italics'>Borduwar</em>, <em class='italics'>Soygaon</em>, <em class='italics'>Panton</em>, <em class='italics'>Boku</em>, <em class='italics'>Bongaon</em>, <em class='italics'>Jogai</em>, <em class='italics'>Bhulagaon</em>, <em class='italics'>Dwar</em>, <em class='italics'>Moirapur</em>. They too had the power to decide the election of king; elect kings from the then princes and depose them out. They were allotted specific areas of the kingdom which would they rule on king's behalf.";
    break;
    case 3:
    description="Fourth in the hierarchy were <span class='bold500'>Meldangiya Roja</span>. They were the princes. They were king's advisers. They were allotted specific areas of the kingdom which would they rule on king's behalf. Based on the territory they were allotted to rule they were given different titles: <span class='bold500'>Tipomiya Roja</span>, <span class='bold500'>Namrupiya Roja</span>, <span class='bold500'>Charingiya Roja</span>, <span class='bold500'>Sarumeliya Roja</span> and <span class='bold500'>Majumeliya Roja</span>. They weren't given any sectors/areas to work on, on the ground that they might unite with other people against the king.";
    break;
    case 4:
    description="Fifth in the hierarchy were the Datiyoliya Gohain. They were called <span class='bold500'>Sadiyakhuwagohain</span>, <span class='bold500'>Marangigohain</span> and <span class='bold500'>Salalgohain</span>. They were advisers in the King's court. They were allotted specific areas of the kingdom which would they rule on king's behalf. Theses positions were added during the period of <span class='bold500'>King Suhungmung</span>, specially to protect the border areas of the kingdom.";
    break;
    case 5:
    description="Sixth in the hierarchy were the Chakiyal Bisoya. <span class='bold500'>Kajolimukhiya Gohain</span>, <span class='bold500'>Jogiyal Gohain</span>, <span class='bold500'>Rohiyal Gohain</span> were the Chakiyal Bisoyas. These positions were created during the time of <span class='bold500'>Pratap Singh</span>. Their main job was to keep the King informed of neighboring tribes and different areas of the kingdom.";
    break;
    case 6:
    description="<em class='italics'>Konwari</em> means lady. Konwarir mel were in seventh position of hierarchy. Konwarir mel were group of councils headed by different ladies of the royal family. Ahoms were the first in Indian history to include women into the administration system. They were allotted specific areas of the kingdom which would they rule on king's behalf. They were also included in the court as the king's advisers.";
    break;
  }
  document.getElementById("administration_officers_info").innerHTML=description;
});






//circles
console.log(admin_dataset);

var strlenMultiplier=8.5;
//diamond

var symbolDiamondGen = d3.symbol()
.type(d3.symbolDiamond)
.size(150)

var symbolCircleGen = d3.symbol()
.type(d3.symbolCircle)
.size(100)
;
// .attr("class", "shapeDiamond")

var strlenG_ad;
var adm_system=svg_administration.selectAll("#viz_administration")
      .data(admin_dataset[0].people)
      .enter()
      .append("g")
      .append("circle")

      .attr("cx",function(d){
      //  console.log(d.x);
      console.log(x_ad_Scale(d.x));
        return x_ad_Scale(d.x);
      })
      .attr("cy", function(d){
      //  console.log("level:"+d.levels);
        return y_ad_Scale(d.levels);
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
      .attr("transform","translate("+ad_padding_x/1.05+","+ad_padding_y*2+")")
      // .style("cursor","pointer")
      .on("mouseover",function(d)
      {
        console.log("inside");



        svg_administration.append("rect")
              .attr("id","admin_hover_rect")
              .attr("x",function()
              {
                var strlenG_ad=(d.officials).length;
                // var reign=d.Reign.length;

                console.log(d.x+":"+strlenG_ad+":"+(x_ad_Scale(d.x)+((strlenG_ad+5)*10)));

                if((x_ad_Scale(d.x)+((strlenG_ad+5)*10))>x_ad_Scale(8))
                {

                  console.log("outside");
                  return x_ad_Scale(d.x)+ad_padding_x/1.25-((strlenG_ad)*strlenMultiplier)-8;
                }
                return x_ad_Scale(d.x)+ad_padding_x*1.25;
                // x_ad_Scale(d.x)+ad_padding_x/1.25+20
              })
              .attr("y",y_ad_Scale(d.levels)+ad_padding_y*2-17)
              .attr("width",function()
            {
              var strlen=(d.officials).length;
            //	console.log(strlen);
            //	if(strlen>10)
              return strlen*strlenMultiplier;
            //	else return 11*strlenMultiplier;
            })
              .attr("height",25)
              .attr("fill","white")
              .attr("stroke-opacity",0.2)
              .attr("stroke","blue")
              .attr("rx", 3)
              .attr("ry",3);




        console.log("done");
          svg_administration.append("text")
          .attr("id","admin_text_hover")
          .attr("x",function()
          {
            var strlenG_ad=(d.officials).length;
            // var reign=d.Reign.length;

            // console.log();

            if((x_ad_Scale(d.x)+((strlenG_ad+5)*10))>x_ad_Scale(8))
            {

              console.log("outside");
              d3.select(this)
              .style("text-anchor","end");
              return x_ad_Scale(d.x)+ad_padding_x/1.25-15;
              // d3.select(this)
              // .style("text-anchor","end");
            }
            return x_ad_Scale(d.x)+ad_padding_x*1.3;
          }

        )
          .attr("y",y_ad_Scale(d.levels)+ad_padding_y*2)
          .text(d.officials)
          .attr("class","hover_text");
      })
      .on("mouseout",function()
      {
        svg_administration.selectAll("#admin_text_hover").remove();
        svg_administration.selectAll("#admin_hover_rect").remove();
      })
    ;

//colorlegends
svg_administration.append("rect")
.attr("x",0)
.attr("y",-y_ad_Scale(2))
.attr("width",width-ad_padding_x/2)
.attr("height",y_ad_Scale(2)+height/7)
.attr("transform","translate("+ad_padding_x/2.5+",-1)")
.attr("stroke-width",10)
.attr("fill","white")
;

var x_ad_Scale_legend=d3.scaleLinear()
    .domain([0,6])
    .range([0,width/3]);
for(var i=0;i<7;i++)
{
svg_administration//.selectAll("#viz_administration")
        .append("g")
        .append("rect")
        .attr("x",x_ad_Scale_legend(i))
        .attr("y", 0)
        .attr("width",x_ad_Scale_legend(1))
        .attr("height",20)
        .attr("fill",colorScale(i))
        .attr("transform","translate("+(width-x_ad_Scale_legend(1)*7-ad_padding_x)+","+ad_padding_y/3+")")
        ;
}

svg_administration.append("text")
  .attr("x",x_ad_Scale_legend(0))
  .attr("y", 0)
  .attr("transform","translate("+(width-x_ad_Scale_legend(1)*7-ad_padding_x*1.5)+","+ad_padding_y/1.25+")")
  .text("Higher")
  // .attr("class", "fonts ")
  .attr("class","lezends_small")
  .style("text-anchor","middle");
svg_administration.append("text")
.attr("x",x_ad_Scale_legend(8))
.attr("y", 0)
.attr("transform","translate("+(width-x_ad_Scale_legend(1)*7-ad_padding_x)+","+ad_padding_y/1.25+")")
.text("Lower")
.attr("class","lezends_small")
.style("text-anchor","middle");
svg_administration.append("text")
.attr("x",x_ad_Scale_legend(3.5))
.attr("y", 0)
.attr("transform","translate("+(width-x_ad_Scale_legend(1)*7-ad_padding_x)+","+ad_padding_y/5+")")
.text("Political Hierarchy")
.attr("class","lezends_small")
.style("text-anchor","middle");
