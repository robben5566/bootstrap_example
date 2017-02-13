$(document).ready(function() {
    
    $('[data-toggle="tooltip"]').tooltip(); 
    smoooth();
});

function smoooth() {
        $(".navbar a, footer a[href='#home']").on('click', function(event){
            
            if(this.hash !== "") {
                event.preventDefault();
                
                var hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500, function(){
                    window.location.hash = hash;
                });
            }
        });
    }