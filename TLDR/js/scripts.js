var button = document.getElementById("enter_button");
var input_text = $("#input").val();
var output_text = $("#output_sentiment_type_positive");
var output_text = $("#output_concepts");
var output_text_negative = $("#output_sentiment_type");
var output_text_sentiment = $("#output_sentiment");
var output_text_topic = $("#output_sentiment_topic");
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
 	var URL_Concept = "https://api.havenondemand.com/1/api/sync/extractconcepts/v1?text="+ $("#input").val() +"&apikey=" + apikey;
 	$.ajax({
          type: 'POST',
          url: URL_Concept,
          dataType: 'json',
          success: processJSON3,
          error: function(e)
          {
          		console.log(e + "sdfsdf")
          }    
      });
 }

function processJSON(json){
	/*console.log(json.positive[0])
	console.log(json.negative[0].sentiment)
	console.log(json["aggregate"]["sentiment"])*/
	$("#output_sentiment").text("Sentiment is: " + json["aggregate"]["sentiment"])
	$("#output_sentiment_score").text("Sentiment percetage is: " + json["aggregate"]["score"]*100)
	if (output_text_negative.val !== undefined) {
      $("#output_sentiment_type").text("Common positive sentiment: null")
  }else{
    $("#output_sentiment_type").text("Common positive sentiment: " + json.negative[0].sentiment)
  }
	if (output_text.val !== undefined) {
			$("#output_sentiment_type_positive").text("Common positive sentiment: null")
	}else{
    $("#output_sentiment_type_positive").text("Common positive sentiment: " + json.positive[1].sentiment)
  }
    if (output_text_topic.val !== undefined || output_sentiment_topic !== null) {
      $("#output_sentiment_topic").text("Topic is: null")
  }else{
    if (output_text_sentiment.val !== positive) {
      $("#output_sentiment_topic").text("Topic is: " + json.positive.topic)
    }else{
      $("#output_sentiment_topic").text("Topic is: " + json.negative.topic)
  }
  } 
}
function processJSON2(json){
	//console.log(json["language"])
	$("#output_language").text("Language is: " + json["language"])
}
function processJSON3(json){
	//console.log(json.concepts[1].concept)
    if (output_concepts.val !== undefined) {
      $("#output_concepts").text("Concept is: null")
  }else{
    $("#output_concepts").text("Concept is: " + json.concepts[0].concept)
  }
}