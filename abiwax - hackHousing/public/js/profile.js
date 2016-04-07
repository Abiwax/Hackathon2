var SERVER_URL = "http://ec2-54-201-43-180.us-west-2.compute.amazonaws.com:3000";

function pData() {

	try {
		var profile = JSON.parse(localStorage.getItem(
			"profile"));
	} catch (e) {
		/* Google browsers use different error 
		 * constant
		 */
		if (window.navigator.vendor ===
			"Google Inc.") {
			if (e == DOMException.QUOTA_EXCEEDED_ERR) {
				alert(
					"Error: Local Storage limit exceeds."
				);
			}
		} else if (e == QUOTA_EXCEEDED_ERR) {
			alert("Error: Saving to local storage.");
		}

		console.log(e);
	}
	if (profile != null) {
		for (var i = 0; i < profile.length; i++) {
			var pro = profile[i];
		}
		$("#firstName").append(" " + pro.FirstName + " ");
		$("#fullName").append(" " + pro.FirstName + " " + pro.LastName);
		$("#profile-body").append(
			'<div class="bio"> <i class="iconBio"></i> Bio Graph </div> ' +
			'<div> <i class="iconID"></i> ID Number: ' + pro.id + "</div>" +
			'<div> <i class="iconUsername"></i> Username: ' + pro.Username + '</div>' +
			'<div> <i class="iconFull"></i> Full Name: ' + pro.FirstName + " " + pro.LastName + '</div>' +
			'<div>  <i class="iconBirth"></i> Birth Date: ' + pro.birthDay + " " + pro.birthMonth + " " + pro.birthYear + '</div>' +
			' <div> <i class="iconSex"></i> Sex: ' + pro.Sex + '</div>' +
			' <div> <i class="iconLevel"></i> Job Level: ' + pro.Level + '</div>' +
			'<div> <i class="iconWork"></i> Work Start Date: ' + pro.EmpStartDate + '</div>' +
			'<div> <i class="iconEmail"></i> Email: ' + pro.Email + '</div>' +
			'<div> <i class="iconMobile"></i> Mobile: ' + pro.Mobile + '</div>' +
			'<div> <i class="iconAddress"></i> Address: ' + pro.Address + '</div>' +
			'<div> <i class="iconPost"></i> Postal Code: ' + pro.PostalCode + '</div>' +
			'<div> <i class="iconSin"></i> SIN: ' + pro.SIN + '</div>'
		);
		if (localStorage.getItem("workRecord") ===
			null) {
			$("#canvas").append("No data exist");
		} else {
			var workRecords = JSON.parse(localStorage.getItem(
				"workRecord"));
			for (var i = 0; i < workRecords.length; i++) {
				var rec = workRecords[i];

			}
			var startWithDataset = 1;
			var startWithData = 1;

			var options = {
				animationStartWithDataset: startWithDataset,
				animationStartWithData: startWithData,
				animationSteps: 200,
				graphTitle: "Dates vs Hours Worked",
				graphTitleFontSize: 18,
				inGraphDataShow: true,
				legend: true,
				annotateDisplay: true,
				scaleOverride: true,
				scaleSteps: 10,
				scaleStepWidth: 2,
				scaleStartValue: 0



			};
			var barData = {
				labels: workRecords.map(function(rec) {
					return rec.Date;
				}),
				datasets: [{
					label: 'Hours Worked',
					fillColor: '#382765',
					data: workRecords.map(function(rec) {
						return rec.NoOfHours;
					})
				}]
			};
			var context = document.getElementById('canvas').getContext('2d');
			var w = window.innerWidth;
			if (w < 500) {
			context.canvas.width = 350;
			context.canvas.height = 350;
		}
		else{
			context.canvas.width = 500;
			context.canvas.height = 350;
		}
			var clientsChart = new Chart(context).Bar(barData, options);
			



		}

	}
}


window.addEventListener("resize", drawCanvas, false);

function drawCanvas() {
	var canvas = document.getElementById("canvas");
	console.log(canvas);
   resizeCanvas(canvas);
}
function resizeCanvas(e) {
	// Our canvas must cover full height of screen
	// regardless of the resolution
	var canvas = e;
	console.log(canvas);
	var hei = document.getElementById("hei");
	var height = 350;
	var wid = 500;
	var w = window.innerWidth;
	// So we need to calculate the proper scaled width
	// that should work well with every resolution
	var ratio = wid/height;
	if (w < 500) {
	var width = height;
	canvas.style.width = width;
	canvas.style.height = height;
}
else if(w > 500){
var width = height* ratio;
	canvas.style.width = width;
	canvas.style.height = height;
}
}
