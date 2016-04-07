

/*eslint-env browser */
/*globals settingsB settingsA*/
function getSettings(){
	var province = document.getElementById("province");
	var provinceValue = province.options[province.selectedIndex].value;
	var income = document.getElementById("incomevalue").innerHTML;

	if (province != "") {
		settingsA["province"] = provinceValue;
		settingsA["income"] = income;
	};
	alert(settingsA["income"]); 
}

function getSettingsB(){
	var province = document.getElementById("provinceB");
	var provinceValue = province.options[province.selectedIndex].value;
	var city = document.getElementById("cityB");
	var cityValue = city.options[city.selectedIndex].value;
	var structure = document.getElementById("structureB");
	var structureValue = structure.options[structure.selectedIndex].value;
	var unit = document.getElementById("unitB");
	var unitValue = unit.options[unit.selectedIndex].value;

	if (province != "") {
		settingsB["province"] = provinceValue;
		settingsB["city"] = cityValue;
		settingsB["structure"] = structureValue;
		settingsB["unit"] = unitValue;
	};
	alert(settingsB["province"]); 
}

function getSettingsR(){
	var province = document.getElementById("provinceR");
	var provinceValue = province.options[province.selectedIndex].value;
	var city = document.getElementById("cityR");
	var cityValue = city.options[city.selectedIndex].value;
	var structure = document.getElementById("structureR");
	var structureValue = structure.options[structure.selectedIndex].value;
	var unit = document.getElementById("unitR");
	var unitValue = unit.options[unit.selectedIndex].value;

	if (province != "") {
		settingsB["province"] = provinceValue;
		settingsB["city"] = cityValue;
		settingsB["structure"] = structureValue;
		settingsB["unit"] = unitValue;
	};
	alert(settingsB["province"]); 
}
