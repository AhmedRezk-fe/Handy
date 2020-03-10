$(window).on("load", function () {

    // accordion
    $(".Terms_Conditions_accordion_top").click(function(){
        
        $("section.Terms_Conditions .Terms_Conditions_accordion ul li")
        .not($(this).parent().toggleClass("active")).removeClass("active")
    })

    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 600) { // this refers to window
    //         var s= $(".Distinctive_properties_img img").attr("datad");
    //         console.log(s)
    //     } else {
    //         var s= $(".Distinctive_properties_img img").attr("datad");
    //         console.log(s)
    //         $(".Distinctive_properties_img img").attr("src" , s)
    //     }
        
    // });

    // fancybox

    $("a.group").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });

    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    // loading
    // $('.pre-load').stop().animate({
    //     opacity: 0
    // }, 500, function () {
    //     $('.pre-load').css({
    //         'display': 'none'
    //     });
    //     $('body').css({
    //         'overflow-y': 'auto'
    //     });
    // });

    // slider
    
    $('.slider_small_projects_owl').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        rtl: true,
        autoplay: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            500: {
                items: 1
            },
            750: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.slider_header_owl').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            500: {
                items: 1
            },
            750: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.slider_handy_team_owl').owlCarousel({
        loop: true,
        margin: 10,
        items: 4,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.Dear_customers_slider_owl').owlCarousel({
        loop: true,
        margin: 10,
        items: 4,
        rtl: true,
        center : true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                dots:false,
                // center : false,
            },
            750: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    


    // nav 
    $(".click--nav").click(function () {
        $(this).toggleClass("open");
        $(".click--nav").toggleClass("active");
        $(".body-overlay").toggleClass("back");
        $(".nav").toggleClass("back");
        $('body').toggleClass("over_f")
    });


    $(".body-overlay").click(function () {
        $(".click--nav").removeClass("open");
        $(".click--nav").removeClass("active");
        $(".body-overlay").removeClass("back");
        $(".nav").removeClass("back");
        $('body').removeClass("over_f")
    });

    // departments
    $(".all-DEPARTMENt ul li").click(function () {
        $(".all-DEPARTMENt ul li").not(this).removeClass("active");
        $(this).addClass("active");
        var att = $(this).children().children().attr("class");
        $(".dep-icon i").attr("class", att);


        var att2 = $(this).attr("my-data");
        console.log(att2);
        var datah2 = $(att2).find(".h2").html();
        var datap = $(att2).find("p").html();

        $("section.DEPARTMENt .disease-des h2").html(datah2);

        $("section.DEPARTMENt .disease-des p").html(datap);


    })

});