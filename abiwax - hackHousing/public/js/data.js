/*eslint-env browser, jquery*/

/*globals records QUOTA_EXCEEDED_ERR*/
function chartsLoad(){
var SERVER_URL = "http://hackhousing.mybluemix.net";

var listbox = document.getElementById("province");
var selIndex = listbox.selectedIndex;
//var location = listbox.options[selIndex].value;
var location = listbox.options[selIndex].text; 
console.log(location);

  $.get(SERVER_URL + '/getByLocation',{'location':location}, function(record) {
    //console.log("Got response: " + record.BODY);
 if (record != null) {
console.log(record);
var options = {
				scaleOverride: true,
				scaleSteps: 5,
				scaleStepWidth: 5,
				scaleStartValue: 0,
				scaleShowGridLines : false,
				scaleShowLabels : false,
				scaleFontSize: 0,
				scaleLineColor: 'transparent',
    			scaleShowHorizontalLines: false,
    			scaleShowVerticalLines: false,
    			barShowStroke : false,
				barStrokeWidth : 2,
				barValueSpacing : 2,
   				barDatasetSpacing : 1,
				annotateDisplay: true,
				animation: false

			};
			var barData = {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
            fillColor: "rgba(252,252,252,1.0)",
            highlightFill: "rgba(232,232,232,0.75)",
            data: [10, 20, 15, 12, 16, 20, 10]
        }]
			};
			var data = {
    labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
        {
            label: "Housing Selling Price Trend",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
var data = {
    labels:record.map(function(rec){
          return rec.Year;
        }),
    datasets: [
        {
            label: "Housing Selling Price Trend",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(64,64,64,1.0)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: record.map(function(rec){
          return rec.Value;
        }),
        }
    ]
};
var lineOptions = {

    scaleShowGridLines : true,
    scaleGridLineColor : "rgba(0,0,0,.05)",
    scaleGridLineWidth : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve : true,
    bezierCurveTension : 0.4,
    pointDot : true,
    pointDotRadius : 4,
    pointDotStrokeWidth : 1,
    pointHitDetectionRadius : 20,
    datasetStroke : true,
    datasetStrokeWidth : 2,
    annotateDisplay: true,
    datasetFill : true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};


			var context = document.getElementById('canvasBox1').getContext('2d');
			context.canvas.width = 150;
			context.canvas.height = 120;
			window.myBar = new Chart(context).Bar(barData, options);
			var context1 = document.getElementById('canvasBox2').getContext('2d');
			context1.canvas.width = 150;
			context1.canvas.height = 120;
			window.myBar = new Chart(context1).Bar(barData, options);
			var context2 = document.getElementById('canvasBox3').getContext('2d');
			context2.canvas.width = 150;
			context2.canvas.height = 120;
			window.myBar = new Chart(context2).Bar(barData, options);
			var context3 = document.getElementById('canvasBox4').getContext('2d');
			context3.canvas.width = 150;
			context3.canvas.height = 120;
			window.myBar = new Chart(context3).Bar(barData, options);
			var context4 = document.getElementById('actual').getContext('2d');
			context4.canvas.width = 950;
			context4.canvas.height = 450;
			window.myLineChart = new Chart(context4).Line(data, lineOptions);
	


}
		
		
 }).fail(function(error) {
    alert(error.responseText);
  });

}