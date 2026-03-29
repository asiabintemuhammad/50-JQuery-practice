// jq
$(document).ready(function(){
    // e1
    $(".sa").click(function(){
    alert("Hello world");
  })
    // e2
    $("button1").click(function(){
      alert("Hello world");
  })
    // e3
    $("#sa").click(function(){
      alert("Hello world");
  })
    //e4
   $('#btn_1').on('click', function(){

    $('#h32').show();

  });
    // e5
  $('#btn_2').on('click' , function(){

    $('#h32').hide();

  });
  // e6
  $('#btn_3').on('click' , function(){

    $('.h31').toggle();
  })
  //e7
   $('#btn_4').on('click', function(){

    $('#h33').fadeIn();

  });
   // e8
  $('#btn_5').on('click' , function(){

    $('#h33').fadeOut();
    // e9
  });
  $('#btn_6').on('click' , function(){

    $('#h34').fadeToggle("slow");
  })
  // e10
  $('#btn_7').on('dblclick', function(){

    $('#h35').fadeIn();

  });
  // e11
  $('#btn_8').on('dblclick' , function(){

    $('#h35').fadeOut();

  });
  // e12
  $('#btn_9').on('dblclick' , function(){
    $('#h36').fadeToggle("slow");

  });
  // e13
  $('#btn_10').on('mouseover', function(){

    $('#h37').fadeIn();

  });
  // e14
  $('#btn_11').on('mouseover' , function(){

    $('#h37').fadeOut();

  });
  // e15
  $('#btn_12').on('mouseover' , function(){
    $('#h38').fadeToggle("slow");

  });
//e16
    $("#sl1").on('click' , function(){

    $("#sl2").slideUp("slow");

  });
  //e17
    $("#sl3").on('click' , function(){

    $("#sl4").slideDown("slow");

  });
  //e18
    $("#sl5").on('click' , function(){

    $("#sl6").slideToggle("slow");
  }); 
  // e19
    $("#st1").on('click' , function(){
    $("#st2").slideDown(1000);
  });
  $("#btn_15").on('click' , function(){
    $("#st2").stop();
  });
  // e20
   $("#ani1").click(function(){
    $(".ani1").animate({right: '300px'});
  });


})