
/*
$( document ).ready(function() {

    const element = document.querySelector('.xf');
    element.classList.add('animated', 'fadeInUp');
    setTimeout(function() {
    element.classList.remove('fadeInUp');
    }, 1000);
    console.log("hi");
    
    });
*/

$(document ).ready(function() {
    console.log("hi");
    
    $(window).scroll(function(){
        var top=$(this).scrollTop()
        console.log(top);
        if (top>=700){
            $("#back-to-top").fadeIn(700);
        }else{
            $("#back-to-top").fadeOut(500);

        }

    })
    

    
 
    /*
    if (top>200){
        $(".xf").hide()
    }
    
    if (top>600){
        $(".details").show()

    }if (top>900){
        $(".section_k").show()
    }
    
   $(window).scroll(function(){
       
       var top=$(this).scrollTop()
       if (top>200){
           $(".xf").show()
       }if(top>600){
           $(".details").show()
       }if (top>900){
        $(".section_k").show()
    }
    if (top>1450){
        $(".who").show()
    }if (top>1850){
        $(".info").show()
    }
   })
   */
    
});



 




