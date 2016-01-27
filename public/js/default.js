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