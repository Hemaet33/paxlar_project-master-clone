$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,autoplay:true,
    autoplayTimeout:5000,
    margin:10,
    responsiveClass:true,
    navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
  });
});


const navAnimation = ()=>{
  const burger = document.querySelector('.bottom-nav-section .burger');
  const nav = document.querySelector('.bottom-nav-section ul.navbar');
  const navList = document.querySelectorAll('.bottom-nav-section ul.navbar li');

  burger.addEventListener('click',()=>{
    //nav toggle
    nav.classList.toggle('nav-toggle');
    //li animation
    navList.foreach((list,index)=>{
      link.classList.add=`listItemFade`;
      // if(list.style.animation){
      //   list.style.animation="";
      // }else{
        
      // }  
    });
    console.log(navList);
  })
}
navAnimation();