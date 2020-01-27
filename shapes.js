var a = 0
var colar;
function change(){

  if(a == 0){a=a+1
    colar = prompt("what color is the graph")
    if(colar == null){colar = "black"}
    var dataArray = [5, 11, 18];
    var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%").attr("id","svgs");
    svg.selectAll("rect").data(dataArray)
            .enter().append("rect")
                .attr("height",function(d,i){  return d*15})
                .attr("width","50")
                .attr("fill",function(colour){ return(colar)})
                .attr("x",function(d,i){ return 60*i })
                .attr("y",function(d,i){ return 300-(d*15)})
}else if(a==1){
  a = a-1
  var svgs = document.getElementById("svgs");
  svgs.remove();
}}
