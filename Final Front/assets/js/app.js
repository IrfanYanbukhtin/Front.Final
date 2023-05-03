
document.querySelectorAll('.theme i').forEach(function(theme) {
    theme.addEventListener('click', function() {
        document.querySelector('.theme .d-none').classList.remove('d-none')
        theme.classList.add('d-none')
    if(theme.classList.add('d-none')){
        document.body.style.backgroundColor = 'white'
    }   
    else{
        document.body.style.backgroundColor = 'black'
    } 
    })
})

$('.slider').slick({
    infinite: true,
    dots: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
      },
    ]
  });