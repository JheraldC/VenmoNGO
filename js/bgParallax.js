(function(){
  var propParallx = {

    seccion: document.querySelector('.parallax'),
    recorrido: null,
    limite: null,

  }

  var metParallx = {

    inicio: function(){
      window.addEventListener('scroll', metParallx.scrollParallax);
    },

    scrollParallax: function(){
      propParallx.recorrido = window.pageYOffset;
      propParallx.limite = propParallx.seccion.offsetTop + propParallx.seccion.offsetHeight;

      if ((propParallx.recorrido > propParallx.seccion.offsetTop - window.outerHeight) && (propParallx.recorrido <=  propParallx.limite)) {
          propParallx.seccion.style.backgroundPositionY = ((propParallx.recorrido - propParallx.seccion.offsetTop) / 1.5) + 'px';
      }
      else {
        propParallx.seccion.style.backgroundPositionY = 0;
      }
    }
  }

  metParallx.inicio();
}())
