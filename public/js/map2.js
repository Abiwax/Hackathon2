/*eslint-env browser, jquery*/
/*globals google */
var SERVER_URL = "http://hackhousing.mybluemix.net";
function chartsLoadB(){	
//Map parameter

	var geocoder;
  	var map;
  	var listbox1 = document.getElementById("provinceR");
	var selIndex1 = listbox1.selectedIndex;
//var location = listbox1.options[selIndex].value;
  	var province = listbox1.options[selIndex1].text
  	var listbox2 = document.getElementById("cityR");
	var selIndex2 = listbox2.selectedIndex;
//var location = listbox.options[selIndex].value;
  	var city =listbox2.options[selIndex2].text;
    var address =city +", " + province;
  	  	var listbox3= document.getElementById("structureR");
	var selIndex3 = listbox3.selectedIndex;
var structure = listbox3.options[selIndex3].value;
 // 	var structure =listbox3.options[selIndex3].text;
  	var listbox4 = document.getElementById("unitR");
	var selIndex4 = listbox4.selectedIndex;
var unit = listbox4.options[selIndex4].value;
  	//var city =listbox4.options[selIndex4].text;
    console.log(structure);
    console.log(unit);
	if(city == "-Select-" || province == "-Select-" || structure == "-Select-" || unit == "-Select-"){
		alert("Please select a correct value")
	}
	else{
  $.get(SERVER_URL + '/getActualRent',{'province':province,'city':city,'structure':structure,'unit':unit}, function(record) {
    //console.log("Got response: " + record.BODY);
 if (record.length == 0) {
  //Chart parameter declaration
  alert("This data is not yet available, please visit another time.");
}else{
	$.get(SERVER_URL + '/getPredictedRent',{'province':province,'city':city,'structure':structure,'unit':unit}, function(record2) {
    //console.log("Got response: " + record.BODY);
 if (record2.length == 0) {
  //Chart parameter declaration
  alert("This data is not yet available, please visit another time.");
}else{
  $(".boxCharts").show();
			var data = {
    labels: record.map(function(rec){
          return rec.Year;
        }),
    datasets: [
        {
            label: "Actual Price",
            fillColor: "rgba(87,217,98,0.6)",
            strokeColor: "rgba(1,59,5,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#012B04",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: record.map(function(rec){
          return rec["Annual Rent"];
        })
        }
    ]
};
 console.log(record.map(function(rec){
          return rec;
        }));
  console.log(record.map(function(rec){
          return rec.Year;
        }))
var data2 = {
    labels: record2.map(function(rec2){
          return rec2.Year;
        }),
    datasets: [
        {
            label: "Predicted Rent",
            fillColor: "rgba(161,212,230,0.6)",
            strokeColor: "rgba(1,42,59,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#012829",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: record2.map(function(rec2){
          return rec2["Annual Rent"];
        })
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
    datasetFill : true,
    annotateDisplay: true,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};





  	//Map
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("mapSection"), myOptions);
    if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
                { content: '<b>'+address+'</b>',
                  size: new google.maps.Size(150,50)
                });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

          } else {
            alert("No results found");
          }
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }

// Charts
			var context1 = document.getElementById('actual').getContext('2d');
var context2 = document.getElementById('predicted').getContext('2d');
// Charts
if($(window).width() > 500)
    {
      
      context1.canvas.width = 475;
      context1.canvas.height = 400;
      window.myLineChart = new Chart(context1).Line(data, lineOptions);
      
      context2.canvas.width = 475;
      context2.canvas.height = 400;
      window.myLineChart = new Chart(context2).Line(data2, lineOptions);
    }
    else if($(window).width() < 500)
    {
      
      context1.canvas.width = 300;
      context1.canvas.height = 230;
      window.myLineChart = new Chart(context1).Line(data, lineOptions);
      
      context2.canvas.width = 300;
      context2.canvas.height = 230;
      window.myLineChart = new Chart(context2).Line(data2, lineOptions);
    }

		}

		}).fail(function(error) {
    alert(error.responseText);
  });
  }
  }).fail(function(error) {
    alert(error.responseText);
  });

  }
}
window.addEventListener("resize", drawCanvas, false);

function drawCanvas() {
  var canvas = document.getElementById("actual");
  var canvas2 = document.getElementById("predicted");
  console.log(canvas);
   resizeCanvas(canvas,canvas2);
}
function resizeCanvas(a,p) {
  // Our canvas must cover full height of screen
  // regardless of the resolution
  var canvas = a;
  var canvas2 = p;
  console.log(canvas);
  var hei = document.getElementById("hei");
  var height = 230;
  var wid = 300;
  var w = window.innerWidth;
  // So we need to calculate the proper scaled width
  // that should work well with every resolution
  var ratio = wid/height;
  if (w < 500) {
  var width = height;
  canvas.style.width = wid;
  canvas.style.height = height;
  canvas2.style.width = wid;
  canvas2.style.height = height;
}
else if(w > 500){
var width = height* ratio;
  canvas.style.width = 475;
  canvas.style.height = 400;
  canvas2.style.width = 475;
  canvas2.style.height = 400;
}
}
