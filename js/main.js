
// Cuando carga la página
function load() {
  setTimeout(function(){
    $('body').removeClass('load');
    // Inicia animación
    wow.init();
  },2000);
  setTimeout(loader, 1800);
  
  return $('body').addClass('load');
}

// Animación
var wow = new WOW(
  {
    boxClass:     'wow',     
    animateClass: 'animated',
    offset:       0,         
    mobile:       true,      
    live:         true,      
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,
    resetAnimation: true, 
  }
);

// Loading
function loader() {

  $('.loading').animate({
    opacity: 0
  },1000);

  setTimeout(function(){
    $('.loading').css('display', 'none');
  },1000);
}

window.onscroll = function() {
	// var vh = window.innerHeight;
  var vh = $('.show-menu').innerHeight() - $('#header').innerHeight();
	var posWin = window.scrollY;

  if (posWin > vh) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  menuShow();
}

// Mostrar menu
function menuShow() {
  if (window.scrollY >= 100) {
    $('.menu').css('opacity', 1);
  } else {
    $('.menu').css('opacity', 0);
  }  
}

// Menu Mobile
var toggle = 0;

$( "#burguer" ).click(function() {

	console.log(toggle);

  this.classList.toggle("active");
	if(toggle == 0) {
		$( ".menu-oculto" ).css({
			"top": 0
		});

    $('body').css('overflow', 'hidden');
    $('.bg-mobile').css('display', 'block');
    
    $('.bg-mobile').animate({
      opacity: '.5'
    },1000);
		
    ++toggle;
	} else {
		$( ".menu-oculto" ).css({
			"top": "-300px"
		});
    
    $('.bg-mobile').animate({
      opacity: 0
    },500);

    setTimeout(function(){
      $('.bg-mobile').css('display', 'none');
      $('body').css('overflow', 'inherit');
    },1000);

		toggle = 0;
	}
});


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Slider Marcas
var swiper = new Swiper('.swp-marcas', {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    }
  }
});
