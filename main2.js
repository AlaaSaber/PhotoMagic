//start WOW.js
    new WOW().init();


//end WOW


  $("a[href^='#']").click(function(){

        $('html, body').animate({scrollTop: $( $(this).attr("href") ).offset().top},1000)


        });








            $(window).scroll(function(){
            var windowO =$(window).scrollTop();
            var homeO = $("#header").offset().top;


            if(windowO > homeO)
                {

                    $(".bg-light").attr("style","background-color:white!important");
                    $("#header nav a").attr("style","color: #000 !important");
                    $(".navbar-light .navbar-brand").attr("style","color: #000 !important");
                  
                        
                    
                   

                }
            else
                {
                    $(".bg-light").attr("style","background-color: transparent ");
                    $("#header nav a").attr("style","color: White ");
                       $(".navbar-light .navbar-brand").attr("style","color: white ");
                  
                }

        });




