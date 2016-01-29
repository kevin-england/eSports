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

function featuredCall() {
  var getGame = new XMLHttpRequest();
  getGame.onload = function() {
    var routerResponse = document.getElementById('submit');
    routerResponse.addEventListener('click', function(){
      response = JSON.parse(getGame.responseText);
    }, false)
  }
  getGame.open('GET', 'http://localhost:3000/featured', true);
  getGame.send();
}


hideContent()
showContent()
featuredCall()