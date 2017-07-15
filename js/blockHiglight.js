$('.buttonOne').hover(
  function(){
      $( ".first li:nth-child(1)" ).css('background-color','#49cbcd');
      $( '.buttonOne' ).css('background-color','#49cbcd');
  },
  function(){
      $(".first li:nth-child(1)").css('background-color','#485460');
      $('.buttonOne').css('background-color','#788492');
  }
);
$('.buttonTwo').hover(
  function(){
      $( ".second li:nth-child(1)" ).css('background-color','#49cbcd');
      $( '.buttonTwo' ).css('background-color','#49cbcd');
  },
  function(){
      $(".second li:nth-child(1)").css('background-color','#485460');
      $('.buttonTwo').css('background-color','#788492');
  }
);
$('.buttonThree').hover(
  function(){
      $( ".third li:nth-child(1)" ).css('background-color','#49cbcd');
      $( '.buttonThree' ).css('background-color','#49cbcd');
  },
  function(){
      $(".third li:nth-child(1)").css('background-color','#485460');
      $('.buttonThree').css('background-color','#788492');
  }
);
