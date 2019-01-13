var timeperiod=d3.select("#timeperiod")
      .append("svg");

      var blue_col="#294056";
      var orange_col="#f4a029";
      var body_white="rgb(250,250,250)";

var timeperiod_width=document.getElementById("timeperiod").clientWidth;
var timeperiod_height=document.getElementById("timeperiod").clientHeight;

var admin_map_padding_x=timeperiod_width/30;
var admin_map_padding_y=height/20;
var admin_map_timeperiod_xScale=d3.scaleLinear()
					.domain([1228,1860])
					.range([0,timeperiod_width]);


timeperiod.attr("height", "100%")
		.attr("width", "100%")
		.attr("preserveAspectRatio", "xMidYMid")
		.attr("viewBox","0 0 "+(timeperiod_width)+" "+timeperiod_height);



var timeline_rects=timeperiod.append("g")
			.selectAll("rect")
			.data(map_timeline_ad)
			.enter()
			.append("rect")
			.attr("x",function(d)
		{console.log(d.timeline1);
			if(d.timeline1==1228)
		{	console.log(admin_map_timeperiod_xScale(1228));
			return admin_map_timeperiod_xScale(1228);}
		else {
			return admin_map_timeperiod_xScale(d.timeline1);
		}
		})
		.attr("y",0)
    .style("cursor","pointer")
    .attr("height", 7)
		.attr("width",function(d){
			if(d.timeline1==1228)
			return admin_map_timeperiod_xScale(d.timeline2)-admin_map_timeperiod_xScale(d.timeline1);
			return admin_map_timeperiod_xScale(d.timeline2)-admin_map_timeperiod_xScale(d.timeline1);
		})
    .attr("stroke",blue_col)
    .attr("stroke-width",2)
		.attr("transform", "translate("+admin_map_padding_x/1.5+","+timeperiod_height/1.5+")")
    .attr("fill",orange_col)
    .on("mouseover", function(d){
        d3.select(this)
        .attr("fill",body_white);


          //timeperiodhovertext
          timeperiod.append("g")
          .attr("id","hover_text_timeperiod")
          .append("text")
          .attr("x",function(){
          	return admin_map_timeperiod_xScale(d.timeline1)+(admin_map_timeperiod_xScale(d.timeline2)-admin_map_timeperiod_xScale(d.timeline1))/2;
          })
          .attr("y",admin_map_padding_y*1.7)
          .style("text-anchor","middle")
          .text(d.timeline1+"-"+d.timeline2)
          .attr("cursor","default")
          .attr("class", "hover_timeline_text")
          .attr("transform", "translate("+admin_map_padding_x/1.8+","+timeperiod_height/4+")");

                // .attr("y",family_padding_y*1.50)
                // .attr("transform", "translate("+(family_padding_x*5)+","+family_padding_y*1.40+")")
                // .style("text-anchor","middle")
                // .text(d.timeline1+"-"+d.timeline2)


                // .attr("transform", "translate("+(family_padding_x*5)+","+family_padding_y/1.3+")");

          })
    .on("mouseout",function(){

          d3.select(this)
          .attr("fill",orange_col);
          timeperiod.select("#hover_text_timeperiod").remove();
          timeperiod.select("#hover_rect_timeperiod").remove();
          })
    .on("click",function(d){
          d3.select(this)
          .attr("fill",body_white);

          timeperiod.select("#slider_admin_map_timeperiod_rect")
          .transition()
          .attr("x",function(){
            return admin_map_timeperiod_xScale(d.timeline1)+(admin_map_timeperiod_xScale(d.timeline2)-admin_map_timeperiod_xScale(d.timeline1))/2-45;
          });

          timeperiod.select("#slider_timeperiod_text")
          .transition()
          .attr("x",function(){
          	return admin_map_timeperiod_xScale(d.timeline1)+(admin_map_timeperiod_xScale(d.timeline2)-admin_map_timeperiod_xScale(d.timeline1))/2;
          })
          .text(""+d.timeline1+"-"+d.timeline2);

          timeperiod.select("#slider_timeperiod")
          .transition()
          .attr("x",admin_map_timeperiod_xScale(d.timeline1))
          .attr("width",admin_map_timeperiod_xScale(d.timeline2)-admin_map_timeperiod_xScale(d.timeline1));

          check(d.timeline1);

          mapTransition_adm(d.map_number);


    })
    ;

var slider_timeperiod=timeperiod.append("g")
			.append("rect")
			.attr("id","slider_timeperiod")
			.attr("height",12)
			.attr("y",0)
			.attr("fill",body_white)
			.attr("transform", "translate("+admin_map_padding_x/1.5+","+timeperiod_height/1.55+")");

slider_timeperiod.attr("x",admin_map_timeperiod_xScale(1228))
			.attr("width",admin_map_timeperiod_xScale(1268)-admin_map_timeperiod_xScale(1228))
			;


  var slider_admin_map_timeperiod_rect=timeperiod.append("g")
        .append("rect")
        .attr("id","slider_admin_map_timeperiod_rect")
        .attr("height",20)
        .attr("width",90)
        .attr("y",0)
        .attr("stroke",blue_col)
        .attr("stroke-width",2)
        // .attr("stroke-width",3)
        .attr("fill",body_white)
        .attr("transform", "translate("+(admin_map_padding_x/1.5)+","+admin_map_padding_y/1.5+")")
        ;
  slider_admin_map_timeperiod_rect.attr("x",admin_map_timeperiod_xScale(1228))
        .attr("x",admin_map_timeperiod_xScale(1228)+(admin_map_timeperiod_xScale(1268)-admin_map_timeperiod_xScale(1228))/2-45)
        ;




var slider_admin_timeperiod_text=timeperiod.append("g")
			.append("text")
			.attr("id","slider_timeperiod_text")
			.attr("y",0)
			.attr("class","timeline_text_click")
			.attr("transform", "translate("+(admin_map_padding_x/1.5)+","+admin_map_padding_y*1.2+")")
			.style("text-anchor","middle")
      .attr("fill","#ffffff")
			.text("1228-1268")

			;
slider_admin_timeperiod_text.attr("x",admin_map_timeperiod_xScale(1228))
			.attr("x",admin_map_timeperiod_xScale(1228)+(admin_map_timeperiod_xScale(1268)-admin_map_timeperiod_xScale(1228))/2)
			;
