document.OnLoad = getIP();
function getIP() {
	var getip;
	$.ajaxSetup({async: false});
	// jsonipからjsonを取得する
	$.getJSON("http://jsonip.com/", function(data){
		getip = data.ip;
	});
	$.ajaxSetup({async: true});
	document.write(getip);
}
