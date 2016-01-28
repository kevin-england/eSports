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
    var gameOne = routerResponse.id[0].discipline[0].name[0];
    featuredGames(gameOne);
  }
  getGame.open('GET', 'http://localhost:3000/featured', true);
  getGame.send();
}