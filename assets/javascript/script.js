console.log("hello world");

var games = ["League of Legends", "HearthStone", "Skyrim", "Borderlands 2"];

function renderButtons() {

  $("#gameButtons").empty();
  for (var i = 0; i < games.length; i++) {
    var a = $("<button>");
    a.addClass("vgame");
    a.attr("data-name", games[i]);
    a.text(games[i]);
    $("#gameButtons").append(a);
  }
}

  $("#addGame").on("click", function(event) {
    event.preventDefault();
    var vgame = $("#gameSearch").val().trim();
    games.push(vgame);
    renderButtons();
  });
  renderButtons();



$("button").on("click", function() {
    games = $(this).attr("");
    vgame = $(this).attr("");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + games + "&api_key=bINogSMVSVr5pd0KJYXgscROOQWEtaGe&limit=10";
 /*
    $(".gif").on("click", function() {
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      }
      else if (state === "animate") {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
    */

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(queryURL);

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var gamesDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var gamesImage = $("<img>");

          gamesImage.attr("src", results[i].images.fixed_height.url);

          gamesDiv.append(p);
          gamesDiv.append(gamesImage);

          $("#gifs-appear-here").prepend(gamesDiv);
      }
    });
  });  