var menu_bar = document.querySelector(".menu_bar i")
var navbar = document.querySelector(".navbar")
{/* <i class="fa-solid fa-xmark"></i> */}
menu_bar.addEventListener("click", function() {
  navbar.classList.toggle("show")
  menu_bar.classList.toggle("fa-xmark")
})



var prev_button  = document.querySelectorAll(".prev_button")
var next_button  = document.querySelectorAll(".next_button")
var button_prev  = document.querySelectorAll("#ideal .swiper-button-prev")
var button_next  = document.querySelectorAll("#ideal .swiper-button-next")


prev_button.forEach((prev)=>{
  prev.addEventListener("click", function(){
    button_prev.forEach((prebt)=>{
      prebt.click()
    })
  })
})
next_button.forEach((next)=>{
  next.addEventListener("click", function(){
    button_next.forEach((nextbt)=>{
      nextbt.click()
    })
  })
})


var buttons_fil = document.querySelectorAll(".buttons_fil")
var ideal_col = document.querySelectorAll(".ideal_col")

buttons_fil.forEach((button , index)=>{
  button.addEventListener("click", function(){
    
    buttons_fil.forEach( items => items.classList.remove("actiive"))
    button.classList.add("actiive")
    ideal_col.forEach((data, Dataindex) =>{
      if(index === Dataindex){
        data.classList.add("show")
      }else{
        data.classList.remove("show")
      }
    })
  })
  
})



// Get the element with the class 'card-img'
const cardImg = document.querySelectorAll('#hero .swiper-slide img');
console.log(cardImg);

// Define the media query
const mediaQuery = window.matchMedia('(max-width: 900px)');

// Function to change the image
function changeImage() {
  // Check if the media query is matched
  if (mediaQuery.matches) {
    // Change the image source
    cardImg[0].src = 'images/res1.jpg';
    cardImg[1].src = 'images/res2.jpg';
    cardImg[2].src = 'images/res3.png';
    cardImg[3].src = 'images/res4.png';
    cardImg[4].src = 'images/res5.jpg';
    cardImg[5].src = 'images/res6.jpg';
    cardImg[6].src = 'images/res7.jpg';
    cardImg[7].src = 'images/res8.png';
    cardImg[8].src = 'images/res9.png';
    cardImg[9].src = 'images/res10.png';
    cardImg[10].src = 'images/res11.png';
    cardImg[11].src = 'images/res12.png';
    cardImg[12].src = 'images/res13.png';
  } else {
    // Reset the image source
    cardImg[0].src = 'images/slider1.jpg';
    cardImg[1].src = 'images/slider2.jpg';
    cardImg[2].src = 'images/slider3.png';
    cardImg[3].src = 'images/slider4.jpg';
    cardImg[4].src = 'images/slider5.jpg';
    cardImg[5].src = 'images/slider6.jpg';
    cardImg[6].src = 'images/slider7.jpg';
    cardImg[7].src = 'images/slider8.jpg';
    cardImg[8].src = 'images/slider9.png';
    cardImg[9].src = 'images/slider10.png';
    cardImg[10].src = 'images/slider11.png';
    cardImg[11].src = 'images/slider12.png';
    cardImg[12].src = 'images/slider13.png';
  }
}

// Add an event listener to the media query
mediaQuery.addListener(changeImage);

// Call the function initially to set the image
changeImage();


let event_left = document.querySelector(".event_left")
let event_right = document.querySelector(".event_right")
let swiper_next = document.querySelector(".events-slider .swiper-button-next")
let swiper_prev = document.querySelector(".events-slider .swiper-button-prev")

event_left.addEventListener("click", function(){
  swiper_prev.click()
})

event_right.addEventListener("click", function(){
  swiper_next.click()
})



var swiper = new Swiper(".heroslider", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


var swiper = new Swiper(".idealslider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


  var swiper = new Swiper(".events-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });