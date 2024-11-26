(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        // Get the scroll position from the top
        if ($(this).scrollTop() > 300) {
            // When scroll position is greater than 300px, add sticky behavior
            $('.sticky-top').addClass('shadow-sm').css({
                'position': 'fixed',
                'top': '0px',
                'width': '100%',
                'z-index': '1020' // Ensure the navbar stays above other content
            });
        } else {
            // When scroll position is less than 300px, remove sticky behavior
            $('.sticky-top').removeClass('shadow-sm').css({
                'position': 'relative',
                'top': '0px',
                'width': 'auto',  // Reset width to auto, so it behaves normally
                'z-index': ''     // Remove z-index to prevent overlap
            });
        }
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);



$(document).ready(function() {
    // When any dropdown item is clicked, add the 'active' class
    $('.dropdown-item').click(function() {
        // Remove 'active' class from all items
        $('.dropdown-item').removeClass('active');
        
        // Add 'active' class to the clicked item
        $(this).addClass('active');
    });
});
// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    
    // Show the logo for 1 second, then show the spinner and hide the logo
    setTimeout(function() {
        // Fade out the logo by setting opacity to 0
        const logo = document.getElementById('logo');
        const spinner = document.getElementById('spinner');
        
        // Fade out the logo
        logo.style.opacity = '0';
        
        // After 1 second (allowing for fade-out), hide the logo and show the spinner
        setTimeout(function() {
            logo.style.display = 'none';  // Hide the logo
            spinner.style.display = 'block';  // Show the spinner
        }, 1000);  // Wait 1 second for the fade-out transition to complete
        
    }, 1000);  // Show the logo for 1 second before starting the transition
});


$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyklPAz3fwuEzNJv677SrSCgPyrSAZY-i1rySB9qSUAXbGhIjBR4V6-Nj_M_3T1ZBVs/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
