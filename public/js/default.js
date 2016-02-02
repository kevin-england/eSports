function hideContent(){
  var content = document.getElementById('content');    
  content.style.display = 'none';
  var contents = document.getElementById('results');    
  contents.style.display = 'none';
}

function featuredContent(){
  var click = document.getElementById('featured');
  click.addEventListener('click', function(){
    var remove = document.getElementById('sponsors');    
    remove.style.display = 'none';
    var removed = document.getElementById('content');    
    removed.style.display = 'none';
    var remover = document.getElementById('carousel');    
    remover.style.display = 'none';
    var content = document.getElementById('results');    
    content.style.display = 'block';
  }, false);
}

function showContent(){
  var click = document.getElementById('submit');
  click.addEventListener('click', function(){
    var remove = document.getElementById('sponsors');    
    remove.style.display = 'none';
    var removed = document.getElementById('results');    
    removed.style.display = 'none';
    var remover = document.getElementById('carousel');    
    remover.style.display = 'none';
    var content = document.getElementById('content');    
    content.style.display = 'block';
  }, false);
}

hideContent()
featuredContent()
showContent()