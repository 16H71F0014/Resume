function loadjson(file,callback){
	var xhr=new XMLHTTPREQUEST();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function{
		if(xhr.readyState ===4 && xhr.status===200) {
			callback(xhr.responseText);
		}
	}
	xhr.send();

}
loadjson("data.json",function(text){
	let data=JSON.parse(text);
	console.log(data);

})