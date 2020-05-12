const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
  $.getJSON(dataURL, handleData);

}

function handleData(jsonData) {

	let jsonText = "";

	let var1 = $("input[name=var2]")[0].value;
	let var2 = $("input[name=var2]")[0].value;
	let var3 = $("input[name=var3]")[0].value;
	let var4 = $("input[name=var4]")[0].value;
	let var5 = $("input[name=var5]")[0].value;
	let var6 = $("input[name=var6]")[0].value;
	let speach = $("input[name=speach]")[0].value;

  jsonData["text"].forEach(function(arrayElement, index) {

  	arrayElement = arrayElement.replace("{var1}", var1)
  	arrayElement = arrayElement.replace("{var2}", var2)
  	arrayElement = arrayElement.replace("{var3}", var3)
  	arrayElement = arrayElement.replace("{var4}", var4)
  	arrayElement = arrayElement.replace("{var5}", var5)
  	arrayElement = arrayElement.replace("{var6}", var6)
  	arrayElement = arrayElement.replace("{speach}", speach)

  	jsonText = jsonText + arrayElement + "<br>";
  })


	$("#result").html(jsonText);
}


function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
