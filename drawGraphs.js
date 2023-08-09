var USA_primary = "#0099C5";
var USA_secondary = "#CCEAF3";
var USA_tertiary = "#88D5F3";
var PRC_primary = "#ff0000";
var PRC_secondary = "#B0000D";
var PRC_tertiary = "#CF666D";

colorOptions = [USA_primary, PRC_primary, USA_secondary, PRC_secondary, USA_tertiary, PRC_tertiary, "#c259c0"];

var strokeWidth = 2;
var animationDuration = 5;
var fillOpacity = "0.0";

var source = getSelectedDataSource();

// default is citations
var start_year = 1800
var end_year = 2023
let container_width = 800;
let container_height = 500;
var svg = d3.select("div#svg-container")
   .append("svg")
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 " + container_width + " " + container_height)
   .classed("svg-content", true);

d3.select("svg"),
   margin = {top: 15, right: 15, bottom: 25, left: 50},
   width =  container_width - margin.left - margin.right,
   height = container_height - margin.top - margin.bottom;
   //  width = +svg.attr("width") - margin.left - margin.right,
   //  height = +svg.attr("height") - margin.top - margin.bottom;

// set graph scale
var x = d3.scaleTime().range([margin.left, width - margin.right])
var y = d3.scaleLinear().rangeRound([height-margin.bottom, margin.top]);

// animates the drawing of line
function animateSolidLine(path) {
   // Derived From: https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3/
   let length = path.node().getTotalLength();
   // Animate the path by setting the initial offset and dasharray and then transition the offset to 0
   path.attr("stroke-dasharray", length + " " + length)
      .attr("stroke-dashoffset", length)
      .transition()
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .duration(animationDuration*1000);
      // .on("end", () => setTimeout(repeat, 1000)); // this will repeat the animation after waiting 1 second
};
// dashing is the offset between rect chunks
// function animateDashedLine(path, dashing) {
//    // Derived From: https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3/
//    let length = path.node().getTotalLength();
//    let dashLength = dashing.split(/[\s,]/)
//       .map(function (a) { return parseFloat(a) || 0 })
//       .reduce(function (a, b) { return a + b });
//    //How many of these dash patterns will fit inside the entire path?
//    let dashCount = Math.ceil( length / dashLength );

//    //Create an array that holds the pattern as often so it will fill the entire path
//    let newDashes = new Array(dashCount).join( dashing + " " );
//    let dashArray = newDashes + " 0, " + length;
//    path.attr("stroke-dashoffset", length)
//       .attr("stroke-dasharray", dashArray)
//       .transition()
//       .duration(animationDuration*1000)
//       .ease(d3.easeLinear)
//       .attr("stroke-linecap","square")
//       .attr("stroke-dashoffset", 0);
// }
// // dashing is the offset between circle chunks
// function animateDottedLine(path, dashing) {
//    // Derived From: https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3/
//    let length = path.node().getTotalLength();
   
//    let dashLength = dashing.split(/[\s,]/)
//       .map(function (a) { return parseFloat(a) || 0 })
//       .reduce(function (a, b) { return a + b });
//    //How many of these dash patterns will fit inside the entire path?
//    let dashCount = Math.ceil( length / dashLength );

//    //Create an array that holds the pattern as often so it will fill the entire path
//    let newDashes = new Array(dashCount).join( dashing + " " );
//    let dashArray = newDashes + " 0, " + length;
//    path.attr("stroke-dashoffset", length)
//       .attr("stroke-dasharray", dashArray)
//       .transition()
//       .duration(animationDuration*1000)
//       .ease(d3.easeLinear)
//       .attr("stroke-linecap","round")
//       .attr("stroke-dashoffset", 0);
// }

// receives parallel arrays lines and colors to create path on SVG graph
function drawLines(data, lines, colors, lineNames, animateLines = true, legYPos = 30) {
    // source = getSelectedDataSource();
   let count = 0;
   // Handmade legend
   let legXPos = 100;
   // let legYPos = 130;
   let textOffsetX = 10;
   var paths = Array(lines.length);

   let newData = [];

//    let allYears = new Set(data.map(d => d.year));
   
   
//    console.log(data)

   for (let i = 0; i < lines.length; i++) {
      count++;
    //   column = Object.keys(source.columns[i])
    // let columnName = Object.keys(data[0]).find(key => key !== "year" && key !== "NA" && lines[i](data[0][key]) !== null);
    // lineData = data.filter(d => d.year !== null);

    // lineData = data.filter(d => Object.keys(d.columns)[i] !== null)
    
      // solid line
    //   if (count == 1 || lines.length <= 2)   {
         paths.push(graph.append("path")
            .datum(data)
            .attr("fill-opacity", fillOpacity)
            .attr("fill", colors[i])
            .attr("clip-path", "url(#clip)")
            .attr("class", "path" + count)
            .attr("stroke", colors[i])
            .attr("stroke-width", strokeWidth)
            .attr("d", lines[i]));
         animateLines ? animateSolidLine(paths[paths.length-1]) : 0;
         // update legend
         graph.append("line")
            .attr("x1", legXPos-30)
            .attr("x2", legXPos)
            .attr("y1",legYPos+ 30*(i+1)-20)
            .attr("y2",legYPos+ 30*(i+1)-20)
            .attr("stroke-width", strokeWidth)
            .style("stroke", colors[i])
         graph.append("text")
            .attr("class", "legend")
            .attr("x", legXPos + textOffsetX)
            .attr("y", legYPos+ 30*(i+1)-20)
            // .style("text-anchor", "beginning")
            .style("font-size", "11px")
            .text(lineNames[i])
            .attr("alignment-baseline","middle")
    //   }
      // dotted line
    //   else if(count == 2) {
    //      let dashing = "1,7";
    //      paths.push(graph.append("path")
    //         .datum(data)
    //         .attr("fill-opacity", fillOpacity)
    //         .attr("fill", colors[i])
    //         .attr("clip-path", "url(#clip)")
    //         .attr("stroke-width", strokeWidth)
    //         .attr("stroke", colors[i])
    //         .attr("stroke-width", strokeWidth + 1)
    //         .attr("d", lines[i]));
    //         animateLines ? animateSolidLine(paths[paths.length-1]): 0;
    //      // update legend
    //      graph.append("line")
    //         .attr("x1", legXPos - 28)
    //         .attr("x2", legXPos)
    //         .attr("y1",legYPos+ 30*(i+1))
    //         .attr("y2",legYPos+ 30*(i+1))
    //         // .style("stroke-dasharray", dashing)
    //         // .attr("stroke-linecap","round")
    //         .attr("stroke-width", strokeWidth)
    //         .style("stroke", colors[i])
    //      graph.append("text")
    //         .attr("class", "legend")
    //         .attr("x", legXPos + textOffsetX)
    //         .attr("y", legYPos+ 30*(i+1))
    //         .text(lineNames[i])
    //         .attr("alignment-baseline","middle")
    //   }
    //   // dashed line
    //   else if (count == 3) {
    //      paths.push(graph.append("path")
    //         .datum(data)
    //         .attr("fill-opacity", fillOpacity)
    //         .attr("fill", colors[i])
    //         .attr("clip-path", "url(#clip)")
    //         .attr("stroke", colors[i])
    //         .attr("stroke-width", strokeWidth)
    //         .attr("d", lines[i]));
    //         animateLines ? animateSolidLine(paths[paths.length-1]): 0;
    //      // update legend
    //      graph.append("line")
    //         .attr("x1", legXPos - 30)
    //         .attr("x2", legXPos)
    //         .attr("y1",legYPos+ 30*(i+1))
    //         .attr("y2",legYPos+ 30*(i+1))
    //         .attr("stroke-width", strokeWidth)
    //         // .style("stroke-dasharray", "6,6")
    //         .style("stroke", colors[i])
    //      graph.append("text")
    //         .attr("class", "legend")
    //         .attr("x", legXPos + textOffsetX)
    //         .attr("y", legYPos+ 30*(i+1))
    //         .text(lineNames[i])
    //         .attr("alignment-baseline","middle")
    //      // reset count
    //      count = 0;
    //   }
   }
   return paths;
}

function setXAxisToYears() {
   let xAxis = graph.append("g")
       .attr("class", "x-axis")
       .call(d3.axisBottom(x))
       .attr("clip-path", "url(#clip)")
      //  .attr("transform", "translate(0," + height + ")");
       .attr("transform", `translate(0,${height - margin.bottom})`);
      //  .select(".domain")
      //  .remove();
   return xAxis;
}

function setTwoCountryLegend() {
   // Handmade legend
   let legXPos = 50;
   let legYPos = 10;
   let legRadius = 10;
   let textOffsetX = 20;
   graph.append("circle")
   .attr("cx",legXPos)
   .attr("cy",legYPos)
   .attr("r", legRadius)
   .style("fill", USA_primary)
   graph.append("text")
   .attr("class", "legend")
   .attr("x", legXPos + textOffsetX)
   .attr("y", legYPos)
   .text("USA")
   .attr("alignment-baseline","middle")
   graph.append("circle")
   .attr("cx",legXPos)
   .attr("cy",legYPos+30)
   .attr("r", legRadius)
   .style("fill", PRC_primary)
   graph.append("text")
   .attr("class", "legend")
   .attr("x", legXPos + textOffsetX)
   .attr("y", legYPos+30)
   .text("PRC")
   .attr("alignment-baseline","middle")
}

function findMaxColumn(source, data) {

    var trueSourceColumns = []

    for (let column in source.columns) {
        // console.log(source.columns[column])
        if (source.columns[column]) {
            trueSourceColumns.push(column)
        }
    }
    // console.log(trueSourceColumns)

    let columnMins = new Object()
    let columnMaxs = new Object()

    for (let column of trueSourceColumns) {
        columnMins[column] = d3.min(data, d => d[column])
        columnMaxs[column] = d3.max(data, d => d[column])
        // console.log(columnMaxs)
    }

    // for (i = 0; i < Object.keys(source.columns).length; i++) {
    //     columnMins[Object.keys(source.columns)[i]] = d3.min(data, function(d) { return d[Object.keys(source.columns)[i]]; })
    //     console.log(columnMaxs)
    //     columnMaxs[Object.keys(source.columns)[i]] = d3.max(data, function(d) { return d[Object.keys(source.columns)[i]]; })
    // }

    minMaxColumn = [(Object.keys(columnMins).reduce(function(a, b){ return columnMins[a] < columnMins[b] ? a : b })), 
                    (Object.keys(columnMaxs).reduce(function(a, b){ return columnMaxs[a] > columnMaxs[b] ? a : b })),
                    d3.max(Object.values(columnMaxs))]
    // console.log(minMaxColumn)
    
    return minMaxColumn
}


// const buildLineGraph = function (data) {
//     // console.log(data)
//     // sourceGroups = getSelectedDataSource().groups;
//     // setDataSource(source.name)
    
//     graph = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
//     data = data.filter(d => d.year !== null);

//     let lines = [];
//     let colors = [];
//     let lineNames = [];

//     let title = graph.append("g")
//         .attr("class", "title")
//         .append("text")
//         .attr("transform", `translate(${margin.top},0)`)
//         .attr("fill", "#000")
//         .attr("text-anchor", "middle")
//         .style("font-size", "20px")
//         .attr("x", 350)
//         .attr("y", 7)
//         .text(source.title)

//     for (let i = 0; i < Object.keys(source.columns).length; i++) {
//         if (Object.values(source.columns)[i]) {
//             let column = Object.keys(source.columns)[i];
//             lines.push(d3.line()
//                 // .defined(function(d) {return d.close !== 0;})
//                 .defined(d => d[column] !== null )
//                 .x(function(d) { return x(d.year); })
//                 .y(function(d) { return y(d[Object.keys(source.columns)[i]]); }))
//                 // .defined(function(d) {return y(d[Object.keys(source.columns)[i]]);})
//             colors.push(colorOptions[i])
//             lineNames.push(source.line_names[i])}
//     }
//     minMaxColumn = findMaxColumn(source, data)
    
//     x.domain(d3.extent(data, function(d) { return d.year; }));
//     y.domain([d3.min(data, function(d) { return d[minMaxColumn[0]]; }), d3.max(data, function(d) { return d[minMaxColumn[1]]; })]);
   
//     // Axis declaration
//     let xAxis = setXAxisToYears();

//     let divisor = 0
//     if (minMaxColumn[2] <= 100) {divisor = 1}
//     else if (minMaxColumn[2] < 1000) {divisor = 100}
//     else if (minMaxColumn[2] < 100000) {divisor = 1000}
//     else if (minMaxColumn[2] < 100000000) {divisor = 10000}
//     else {divisor = 100000}

//     let yAxis = graph.append("g")
//         .attr("class", "y-axis")
//         .attr("transform", `translate(${margin.left},0)`)
//         .call(d3.axisLeft(y).tickFormat(function(d){return d/divisor}).tickSizeOuter(0))
//         .append("text")
//         .attr("fill", "#000")
//         .attr("transform", "rotate(-90)")
//         .attr("y", "-4em")
//         .attr("x", "-8em")
//         .attr("text-anchor", "center")
//         .text(source["y-axis"])

//     // Draw graph
//     drawLines(data, lines, colors, lineNames, animateGraph);
//     svg.call(hover)

//     function hover() {

//         var circleClasses = [];
//         var textClasses = [];

//         for (let i = 0; i < Object.keys(source.columns).length; i++) {
//             let circle = ("circle" + i);
//             let line = ("line" + i)
//             circleClasses.push(circle)
//             textClasses.push(line)
//         }

//         // for (let column in source.columns) {
//         //     if (source.columns[column] === true) {
//         //         let circle = ("circle" + Object.keys(source.columns).indexOf(column))
//         //         let line = ("line" + Object.keys(source.columns).indexOf(column))
//         //         circleClasses.push(circle)
//         //         textClasses.push(line)
//         //     }
            
//         // }

//         console.log(circleClasses)

//         if (source.dates === "month") {
//             var bisect = d3.bisector(d => d.year).left,
//                 format = d3.format("+.0%"),
//                 dateFormat = d3.timeFormat("%b" + " " + "%Y")
//         }
//         else if (source.dates === "day") {
//             var bisect = d3.bisector(d => d.year).left,
//                 format = d3.format("+.0%"),
//                 dateFormat = d3.timeFormat("%b" + " " + "%e" + " " + "%Y")
//         }
//         else {
//             var bisect = d3.bisector(d => d.year).left,
//             format = d3.format("+.0%"),
//             dateFormat = d3.timeFormat("%Y")
//         }

//         var focus = svg.append("g")
//             .attr("class", "focus")
//             .style("display", "none")
//             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//         focus.append("line")
//             .attr("stroke", "#666")
//             .attr("stroke-width", 1)
//             .attr("y1", -height + margin.top)
//             .attr("y2", -margin.bottom);

//         console.log(Object.keys(source.columns).length)
//         for (let i = 0; i < lines.length; i++) {
//             // console.log(lines.length)
//             focus.append("circle")
//                 .attr("class", circleClasses[i])
//                 .attr("r", 4)
//                 .attr("dy", 5)
//                 .attr("stroke", "steelblue")
//                 .attr("fill", "#fff");
//             focus.append("text")
//                 .attr("class", textClasses[i])
//                 // .attr("x", 260)
//                 .attr("x", lineNames[i].length*3.5+210)
//                 .attr("y", 45 + i*30)
//         }

//         focus.append("text")
//             .attr("class", "year_display")
//             .attr("text-anchor", "middle")
//             .attr("dy", ".35em");

//         var overlay = svg.append("rect")
//             .attr("fill", "none")
//             .attr("class", "overlay")
//             .attr("x", margin.left)
//             .attr("y", margin.top)
//             .attr("width", width - margin.right )
//             .attr("height", height - margin.bottom )
//             .on("mouseover", () => focus.style("display", null))
//             .on("mouseout", () => focus.style("display", "none"))
//             .on("mousemove", mousemove);

//         function mousemove() {

//             var x0 = x.invert(d3.mouse(this)[0]-50);

//             var i = bisect(data, x0, 1),
//                 d0 = data[i - 1],
//                 d1 = data[i],
//                 d = x0 - d0.year > d1.year - x0 ? d1 : d0;

//             focus.select("line")
//                 .attr("transform",
//                     "translate(" + x(d.year) + "," + height + ")");

//             // for (let column in source.columns) {
//             //     if (source.columns[column]) {   
//             //         tempStrCircle = "." + circleClasses[Object.keys(source.columns).indexOf(column)];
//             //         tempStrText = "." + textClasses[Object.keys(source.columns).indexOf(column)];

//             //         console.log(tempStrCircle)

//             //         if (d[column] === null) {
//             //             focus.selectAll(tempStrText)
//             //                 .text("No data")
//             //             focus.selectAll(tempStrCircle)
//             //                 .style("opacity", 0)
//             //         }
//             //         else {
//             //             focus.selectAll(tempStrText)
//             //                 .text(d[column].toLocaleString());
//             //             focus.selectAll(tempStrCircle)
//             //                 .attr("r", "4")
//             //                 .attr("stroke", "black")
//             //                 .style('opacity', 100)
//             //                 .attr("transform",
//             //                     "translate(" + x(d.year) + "," + y(d[column]) + ")");
//             //         }
//             //     }
//             // }

//             for (let i = 0; i < circleClasses.length; i++) {
//                 let column = Object.keys(source.columns)[i]
//                 // tempStrCircle = "." + circleClasses[i];
//                 // tempStrText = "." + textClasses[i];
                
//                 if (source.columns[column]) {
//                     tempStrCircle = "." + circleClasses[Object.keys(source.columns).indexOf(column)];
//                     tempStrText = "." + textClasses[Object.keys(source.columns).indexOf(column)];
//                     // console.log(d[column])
//                     if (d[Object.keys(source.columns)[i]] === null) {
//                         focus.selectAll(tempStrText)
//                             .text("No data")
//                         focus.selectAll(tempStrCircle)
//                             .style("opacity", 0)
//                     }
//                     else {
//                         console.log(tempStrText)
//                         focus.selectAll(tempStrText)
//                             .text(d[column].toLocaleString());
//                         focus.selectAll(tempStrCircle)
//                             .attr("r", "4")
//                             .attr("stroke", "black")
//                             .style('opacity', 100)
//                             .attr("transform",
//                                 "translate(" + x(d.year) + "," + y(d[column]) + ")");
//                     } 
//                 }
//                 else {
//                     tempStrCircle = "." + circleClasses[Object.keys(source.columns).indexOf(column)];
//                     tempStrText = "." + textClasses[Object.keys(source.columns).indexOf(column)];
//                     focus.selectAll(tempStrText).text("")
//                     focus.selectAll(tempStrCircle).style("opacity", 0)
//                 }
            
//             };

//             focus.selectAll(".year_display")
//                 .attr("transform",
//                     "translate(" + x(d.year) + "," + (height + 0.5*margin.bottom) + ")")
//                 .text(dateFormat(d.year));
//         }
//     }

// };


const buildLineGraph = function (data) {
    // console.log(data)
    sourceGroups = getSelectedDataSource().groups;
    source = getSelectedDataSource()
    // setDataSource(source.name)
    
    graph = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    
    data = data.filter(d => d.year !== null);
    
    // console.log(newData)

    let lines = [];
    let colors = [];
    let lineNames = [];

    let title = graph.append("g")
        .attr("class", "title")
        .append("text")
        .attr("transform", `translate(${margin.top},0)`)
        .attr("fill", "#000")
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .attr("x", 350)
        .attr("y", 7)
        .text(source.title)

    for (let i = 0; i < Object.keys(source.columns).length; i++) {
        if (Object.values(source.columns)[i]) {
            let column = Object.keys(source.columns)[i];
            lines.push(d3.line()
                // .defined(function(d) {return d.close !== 0;})
                .defined(d => d[column] !== null )
                .x(function(d) { return x(d.year); })
                .y(function(d) { return y(d[Object.keys(source.columns)[i]]); }))
                // .defined(function(d) {return y(d[Object.keys(source.columns)[i]]);})
        colors.push(colorOptions[i])
        lineNames.push(source.line_names[i])}
    }
    minMaxColumn = findMaxColumn(source, data)
    
    x.domain(d3.extent(data, function(d) { return d.year; }));
    y.domain([d3.min(data, function(d) { return d[minMaxColumn[0]]; }), d3.max(data, function(d) { return d[minMaxColumn[1]]; })]);
   
    // Axis declaration
    let xAxis = setXAxisToYears();

    let divisor = 0
    if (minMaxColumn[2] <= 100) {divisor = 1}
    else if (minMaxColumn[2] < 1000) {divisor = 100}
    else if (minMaxColumn[2] < 100000) {divisor = 1000}
    else if (minMaxColumn[2] < 100000000) {divisor = 10000}
    else {divisor = 100000}

    let yAxis = graph.append("g")
        .attr("class", "y-axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y).tickFormat(function(d){return d/divisor}).tickSizeOuter(0))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", "-4em")
        .attr("x", "-8em")
        .attr("text-anchor", "center")
        .text(source["y-axis"])

    // Draw graph
    drawLines(data, lines, colors, lineNames, animateGraph);
    svg.call(hover)

    function hover() {

        let circleClasses = [];
        let textClasses = [];
        let trueSourceColumns = []

        for (let column in source.columns) {
            // console.log(source.columns[column])
            if (source.columns[column]) {
                trueSourceColumns.push(column)
            }
        }

        for (let i = 0; i < lines.length; i++) {
            let circle = ("circle" + i);
            let line = ("line" + i)
            circleClasses.push(circle)
            textClasses.push(line)
        }

        // for (let i = 0; i < trueSourceColumns.length; i++) {
        //     let circle = ("circle" + i);
        //     let line = ("line" + i)
        //     circleClasses.push(circle)
        //     textClasses.push(line)
        // }
        if (source.dates === "month") {
            var bisect = d3.bisector(d => d.year).left,
                format = d3.format("+.0%"),
                dateFormat = d3.timeFormat("%b" + " " + "%Y")
        }
        else if (source.dates === "day") {
            var bisect = d3.bisector(d => d.year).left,
                format = d3.format("+.0%"),
                dateFormat = d3.timeFormat("%b" + " " + "%e" + " " + "%Y")
        }
        else {
            var bisect = d3.bisector(d => d.year).left,
            format = d3.format("+.0%"),
            dateFormat = d3.timeFormat("%Y")
        }

        var focus = svg.append("g")
            .attr("class", "focus")
            .style("display", "none")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        focus.append("line")
            .attr("stroke", "#666")
            .attr("stroke-width", 1)
            .attr("y1", -height + margin.top)
            .attr("y2", -margin.bottom);

        for (let i = 0; i < lines.length; i++) {
            focus.append("circle")
                .attr("class", circleClasses[i])
                .attr("r", 4)
                .attr("dy", 5)
                .attr("stroke", "steelblue")
                .attr("fill", "#fff");
            focus.append("text")
                .attr("class", textClasses[i])
                // .attr("x", 260)
                .attr("x", lineNames[i].length*3.5+210)
                .attr("y", 45 + i*30)
        }

        focus.append("text")
            .attr("class", "year_display")
            .attr("text-anchor", "middle")
            .attr("dy", ".35em");

        var overlay = svg.append("rect")
            .attr("fill", "none")
            .attr("class", "overlay")
            .attr("x", margin.left)
            .attr("y", margin.top)
            .attr("width", width - margin.right )
            .attr("height", height - margin.bottom )
            .on("mouseover", () => focus.style("display", null))
            .on("mouseout", () => focus.style("display", "none"))
            .on("mousemove", mousemove);

        function mousemove() {

            var x0 = x.invert(d3.mouse(this)[0]-50);

            var i = bisect(data, x0, 1),
                d0 = data[i - 1],
                d1 = data[i],
                d = x0 - d0.year > d1.year - x0 ? d1 : d0;

            focus.select("line")
                .attr("transform",
                    "translate(" + x(d.year) + "," + height + ")");

            for (let i = 0; i < trueSourceColumns.length; i++) {
                
                let column = trueSourceColumns[i]
                // console.log(column)
                // if (source.columns[column]) {
                    tempStrCircle = "." + circleClasses[i];
                    tempStrText = "." + textClasses[i];
                    if (d[column] === null) {
                        focus.selectAll(tempStrText)
                            .text("No data")
                        focus.selectAll(tempStrCircle)
                            .style("opacity", 0)
                    }
                    else {
                        focus.selectAll(tempStrText)
                            .text(d[column].toLocaleString());
                        focus.selectAll(tempStrCircle)
                            .attr("r", "4")
                            .attr("stroke", "black")
                            .style('opacity', 100)
                            .attr("transform",
                                "translate(" + x(d.year) + "," + y(d[column]) + ")");
                        }
                
                // }
            }

                
            focus.selectAll(".year_display")
                .attr("transform",
                    "translate(" + x(d.year) + "," + (height + 0.5*margin.bottom) + ")")
                .text(dateFormat(d.year));
        }
    }

};

function filterYears(data) {
    output = []
    // console.log(start_year)
    // console.log(end_year)

    data.forEach(d => {
        if (d.year >= parseTime(start_year) && d.year <= parseTime(end_year)) {
            output.push(d)
        }
    })

    return output
    
}
// handle d3.csv file retrevial 
async function gatherData(source, conversion) {
   const data = await d3.csv(source, conversion);
   return filterYears(data);
}

// parse year data into Date objects that scaleTime() can handle
var parseTimeMonth = d3.timeParse("%m/%Y");
var parseTimeDay = d3.timeParse("%m/%d/%Y")
var parseTime = d3.timeParse("%Y");

// convert the data from strings to integers

 const fileConversion = function (d) {

    if (source.dates === "month") {
        if (d['year'].includes("-")) {
            parseTimeMonth = d3.timeParse("%m-%Y")
            d['year'] = parseTimeMonth(d['year'])
        }
        else {
            parseTimeMonth = d3.timeParse("%m/%Y")
            d['year'] = parseTimeMonth(d['year'])
        }
    }
    else if (source.dates === "day") {
        d['year'] = parseTimeDay(d['year'])
    }
    else {
        d['year'] = parseTime(d['year']);}

    // console.log(d.year)

    for (let column of Object.keys(source.columns)) {
        // console.log(d[column]) 
        if (d[column] !== "" && d.year !== null) {
            d[column] = +d[column].replace(/,/g, "");
        }
        else {
            d[column] = null;
        }
    }
    return d;
 };



// // template functions
// const templateFileConversion = function(d) {
//     d.year = parseTime(d.year);
//     // for each column/feature of the dataset, convert to numbers, return d
// };

// function templateGraph() {
//     // clear graph
//     d3.selectAll("svg>*").remove();
//     setDataSource("name from config file key-pair");
//     gatherData("filepath from config file", fileConversion).then(buildCitationGraph);
// }

function generateGraph(type) {
    // clear graph
    d3.selectAll("svg>*").remove();

    // start_year = source["min_year"]
    // end_year = source['max_year']
    setDataSource(type);
    // resetYears()

    gatherData(source.filepath, fileConversion).then((result) => {
        buildLineGraph(result)
    });

}

function regenerateGraph(type) {

    d3.selectAll("svg>*").remove();
    newSetDataSource(type)
    // start_year = source["min_year"]
    // end_year = source['max_year']
    // setYearOptions()

    gatherData(source.filepath, fileConversion).then((result) => {
        buildLineGraph(result)
    });
}


function setYearRange() {
    start_year = document.getElementById("start_year");
    end_year = document.getElementById("end_year").options[0].innerText;
    console.log(start_year)
    console.log(end_year)
    setYearOptions();
    // updateDataFromGroup()
}