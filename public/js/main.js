
  
 const x = window.matchMedia("(max-width: 520px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener(myFunction,this.x) // Attach listener function on state changes
         function myFunction(x){
            if (x.matches) { // If media query matches
              $('.owl-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                mouseDrag: true,
                items: 2
            });
                var a = $("<h6></h6>");
                $("#txt").append(a);
            } 
            
          }
 const y = window.matchMedia("(max-width: 365px)")
  myFunction(y) // Call listener function at run time
  x.addEventListener(myFunction,this.y) // Attach listener function on state changes
         function myFunction(y){
            if (y.matches) { // If media query matches
              $('.owl-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                mouseDrag: true,
                items: 1
            });
                var a = $("<h6></h6>");
                $("#txt").append(a);
            } 
            
          }


// owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        mouseDrag: true
    });
});

// form close button
$(function(){
    $("#signupbtn").click(function(){
        $(".form").show()
    })
    $(".closeicon").click(function(){
        $(".form").hide()
    });
});
/*const exit = document.getElementById("form")
const change = document.getElementById("closeicon").onclick = function(){
    exit.style.display = "none";
}
const signup = document.getElementById("signupbtn").onclick = function(){
    exit.style.display = "block";
}*/

// jquery drag
/*$(function(){
    $('.news-container').dragScroll();
});*/
//AOS
AOS.init();
