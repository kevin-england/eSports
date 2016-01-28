function hideContent(){
  var content = document.getElementById('content');    
  content.style.display = 'none';
}

function showContent(){
  var click = document.getElementById('submit');
  click.addEventListener('click', function(){
    var remove = document.getElementById('sponsors');    
    remove.style.display = 'none';
    var content = document.getElementById('content');    
    content.style.display = 'block';
  }, false);
}

hideContent()
showContent()

function featuredCall() {
  var getGame = new XMLHttpRequest();
  getGame.onload = function() {
    routerResponse = JSON.parse(getGame.responseText);
    var gameOne = routerResponse.gameMode[0].gameId[0].observers[0];
    featuredGames(gameOne);
    var gameTwo = routerResponse.gameMode[1].gameId[1].observers[1];
    featuredGames(gameTwo);
    var gameThree = routerResponse.gameMode[2].gameId[2].observers[2];
    featuredGames(gameThree);
    var gameFour = routerResponse.gameMode[3].gameId[3].observers[3];
    featuredGames(gameFour);
  }
  getGame.open('GET', 'http://localhost:1337/router', true);
  getGame.send();
}