d3.select("body")
    .append("svg")
    .attr("width", 900)
    .attr("height", 500);

d3.json('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson', function(error, data){
   console.log(data);
});