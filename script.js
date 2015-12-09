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
           $("#results").append("<li>" + data["response"]["venues"][i]["name"] + "<br>" +" Phone Number: "+ data["response"]["venues"][i]["contact"]["formattedPhone"] + "<br>"+ "<a href=" +"'" +data["response"]["venues"][i]["url"]+"'" + ">website</a>" +"</li><br>") 
           console.log(data["response"] );
        
    };
    });
        });
    });
;