function loadWindowSystem(){
     var theObject = document.getElementById("results");
    var theText = theObject.innerHTML;
    theText = theText.replace(/"undefined"/g, "No Website!");
    theText = theText.replace(/undefined/g, "No Website!");
    console.log(theText);
    theObject.innerHTML = theText;
}
$( document ).ready(function() {
    var client_id = "3S04IG4W3DQJX0XSATONM4JL0B1V5UPTLSEGZABLGEE45IRV";
    var client_secret = "TU44KTVPTWYEHKJPLXJ1CHKOXQ24COKDXPPKGFH2ZZA34NWD";
    
  $("#submit").click(function(event) {
      var address = $("#address").val();
      var food = $("#food").val();
        $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + client_id +
        "&client_secret=" + client_secret +
        "&v=20151209" +
        "&near=" +address+
        "&query=" +food,
    function(data) {
    for (var i=0;i< data["response"]["venues"].length;i++){
           $("#results").append("<li>" + data["response"]["venues"][i]["name"] + "<br>" +" Phone Number: "+ data["response"]["venues"][i]["contact"]["formattedPhone"] + "<br>"+ "<a href=" +"'" +data["response"]["venues"][i]["url"]+"'" + ">"+data["response"]["venues"][i]["url"]+"</a>"+"<br>"+"Address: "+data["response"]["venues"][i]["location"]["formattedAddress"][0]+", "+data["response"]["venues"][i]["location"]["formattedAddress"][1]+", "+data["response"]["venues"][i]["location"]["formattedAddress"][2]+"</li><br>") 
           
        
    };
    console.log(data["response"]);
   loadWindowSystem();

    });
        });
       
    });
;