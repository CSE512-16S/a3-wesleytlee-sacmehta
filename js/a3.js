function plotTrellis(seriesData){
	var colors = d3.scale.category20();
		nv.addGraph(function() {
			var	chart = nv.models.lineChart()
				.x(function(d) { return d[0] })
				.y(function(d) { return d[1] })
                .margin({left: 100})
                .useInteractiveGuideline(true) 
                .duration(100)
                .showLegend(true)
                .showYAxis(true)
                .showXAxis(true);
				
			chart.xAxis.axisLabel('Time (in sec)').tickFormat(d3.format(',f'));

			chart.yAxis.axisLabel('Utilization (in %)')	;
			chart.yAxis.tickFormat(d3.format(',.0f'));

			
			//chart.legend.vers('furious');;;
			d3.select("body").select("#div1").select("#div11").select("#div11b").select("#div11b1").select('#chart1')
				.datum(seriesData)
				.transition().duration(1000)
				.call(chart)
				.each('start', function() {
					setTimeout(function() {
						d3.selectAll('#chart1 *').each(function() {
							if(this.__transition__)
								this.__transition__.duration = 1;
						})
					}, 0)
				});
			nv.utils.windowResize(chart.update);
			return chart;
		});
}

function processDataInde(data){
			var labelVar = "Time";
			var width = 960,
				size = 230,
				padding = 20;
			
			var utilByCat = {},
			overallName = d3.keys(data[0]).filter(function (key) { 
								if (key == "Overall CPU Utilization" || key == "RAM Usage" || key == "GPU Utilization" || key == "GPU Memory Utilization")
									return key
								});
			var n = overallName.length;
			
			xAxis.tickSize(size * n);
			yAxis.tickSize(-size * n);
			
			overallName.forEach(function(util) {
				utilByCat[util] = function(d) { console.log(d[util]);return d[util]; };
			 });
			 console.log(data);
			 var svgNew = d3.select("body").append("svg")
						  .attr("width", size * n + padding)
						  .attr("height", size * n + padding)
						.append("g")
						  .attr("transform", "translate(" + padding + "," + padding / 2 + ")");
			 
			 for(i=0;i< n;i++){
				category = overallName[i];
				series = utilByCat[category];
				console.log(utilByCat);
				
				/*svgNew.append("g")
					.attr("class", "x axis")
					 // .attr("transform", "translate(0," + height + ")")
					  .call(xAxis);
				
				svgNew.append("g")
					.attr("class", "y axis")
					.call(yAxis);
				
				svg2.append("path")
					.attr("class", "line")
					.attr("d", line(series));*/
				
				// Add the valueline path.
				/*svg2.append("path")
					.attr("class", "line")
					.attr("d", valueline(data));

				// Add the X Axis
				svg2.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis);

				// Add the Y Axis
				svg2.append("g")
					.attr("class", "y axis")
					.call(yAxis);*/
				
			 }
			 
			
		}
	var brushCell;
	function brushstart(p) {
		if (brushCell !== this) {
		d3.select(brushCell).call(brush.clear());
		x.domain(domainByTrait[p.x]);
		y.domain(domainByTrait[p.y]);
		brushCell = this;
		}
	}
	
	

	// Highlight the selected circles.
	function brushmove(p) {
		var e = brush.extent();
		svg.selectAll("circle").classed("hidden", function(d) {
		return e[0][0] > d[p.x] || d[p.x] > e[1][0]
		  || e[0][1] > d[p.y] || d[p.y] > e[1][1];
		});
	}

	// If the brush is empty, select all circles.
	function brushend() {
		if (brush.empty()) svg.selectAll(".hidden").classed("hidden", false);
	}
		
		
		function processData(data, svgEle){
			var labelVar = "Time";
			var overallName = d3.keys(data[0]).filter(function (key) { 
								if (key == "Overall CPU Utilization" || key == "RAM Usage" || key == "GPU Utilization" || key == "GPU Memory Utilization")
									return key
								});
			
			
			color.domain(overallName);//varNames
			
			var seriesData = overallName.map(function (name) {
							  return {
								name: name,
								values: data.map(function (d) {
								  return {name: name, label: d[labelVar], value: +d[name]};
								})
							  };
							});
		
			
			//var expensesAvgAmount = d3.nest()
			//							  .key(function(d) { return d.name; })
			//							  .rollup(function(d) { return d.length; })
			//							  .entries(seriesData);
			//console.log(JSON.stringify(expensesAvgAmount));
			
			x.domain(data.map(function (d) { return d.Time; }));
			
			y.domain([
					  d3.min(seriesData, function (c) { 
						return d3.min(c.values, function (d) { return d.value; });
					  }),
					  d3.max(seriesData, function (c) { 
						return d3.max(c.values, function (d) { return d.value; });
					  })
					]);
			
			svgEle.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis)
				.append("text")
				.attr("x", width/2)
				.attr("y", 30)
				.style("text-anchor", "end")
				.text("Time (in sec)");
				
			svgEle.append("g")
				.attr("class", "y axis")
				.call(yAxis)
			  .append("text")
				.attr("transform", "rotate(-90)")
				.attr("y", 6)
				.attr("dy", ".71em")
				.style("text-anchor", "end")
				.text("Utilization (in %)");
			
			var series = svgEle.selectAll(".series")
				.data(seriesData)
			  .enter().append("g")
				.attr("class", "series");
			
			series.append("path")
			  .attr("class", "line")
			  .attr("d", function (d) { return line(d.values); })
			  .style("stroke", function (d) { return color(d.name); })
			  .style("stroke-width", "1px")
			  .style("fill", "none");
			
			series.selectAll(".point")
			  .data(function (d) { return d.values; })
			  .enter().append("circle")
			   .attr("class", "point")
			   .attr("cx", function (d) {return x(d.label) + x.rangeBand()/2; })
			   .attr("cy", function (d) { return y(d.value); })
			   .attr("r", "2px")
			   .style("fill", function (d) { return color(d.name); })
			   .style("stroke", "grey")
			   .style("stroke-width", "1px")
			   .on("mouseover", function (d) { showPopover.call(this, d); })
			   .on("mouseout",  function (d) { removePopovers(); });
			   
			var legend = svgEle.selectAll(".legend")
				.data(overallName.slice().reverse())
			  .enter().append("g")
				.attr("class", "legend")
				.attr("transform", function (d, i) { return "translate(55," + i * 20 + ")"; });
				
			legend.append("rect")
				.attr("x", width - 10)
				.attr("width", 10)
				.attr("height", 10)
				.style("fill", color)
				.style("stroke", "grey");
			legend.append("text")
				.attr("x", width - 12)
				.attr("y", 6)
				.attr("dy", ".35em")
				.style("text-anchor", "end")
				.text(function (d) { return d; });
		}

		function removePopovers () {
			  $('.popover').each(function() {
				$(this).remove();
			  }); 
		}
			
		function showPopover (d) {
		  $(this).popover({
			title: d.name,
			container: 'body',
			placement: 'auto top',
			trigger: 'hover',
			html : true,
			content: function() { 
			  return "Time (in sec): " + d.label + 
					 "<br/>Utilization (in %): " + d.value; }
		  });
		  $(this).popover('show')
		}