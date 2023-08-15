// get data source
function getSelectedDataSource() {
    for (let i = 0; i < ccc_dataSources.length; i++) {
        source =  ccc_dataSources[i]
        if (source.selected) {
            // console.log(source)
            return source;
        }
    }
    
}

var source = getSelectedDataSource();

// update data source and Groups, set off state for other data sources
function setDataSource(filename) {
    output = ""
    current = getSelectedDataSource()
    source = getSelectedDataSource()
    ccc_dataSources.forEach(set => {
        if (set.name == filename) {
            set.selected = true;
            // console.log(set)
            output = set
        }
        else 
            set.selected = false
    })
    // setColumnOptions()
    setYearOptions()

    footer = document.getElementById("dataSource")
    footer.innerHTML = 'Data is from <a href="'+ Object.values(source['source'])+ '">' + Object.keys(source['source'])+'</a>.'
    notes = document.getElementById("notes")
    if (source.notes) {
        notes.innerHTML = "*Note: " + source.notes
    }
    else {
        notes.innerHTML = ""
    }
    
    if (current != output) 
        // setGroupSelectorGroups();
        setColumnOptions() 
    // console.log(output)
    return output
}

function buildNavBar() {
    console.log("hello")

    let categories = {
        "transportation": []
    }

    for (let i = 0; i < ccc_dataSources.length; i++) {
        source =  ccc_dataSources[i]
        console.log(categories[source.category])
        categories[source.category]
        
        // categories[source.category] += source
    }

    console.log(categories)
    
    let navBar = document.getElementById("navbarsExample10")

    let nav = document.getElementsByClassName("navbar-nav")

    for (let category in categories) {
        // console.log(categories[category])
        navBar.innerHTML += '<ul class="navbar-nav"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+category+'</a><div class="dropdown-menu" id="dropdown-menu" aria-labelledby="dropdown10"></div></li></ul>'
        for (item in categories[category]) {
            // console.log(categories[category][item])
            let navBox = document.getElementById("dropdown-menu")
            // console.log(navBox)
            navBox.innerHTML += '<a class="dropdown-item" href="javascript:void(0)" onclick="generateGraph('+ "'" + categories[category][item]+ "'"+');resetDataGroups();">'+categories[category][item]+'</a>'
        }
    }

}

// set Group to true for the selected source
function setGroup(groupName) {
    source = getSelectedDataSource()
    set_all_other_keys_false(source.groups, groupName);
    Object.keys(source.groups).forEach(key => {
        if (key == groupName) {
            source.groups[key] = true;
        }
    })
}

function setColumnOptions() {
    source = getSelectedDataSource()
    // console.log(source)
    var container  = document.getElementById("filters_form")
    let currentOptions = document.getElementsByClassName("form-check")
    
    while (currentOptions[0]) {
        currentOptions[0].parentNode.removeChild(currentOptions[0])
    }
    
    if (source.doubleYAxis){
        let index = 0
        for (let side in source.columns) {
            for (let i = 0; i < Object.keys(source.columns[side]).length; i++) {
                lineName = source['line_names'][side][i]
                tempStr = "flexCheckDefault" + String.fromCharCode(index)
                container.innerHTML += '<div class="form-check" id="form-check" ><input class="form-check-input" type="checkbox" value="" id=' + tempStr + ' checked><label class="form-check-label" for=' + tempStr + '>' + lineName + '</label></div>'
                index += 1
            }
        }
    }
    else {
        for (let i = 0; i < Object.keys(source.columns).length; i++) {
            lineName = source['line_names'][i]
            tempStr = "flexCheckDefault" + String.fromCharCode(i)
            container.innerHTML += '<div class="form-check" id="form-check" ><input class="form-check-input" type="checkbox" value="" id=' + tempStr + ' checked><label class="form-check-label" for=' + tempStr + '>' + lineName + '</label></div>'
        }
    }
    
}

function updateDataGroups() {
    source = getSelectedDataSource()

    let currentOptions = document.getElementsByClassName("form-check")

    if (source.doubleYAxis) {
        let index = 0
        for (let side in source.columns) {
            for (let column in source.columns[side]) {
                // let column = Object.keys(source.columns)[side][i];
                let checkbox = currentOptions[index].querySelector('.form-check-input')
                if (checkbox.checked == false) {
                    source.columns[side][column] = false
                }
                else {
                    source.columns[side][column] = true
                }
                index += 1
            }
        }
        console.log(source.columns)
    }
    else {     
        for (let i = 0; i < currentOptions.length; i++) {
            let column = Object.keys(source.columns)[i];
            console.log(source.columns[column])
            let checkbox = currentOptions[i].querySelector('.form-check-input')
            if (checkbox.checked == false) {
                source.columns[column] = false
            }
            else {
                source.columns[column] = true
            }
            
    }}

    console.log(source.columns)

    generateGraph(source.name)

}

function resetDataGroups() {
    source = getSelectedDataSource()

    if (source.doubleYAxis) {
        for (let side in source.columns) {
            for (let column in source.columns[side]) {
                source.columns[column] = true
            }
        }
    }
    else {
        for (let column in source.columns) {
            source.columns[column] = true
        }
    }

    start_year = source["min_year"]
    end_year = source["max_year"]


    // generateGraph(source.name)
}


// set year range in selection box, based on current data source
function setYearOptions() {
    // console.log("set year options")
    source = getSelectedDataSource();
    min_year = source["min_year"]
    max_year = source["max_year"]
    
    start = document.getElementById("start_year");
    contains_start = false
    end = document.getElementById("end_year");
    contains_end = false
    // reset options, one for each year in range
    for (let i = start.length; i >= 0 ; i--) {
        start.remove(i)
    }
    for (let i = end.length; i >= 0 ; i--) {
        end.remove(i)
    }

    for (let i = min_year; i < max_year; i++) {
        start.options[start.length] = new Option(i.toString(), i.toString());
        if (i === start_year){
            contains_start = true}
    }
    for (let i = max_year; i >= min_year; i--) {
        end.options[end.length] = new Option(i.toString(), i.toString());
        if (i === end_year){
            contains_end = true}
    }
    // console.log(start_year)
    // console.log(end_year)
    start.value = contains_start ? start_year : min_year
    end.value = contains_end ? end_year : max_year
    
}

function updateYearRange() {
    console.log("updating year")
    start_sel = document.getElementById("start_year");
    end_sel = document.getElementById("end_year");
    start_year = parseInt(start_sel.options[start_sel.selectedIndex].text)
    end_year = parseInt(end_sel.options[end_sel.selectedIndex].text)
    // console.log("--update--")
    // console.log("update year" + start_year)
    console.log(end_year)
    setYearOptions()
    // updateDataFromGroup()
    // window['generateGraph'](source.name);
    generateGraph(source.name)
    
}

// updates graph to chosen sub-group from dataSource
function updateDataFromGroup() {
//    console.log("updating Group")
   let sel =  document.getElementById("Group")
   let current_group = sel.options[sel.selectedIndex].text;
   // update ccc_dataSources
   setGroup(current_group)
   // rebuild graph
   window['generateGraph'](source.name);
   

}
// updates the options in sub-group selector based on chosen data source
function setGroupSelectorGroups() {
    // console.log("setting groups for data source")
    group_selector = document.getElementById("Group");
    // set first option
    group_selector.options[0] = new Option(full_data_string, "full");
    // add Groups of the selected source to Group selector (dropdown menu)
    currentSource = getSelectedDataSource()
    let groups = currentSource.groups
    // clear the selector
    for (i = group_selector.length; i >= 0; i--)
        group_selector.remove(i);
    Object.keys(groups).forEach(group => {
        group_selector.options[group_selector.options.length] = new Option(group, group);
    })
    setYearOptions()
    
    // for (let i = 0; i < currentSource.groups.length; i++) {
    //     group_selector.options[group_selector.options.length] = new Option(groups[i], groups[i]);
    //  }
   // check that the values haven't already been updated
//    if (ccc_dataSources.internet.selected) {
//       let text = [full_data_string, "China (domestic)", "United States (domestic)", "Broadband", "Access", "Mobile"]
//       let values = ["full", "chinaOnly", "usOnly", "broadband", "access", "mobile"];
//       group_selector.length = 0;
//       for (let i = 0; i < values.length; i++) {
//          group_selector.options[group_selector.options.length] = new Option(text[i], values[i]);
//       } 
//    }
//    else if (ccc_dataSources.roads.selected) {
//       let text = [full_data_string, "China (domestic)", "United States (domestic)", "Highways", "Expressways"]
//       let values = ["full", "chinaOnly", "usOnly", "highways", "expressways"];
//       group_selector.length = 0;
//       for (let i = 0; i < values.length; i++) {
//          group_selector.options[group_selector.options.length] = new Option(text[i], values[i]);
//       } 
//    }
   // these ccc_dataSources have no groups
//    else if ( (ccc_dataSources.citations.selected || ccc_dataSources.papers.selected || ccc_dataSources.patent.selected) && (group_selector.options.length < 1 || group_selector.options[group_selector.options.length-1].text != full_data_string) ) {
//       let text = [full_data_string]
//       let values = ["full"];
//       for (let i = 0; i < values.length; i++) {
//          group_selector.length = 0;
//          group_selector.options[0] = new Option(text[i], values[i]);
//       } 
//    }
//    updateDataFromGroup();
}

function set_all_other_keys_false(dict, trueKey) {
    Object.keys(dict).forEach(key => {
        if(key != trueKey )
        dict[key] = false;
    });
}
// Data download function
function downloadDataSource() {
    let permissionGranted = confirm("Press OK to download the csv data file.");
    if (permissionGranted) {
    //   base = "data/"
    download_button = document.getElementById("source_downloader");
    Object.keys(ccc_dataSources).forEach(key => {
        if (ccc_dataSources[key].selected) {
            download_button.href = ccc_dataSources[key].filepath;
            console.log(ccc_dataSources[key].filepath);
        }
        });
    }
    else 
        console.log("User cancelled file download.")
}
// Data download function

function downloadSvg() {
    let permissionGranted = confirm("Press OK to download the svg graphic displayed on the webpage.");
    if (permissionGranted) {
    var svg = document.getElementsByClassName("svg-content")[0];
    var serializer = new XMLSerializer();
    var source = serializer.serializeToString(svg);
    source = source.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
    
    source = source.replace(/ns\d+:href/g, 'xlink:href'); // Safari NS namespace fix.
    
    
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    
    
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, source], { type: "image/svg+xml;charset=utf-8" });
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "svg-graphic";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    }
    else 
        console.log("User cancelled file download.")
}
// Help modal
function infoModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }
}

// animation on/off
function toggleAnimation() {
    animate = document.getElementById("animation_btn")
//    text = document.getElementById("animate_text");
    if (animate.className == "fa-solid fa-video fa-2x") {
        animate.className = "fa-solid fa-video-slash fa-2x";
        animateGraph = false;
        updateDataFromGroup();
        //   text.textContent = "No Animation"
    }
    else {
        animate.className = "fa-solid fa-video fa-2x";
        animateGraph = true;
        updateDataFromGroup();
        //   text.textContent = "Animate!"
    }

}
// stack chart
function toggleStackChart() {
    fillOpacity = "1"
    animateGraph = false;
    // updateDataSource();
}
// line chart
function toggleLineChart() {
    fillOpacity = "0";
    animateGraph = true;
    // updateDataSource();
}
// histogram
function toggleHistogramChart() {
    id = 'histogram_toggle';
    // Turn off individually, turn on and shut other toggles off
    if (document.getElementById(id).className == "fa-solid fa-toggle-on")
    toggle(id);
    else 
    multiToggle(id);
    // Change current graph to stack view

}
// combines graph type toggles in one func 
function updateGraphType() {
    let current_value = document.getElementById("graphtype_selector").elements["graph_type"].value;
    let values = ["line", "stack", "histogram"];
    let funcs = [toggleLineChart, toggleStackChart, toggleHistogramChart]
    for (let i = 0; i < values.length; i++) {
    if (values[i] == current_value) {
        funcs[i]();
        updateDataFromGroup();
    }
    }

}
/*
// https://stackoverflow.com/questions/68496555/d3-js-draw-circle-between-dash
      // dashed and dotted line
      else if (count == 2) {
         let dashing = "0,16,0,48";
         let path1 = graph.append("path")
            .datum(data)
            .attr("fill-opacity", "0")
            .attr("stroke", colors[i])
            // .style("stroke-dasharray", dashing)
            .attr("stroke-width", strokeWidth)
            .attr("d", lines[i]);
         animateDashedLine(path1, "5,32,10,62");
         let paths.push(raph.append("path")
            .datum(data)
            .attr("fill-opacity", "0")
            .attr("stroke", colors[i])
            // .style("stroke-dasharray", dashing)
            // "10, 20, 10, 38"
            // .attr("stroke-dashoffset", "32" )
            .attr("stroke-width", strokeWidth)
            .attr("d", lines[i]);
         animateDottedLine(path, dashing);
         // update legend
         graph.append("line")
            .attr("x1", legXPos - 30)
            .attr("x2", legXPos)
            .attr("y1",legYPos+ 30*(i+1))
            .attr("y2",legYPos+ 30*(i+1))
            .style("stroke-dasharray", "10,3")
            .attr("stroke-linecap","square")
            .style("stroke", colors[i])
         graph.append("line")
            .attr("x1", legXPos - 28)
            .attr("x2", legXPos)
            .attr("y1",legYPos+ 30*(i+1))
            .attr("y2",legYPos+ 30*(i+1))
            .style("stroke-dasharray", "0 15")
            .attr("stroke-linecap","round")
            .attr("stroke-width", strokeWidth)
            .style("stroke", colors[i])
         graph.append("text")
            .attr("x", legXPos + textOffsetX)
            .attr("y", legYPos+ 30*(i+1))
            .text(lineNames[i])
            .attr("alignment-baseline","middle")
      }
    */ 