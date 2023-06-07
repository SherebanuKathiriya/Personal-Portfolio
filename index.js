var typed = new Typed('#element', {
    strings: ['Java Developer', 'Web Application Developer', 'Backend Developer.'],
    typeSpeed: 50,
    loop: true,
});

function redirectToPage() {
    window.open("https://github.com/SherebanuKathiriya", "_blank");
}
function viewPDF() {
    const fileUrl = "Sherebanu's Resume.pdf";
    window.open(fileUrl, "_blank");
}
$("#about_sec").click(function() {
    $('html, body') //selects both the <html> and <body> elements
    .animate({scrollTop:  //Specifies the vertical scroll position to animate to.
    $("#myaboutDiv").offset().top //retrieves the top offset position of the element with the ID "myaboutDiv"
    - 90 //subtracted from the top position to offset the height of the fixed navigation bar
    }, 500);//specifies the duration of the animation
});

$("#projects_sec").click(function() {
    $('html, body') 
    .animate({scrollTop:  
    $("#myprojectsdiv").offset().top - 90 
    }, 500);
});


$("#contactme_sec").click(function() {
    $('html, body') 
    .animate({scrollTop:  
    $("#contactmediv").offset().top - 90 
    }, 500);
});