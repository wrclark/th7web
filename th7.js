
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
		document.getElementById("li".concat(parseInt(i)+1)).innerHTML = x[i].value;
	}
}

function updatePCB() {
var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
			//document.getElementById("update-response").innerHTML = this.responseText;
                        //updateListItem(this.responseText);
                        //updatePCB()
			console.log(this.responseText);
                }

        };

        xhttp.open("GET", "th7pcbinfo.json", true);
        xhttp.send();
}
