$(function(){


	$(window).on("scroll", function (){ // on scroll

		var iTop = $(window).scrollTop(); // how many pixels you have gone down

        // ==== snack fade in ====
        
		$(".snack-wrapper.hide").each(function (index,element){ // each is a for loop

			// $(element).offset().top;


			// when we are 100px away from passing the wrapper

			if (($(element).offset().top - iTop) > 500){ // have passed

				$(element).removeClass("hide")
						  .addClass("animated fadeInRight");
			}
		});
        
        // ==== sticky navs ====
        
        if (iTop > 50){
            
            $("#sticky-nav").addClass("fixed animated slideInDown");
            $("#main-nav").addClass("fixed animated slideInDown");
        } else {
            $("#sticky-nav").removeClass("fixed animated slideInDown");
            $("#main-nav").removeClass("fixed animated slideInDown");
        }
	});
    
    // ==== open menu ====
    
    $("#bars").on("click", function (){
        
        $("#menu-overlay").removeClass("hide");
        $("#menu-close").removeClass("animated rotateOut");
        $(".animate-list").removeClass("animated flipOutX");
        
        setTimeout(function (){
			$("#menu-overlay").addClass("fade-in");
            $("#menu-close").addClass("animated rotateIn");
            $(".animate-list").addClass("animated flipInX");
		}, 1);

    });
    
    // ==== close menu =====
    
    $("#menu-close").on("click", function (){
        
        $("#menu-close").removeClass("animated rotateIn");
        $(".animate-list").removeClass("animated flipInX");
        $("#menu-close").addClass("animated rotateOut");
        $(".animate-list").addClass("animated flipOutX");
        setTimeout(function (){
            $("#menu-overlay").removeClass("fade-in");
            setTimeout(function (){
                $("#menu-overlay").addClass("hide");
            }, 300);
		}, 200);
    });
    
    // ==== close menu and navigate to area ====
    
    $("#nav li a").on("click", function (){
        
        $("#menu-close").removeClass("animated rotateIn");
        $(".animate-list").removeClass("animated flipInX");
        $("#menu-close").addClass("animated rotateOut");
        $(".animate-list").addClass("animated flipOutX");
        setTimeout(function (){
            $("#menu-overlay").removeClass("fade-in");
            setTimeout(function (){
                $("#menu-overlay").addClass("hide");
            }, 300);
		}, 200);
    });
    
    // ==== slider ====
    
    $('.jc-slider').jcSlider({
            animationIn     : "fadeIn",
            animationOut    : "fadeOut", 
        });
    
    
    // ==== individual image hovers ====
    
    $(".snack-image").on("mouseover", function (){
        
        $(this).addClass("animated pulse");
        
    });
    
    // ==== smooth scrolling ====
    
    $('a[href*=#]:not([href=#])').on("click",function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
    });
    
    // ==== form validation ====
    
    // mask
    
    //    $('#phone').mask('0000-000-000');
    
    // validate form
    
    $("#order-form").validate({

		rules: {
			name: {
				required: true
			},
			address: {
				required: true,
				address: true
			},
			
			email: {
				required: true,
				email: true
			},
            
            phone: {
				required: true,
				number: true
			},

            flavour3: {
                total: true
            }
		},

		messages: {
			name: "Please enter your name",

            address: "Please enter your address",

            phone: "Please include a contact number",

			email: {
				required: "Please include your email",
				email: "Please enter correct email format"
			}
			
		},

		highlight: function (element, errorClass){

			$(element).addClass("animated shake");
			$(element).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function (){

				$(this).removeClass("animated shake");

			});
		},

		onkeyup: false,
        focusCleanup: true,
	});
    
    // order input number validation
    
     $.validator.addMethod("total", function(value, element) {
        // console.log(value);
        // console.log(element);
        var value1 = parseInt($("#flavour1").val());
        var value2 = parseInt($("#flavour2").val());
        var value3 = parseInt($("#flavour3").val());
        return ((value1+value2+value3) == 12);
    }, "There is a minimum requirement of 12 per order");
});

// https://gist.github.com/gabesumner/1801479#file-fiddle-html

