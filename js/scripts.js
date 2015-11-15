var button = document.getElementById("enter_button");
var input_text = $("#input").val();
var output_text = $("#output");
var apikey = "921638d2-08e2-4192-b827-edfa0c3a08d5";
/*$("#enter_button").click(function(e) {
});*/
var main = function(){
var URL_Sentiment = "https://api.havenondemand.com/1/api/sync/analyzesentiment/v1?text="+$("#input").val()+"&apikey=" + apikey;

	$.ajax({
          type: 'POST',
          url: URL_Sentiment,
          dataType: 'json',
          success: processJSON,
          error: function(e)
          {
          		console.log(e + "sdfsdf")
          }    
      });
	console.log($("#input").val())
	var URL_Concept = "https://api.havenondemand.com/1/api/sync/identifylanguage/v1?text="+ $("#input").val() +"&apikey=" + apikey;
 	$.ajax({
          type: 'POST',
          url: URL_Concept,
          dataType: 'json',
          success: processJSON2,
          error: function(e)
          {
          		console.log(e + "sdfsdf")
          }    
      });
 }

function processJSON(json){
	//$("#output").text("hi")
	console.log(json["aggregate"]["sentiment"])
	$("#output_sentiment").text(json["aggregate"]["sentiment"])
}
function processJSON2(json){
	//$("#output").text("hi")
	console.log(json["language"])
	$("#output_language").text(json["language"])
}
function textChanger(){
	alert("no text");
}
//button.addEventListener("click", textChanger);
