// For the thumbnail demo! :]


(function () {

 //menu
  var menu = document.getElementById('menu'); // colocar em cache
  var submenu = document.getElementById('submenu')
  var submenu1 = document.getElementById('submenu1')
  var whats = document.getElementById('whats')

  //container 2
  var primeiro = document.getElementById('primeiro')
  var segundo = document.getElementById('segundo')
  var terceiro = document.getElementById('terceiro')
  var quarto = document.getElementById('quarto')

  //container3
  var bloco3 = document.getElementById('fundo')
  var tema = document.getElementById('tema')
  var carousel = document.getElementById('carousel')
  var p = document.getElementById('p')

  //container-4
  var tipo1 = document.getElementById('c4t1')
  var t2 = document.getElementById('c4t2')
  var tp3 = document.getElementById('c4t3')

  //container-5
  var bloco5 = document.getElementById('fundo1')
  var c5titulo = document.getElementById('c5-titulo')
  var c5p = document.getElementById('tc-p')
  var frame = document.getElementById('frame')
  var c5button = document.getElementById('tc-button')

  //container-6
  var c6d = document.getElementById('c6d')
  var c6img = document.getElementById('c6img')
  var c6t = document.getElementById('c6t')
  var c6p = document.getElementById('c6p')
  var c6b = document.getElementById('c6b')
  var c6hr = document.getElementById('c6hr')

  window.addEventListener('scroll', function () {

    if (window.scrollY > 1500) {
      menu.classList.add('invertido'); // > 0 ou outro valor desejado
      submenu.classList.add('invertido');
      submenu1.classList.add('invertido');
    }
    else {
      menu.classList.remove('invertido');
      submenu.classList.remove('invertido');
      submenu1.classList.remove('invertido');
    }
    if (window.scrollY > 1000) {
      html = `<i class="fa-brands fa-whatsapp fa-2xl" style="position: fixed; bottom: 50px; right: 50px; border-width: 2px; cursor: pointer;"></i>`
      whats.innerHTML = html
    }
    else {
      html = `<i class="fa-brands fa-whatsapp fa-2xl" style="color: #fff; position: fixed; bottom: 50px; right: 50px; border-width: 2px; cursor: pointer;"></i>`
      whats.innerHTML = html
    }

    //conatianer-2
    if (window.scrollY > 700) {

      primeiro.classList.add('primeiro')
      segundo.classList.add('segundo')
      terceiro.classList.add('terceiro')
      quarto.classList.add('quarto')

      primeiro.classList.remove('hidden')
      segundo.classList.remove('hidden')
      terceiro.classList.remove('hidden')
      quarto.classList.remove('hidden')
    }
    else {
      primeiro.classList.add('hidden')
      segundo.classList.add('hidden')
      terceiro.classList.add('hidden')
      quarto.classList.add('hidden')

      primeiro.classList.remove('primeiro')
      segundo.classList.remove('segundo')
      terceiro.classList.remove('terceiro')
      quarto.classList.remove('quarto')
    }




    //container-3
    if (window.scrollY > 1400) {

      bloco3.classList.add('show')
      bloco3.classList.remove('hidden')
      
      carousel.classList.add('carouselSlidein')
      carousel.classList.remove('hidden')

      p.classList.add('msnslidein')
      p.classList.remove('hidden')
  

      tema.classList.add('show')
      tema.classList.remove('hidden')
    }
    else{
      bloco3.classList.remove('show')
      bloco3.classList.add('hidden')

      tema.classList.add('hidden')
      tema.classList.remove('show')

      p.classList.add('hidden')
      p.classList.remove('msnslidein')

      carousel.classList.remove('carouselSlidein')
      carousel.classList.add('hidden')
    }



    //container-4
    if(window.scrollY > 2400){
      tipo1.classList.add('t1')
      t2.classList.add('t2')
      tp3.classList.add('t3')
    }

    if(window.scrollY > 3000){

      bloco5.classList.add('show1')
      c5titulo.classList.add('show1')
      c5p.classList.add('boxshadow')
      frame.classList.add('keyframe')
      c5button.classList.add('show1')

      bloco5.classList.remove('hidden')
      c5titulo.classList.remove('hidden')
      c5p.classList.remove('hidden')
      frame.classList.remove('hidden')
      c5button.classList.remove('hidden')

    }
    else{
      bloco5.classList.remove('show1')
      c5titulo.classList.remove('show1')
      c5p.classList.remove('boxshadow')
      frame.classList.remove('keyframe')
      c5button.classList.remove('show1')

      bloco5.classList.add('hidden')
      c5titulo.classList.add('hidden')
      c5p.classList.add('hidden')
      frame.classList.add('hidden')
      c5button.classList.add('hidden')
    }

    if(window.scrollY > 3500){
      c6d.classList.add('c6d')
      c6d.classList.remove('hidden')

      c6img.classList.add('imgslideUp')
      c6img.classList.remove('hidden')

      c6t.classList.add('fadeinC6t')
      c6t.classList.remove('hidden')

      c6p.classList.add('fadeinC6p')
      c6p.classList.remove('hidden')

      c6b.classList.add('fadeinC6b')
      c6b.classList.remove('hidden')

      c6hr.classList.add('fadeinC6hr')
      c6hr.classList.remove('hidden')

    }
    else{
      c6d.classList.remove('c6d')
      c6d.classList.add('hidden')

      c6img.classList.remove('imgslideUp')
      c6img.classList.add('hidden')

      c6t.classList.add('hidden')
      c6t.classList.remove('fadeinC6t')
      
      c6p.classList.add('hidden')
      c6p.classList.remove('fadeinC6p')

      c6b.classList.add('hidden')
      c6b.classList.remove('fadeinC6b')

      c6hr.classList.add('hidden')
      c6hr.classList.remove('fadeinC6hr')
    }


  });
})();



