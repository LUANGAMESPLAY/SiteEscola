window.addEventListener('scroll', function() {
  // elemento-animado
});

window.addEventListener('scroll', function() {
  // Obtem a posição do usuario na pagina
  var position = window.scrollY;

  //Se o usuario passar maia de 500 pixels, animara o elemento
  if (position > 500) {
    var element = document.getElementById('animated-element');
    element.classList.add('animated');
  }
});
