(function(){
  var propSlider = {
    slider: document.getElementById('slider'),
    primerSlider: null,
  }

  var metSlider = {
    inicio: function(){
      setInterval(metSlider.moverSlide, 3000);
    },
    moverSlide: function(){
      propSlider.slider.style.transition = 'all 1s ease';
      propSlider.slider.style.marginLeft = '-100%';

      setTimeout(function(){
        propSlider.primerSlider = propSlider.slider.firstElementChild;
        propSlider.slider.appendChild(propSlider.primerSlider);
        propSlider.slider.style.transition = 'unset';
        propSlider.slider.style.marginLeft = '0%';
      }, 1000);
    }
  }

  metSlider.inicio();

}())
