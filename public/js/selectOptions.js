
/*globals cityB */
var provinceArr = [];
var cityArr = [];
var cityArrB = [];

provinceArr = {'AB': 'Alberta', 'BC':'British Columbia', 'MB':'Manitoba', 'NB': 'New Brunswick', 'NL':'Newfoundland and Labrador','NS':'Nova Scotia', 'NT':'Northwest Territories', 'ON':'Ontario', 'QC':'Quebec', 'SK':'Saskatchewan'} 

// provinceArr = {'CA':'CA', 'AB': 'AB', 'BC':'BC', 'MB':'MB', 'NB': 'NB', 'NL':'NL','NS':'NS', 'NT':'NT', 'NU':'NU', 'ON':'ON', 'PE':'PE', 'QC':'QC', 'SK':'SK', 'YT':'YT'} 

// cityArr[province] = {city1:city1, city2:city2}


cityArr['NL'] = {'Gander':'Gander','Bay Roberts':'Bay Roberts', 'Corner Brook':'Corner Brook', 'Grand Falls-Windsor':'Grand Falls-Windsor', 'St. John\'s':'St. John\'s'}

cityArr['PE'] = {'Charlottetown':'Charlottetown', 'Summerside':'Summerside'}

cityArr['NS'] = {'Cape Breton':'Cape Breton', 'Halifax':'Halifax', 'Kentville':'Kentville', 'New Glasgow':'New Glasgow', 'Truro':'Truro'}

cityArr['NB'] = {'Bathurst':'Bathurst', 'Campbellton':'Campbellton', 'Edmundston':'Edmundston', 'Fredericton':'Fredericton', 'Miramichi':'Miramichi', 'Saint John':'Saint John'}

cityArr['QC'] = {
		'Alma':'Alma', 
		'Amos':'Amos', 
		'Baie-Comeau':'Baie-Comeau', 
		'Cowansville':'Cowansville', 
		'Dolbeau-Mistassini':'Dolbeau-Mistassini', 
		'Drummondville':'Drummondville', 
		'Ottawa-Gatineau':'Ottawa-Gatineau', 
		'Granby':'Granby', 
		'Hawkesbury':'Hawkesbury', 
		'Joliette':'Joliette', 
		'La Tuque':'La-Tuque', 
		'Lachute':'Lachute', 
		'Matane':'Matane', 
		'Montréal':'Montréal', 
		'Québec':'Québec', 
		'Rimouski':'Rimouski', 
		'Rivière-du-Loup':'Rivière-du-Loup', 
		'Rouyn-Noranda':'Rouyn-Noranda', 
		'Saint-Georges':'Saint-Georges', 
		'Saint-Hyacinthe':'Saint-Hyacinthe', 
		'Saint-Jean-sur-Richelieu':'Saint-Jean-sur-Richelieu', 
		'Saguenay':'Saguenay', 
		'Salaberry-de-Valleyfield':'Salaberry-de-Valleyfield', 
		'Sept-Îles':'Sept-Îles', 
		'Shawinigan':'Shawinigan', 
		'Sherbrooke':'Sherbrooke', 
		'Sorel-Tracy':'Sorel-Tracy', 
		'Thetford Mines':'Thetford Mines', 
		'Trois-Rivières':'Trois-Rivières', 
		'Val-d\'Or':'Val-d\'Or', 
		'Victoriaville':'Victoriaville'
	}

cityArr['ON'] = {
		'Barrie':'Barrie', 
		'Belleville':'Belleville', 
		'Brantford':'Brantford', 
		'Brockville':'Brockville', 
		'Centre Wellington':'Centre-Wellington', 
		'Chatham-Kent':'Chatham-Kent', 
		'Cobourg':'Cobourg', 
		'Collingwood':'Collingwood', 
		'Cornwall':'Cornwall', 
		'Elliot Lake':'Elliot Lake', 
		'Greater Sudbury':'Greater Sudbury', 
		'Guelph':'Guelph', 
		'Hamilton':'Hamilton', 
		'Hawkesbury':'Hawkesbury', 
		'Ingersoll':'Ingersoll', 
		'Kawartha Lakes':'Kawartha Lakes', 
		'Kenora':'Kenora', 
		'Kingston':'Kingston', 
		'Kitchener-Cambridge-Waterloo':'Kitchener Cambridge Waterloo', 
		'Leamington':'Leamington', 
		'London':'London', 
		'Midland':'Midland', 
		'Norfolk':'Norfolk', 
		'North Bay':'North Bay', 
		'Orillia':'Orillia', 
		'Oshawa':'Oshawa', 
		'Ottawa-Gatineau':'Ottawa-Gatineau', 
		'Ottawa-Gatineau, Ontario part':'Ottawa-Gatineau, Ontario part', 
		'Owen Sound':'Owen Sound', 
		'Pembroke':'Pembroke', 
		'Petawawa':'Petawawa', 
		'Peterborough':'Peterborough', 
		'Port Hope':'Port Hope', 
		'St. Catharines-Niagara':'St Catharines Niagara', 
		'Sarnia':'Sarnia', 
		'Sault Ste. Marie':'Sault Ste. Marie', 
		'Stratford':'Stratford', 
		'Temiskaming Shores':'Temiskaming_Shores', 
		'Thunder Bay':'Thunder Bay', 
		'Tillsonburg':'Tillsonburg', 
		'Timmins':'Timmins', 
		'Toronto':'Toronto', 
		'Windsor':'Windsor', 
		'Woodstock':'Woodstock'
	}

cityArr['MB'] = {
		'Brandon':'Brandon', 
		'Portage La Prairie':'Portage La Prairie', 
		'Thompson':'Thompson', 
		'Winnipeg':'Winnipeg'
	}

cityArr['SK'] = {
		'Estevan':'Estevan', 
		'Lloydminster, Saskatchewan part':'Lloydminster, Saskatchewan part', 
		'Moose Jaw':'Moose Jaw', 
		'North Battleford':'North Battleford', 
		'Prince Albert':'Prince Albert', 
		'Regina':'Regina', 
		'Saskatoon':'Saskatoon', 
		'Swift Current':'Swift Current', 
		'Yorkton':'Yorkton'
	}

cityArr['AB'] = {
		'Brooks':'Brooks', 
		'Calgary':'Calgary', 
		'Camrose':'Camrose', 
		'Canmore':'Canmore', 
		'Cold Lake':'Cold Lake', 
		'Edmonton':'Edmonton', 
		'Grande Prairie':'Grande Prairie', 
		'Lethbridge':'Lethbridge', 
		'Lloydminster, Alberta part':'Lloydminster, Alberta part', 
		'Medicine Hat':'Medicine Hat', 
		'Okotoks':'Okotoks', 
		'Red Deer':'Red Deer', 
		'Wetaskiwin':'Wetaskiwin', 
		'Wood Buffalo':'Wood Buffalo'
	}

cityArr['BC'] = {
		'Abbotsford-Mission':'Abbotsford-Mission', 
		'Campbell River':'Campbell River', 
		'Chilliwack':'Chilliwack', 
		'Courtenay':'Courtenay', 
		'Cranbrook':'Cranbrook', 
		'Dawson Creek':'Dawson Creek', 
		'Duncan':'Duncan', 
		'Fort St. John':'Fort St. John', 
		'Kamloops':'Kamloops', 
		'Kelowna':'Kelowna', 
		'Kitimat':'Kitimat', 
		'Nanaimo':'Nanaimo', 
		'Parksville':'Parksville', 
		'Penticton':'Penticton', 
		'Port Alberni':'Port Alberni', 
		'Powell River':'Powell River', 
		'Prince George':'Prince George', 
		'Prince Rupert':'Prince Rupert', 
		'Quesnel':'Quesnel', 
		'Salmon Arm':'Salmon Arm', 
		'Squamish':'Squamish', 
		'Terrace':'Terrace', 
		'Vancouver':'Vancouver', 
		'Vernon':'Vernon', 
		'Victoria':'Victoria', 
		'Williams Lake':'Williams Lake'
	}

cityArr['NT'] = {
		'Yellowknife':'Yellowknife'
	}

cityArrB['CA'] = {
		'All':'All', 
		'Ottawa part':'Ottawa part', 
		'Gatineau part':'Gatineau part'
	}

cityArrB['NL'] = {
		'St. John\'s':'St. John\'s'
	}

cityArrB['NS'] = {
		'Halifax':'Halifax'
	}

cityArrB['NB'] = {
		'Saint John':'Saint John', 
		'Moncton':'Moncton'
	}

cityArrB['QC'] = {
		'Montreal':'Montreal', 
		'Quebec':'Quebec', 
		'Saguenay':'Saguenay', 
		'Sherbrooke':'Sherbrooke', 
		'Trois-Riveres':'Trois-Riveres'
	}

cityArrB['ON'] = {
		'Barrie':'Barrie', 
		'Brantford':'Brantford', 
		'Greater Sudbury':'Greater Sudbury', 
		'Guelph':'Guelph', 
		'Hamilton':'Hamilton', 
		'Kingston':'Kingston', 
		'Kitchener-Cambridge-Waterloo':'Kitchener-Cambridge-Waterloo', 
		'London':'London', 
		'Oshawa':'Oshawa', 
		'Ottawa-Gatineau':'Ottawa-Gatineau', 
		'Peterborough':'Peterborough', 
		'St. Catharines-Niagara':'St. Catharines-Niagara', 
		'Thunder Bay':'Thunder Bay', 
		'Toronto':'Toronto', 
		'Windsor':'Windsor'
	}

cityArrB['MB'] = {
		'Winnipeg':'Winnipeg'
	}

cityArrB['SK'] = {
		'Regina':'Regina', 
		'Saskatoon':'Saskatoon'
	}

cityArrB['AB'] = {
		'Calgary':'Calgary', 
		'Edmonton':'Edmonton'
	}

cityArrB['BC'] = {
		'Kelowna':'Kelowna', 
		'Abbotsford-Mission':'Abbotsford-Mission', 
		'Vancouver':'Vancouver', 
		'Victoria':'Victoria'
	}


function removeOptions(selectObj)
{
	if (typeof selectObj != 'object')
	{
		selectObj = document.getElementById(selectObj);
	}
 
	var len = selectObj.options.length;
 
	for (var i=0; i < len; i++)
	{
		selectObj.options[0] = null;
	}
}

function setProvinceC()
{	
	$.each(provinceArr, function(key, value) {   
    	$('#province')
        .append($("<option></option>")
        .attr("value",key)
        .text(value)); 
	});
}

function setProvinceR()
{
	$.each(provinceArr, function(key, value) {   
    	$('#provinceR')
        .append($("<option></option>")
        .attr("value",key)
        .text(value)); 
	});
}

function setProvinceB()
{
	$.each(provinceArr, function(key, value) {   
    	$('#provinceB')
        .append($("<option></option>")
        .attr("value",key)
        .text(value)); 
	});
}

function setCityR(province)
{	
	removeOptions(cityR);
	$.each(cityArr[province], function(key, value) {   
    	$('#cityR')
        .append($("<option></option>")
        .attr("value",key)
        .text(value)); 
	});
}

function setCityB(province)
{	
	removeOptions(cityB);
	$.each(cityArrB[province], function(key, value) {   
    	$('#cityB')
        .append($("<option></option>")
        .attr("value",key)
        .text(value)); 
	});
}
