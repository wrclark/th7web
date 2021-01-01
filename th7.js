
function updateList() {

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("update-response").innerHTML = this.responseText;
			updateListItem(this.responseText);
			updatePCB()
		}

	};

	xhttp.open("GET", "thermocouples.json", true);
	xhttp.send();
}

function updateListItem(data) {
	console.log(data);
	var x = JSON.parse(data);
	for(i in x) {
		//document.getElementById("li".concat(parseInt(i)+1)).innerHTML = x[i].value;
		var cells = document.getElementById("channel".concat(i+1)).getElementsByTagName('td');
		cells[0].innerHTML = parseInt(x[i].id) + 1;
		cells[1].innerHTML = x[i].tempc;
		cells[2].innerHTML = x[i].type;
		cells[3].innerHTML = x[i].offset;
		cells[4].innerHTML = x[i].gain;
		cells[5].innerHTML = x[i].value;
	}
}

function updatePCB() {
var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
					var x = JSON.parse(this.responseText);
					document.getElementById("pcb_temp").innerHTML = x['pcb_temp'];
					document.getElementById("pivdd").innerHTML = x['pivdd'];
					document.getElementById("pivadj").innerHTML = x['pivadj'];
					document.getElementById("pivref").innerHTML = x['pivref'];
					
                }

        };

        xhttp.open("GET", "th7pcbinfo.json", true);
        xhttp.send();
}
