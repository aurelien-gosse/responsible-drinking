let burger = $(".burger");
let nav = $(".nav");

let fixedStart = $(window).height();

let liens = $(".nav > a");
//console.log(liens);
positionIntro = $("#intro").offset().top;
positionKey = $("#key").offset().top;
positionTips = $("#tips").offset().top;
positionCountry = $("#country").offset().top;
positionAbout = $("#about").offset().top;
/*console.log(positionIntro);
console.log(positionKey);
console.log(positionTips);
console.log(positionCountry);
console.log(positionAbout);*/





function toScroll(){
  let scrollTop = $(window).scrollTop();
  //console.log("=> " + scrollTop + " to : " + fixedStart);
  if(scrollTop >= fixedStart){
    burger.addClass("fixed");
  }else{
    burger.removeClass("fixed");
  }



  /*if(scrollTop > positionKey){
    $("nav>a.active").removeClass("active");
    $('[href="#key"]').addClass("active");
  }
  if(scrollTop > positionTips){
    $("nav>a.active").removeClass("active");
    $('[href="#tips"]').addClass("active");
  }
  if(scrollTop > positionCountry){
    $("nav>a.active").removeClass("active");
    $('[href="#country"]').addClass("active");
  }
  if(scrollTop > positionAbout){
    $("nav>a.active").removeClass("active");
    $('[href="#about"]').addClass("active");
  }
console.log(scrollTop-1000);*/



}

burger.click(function (){
  burger.toggleClass("active");
  nav.toggleClass("active");
});

$(window).scroll(toScroll);

liens.click(function(){
  
  //$(this).addClass("active");
  burger.toggleClass("active");
  nav.toggleClass("active");

});




  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    //console.log(this);
    //console.log($(this));

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      //console.log(hash);
      

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
