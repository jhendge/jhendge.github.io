// //STICKY NAV
// $(document).ready(function () {
//   var top = $('#top-line').offset().top - parseFloat($('#top-line').css('marginTop').replace(/auto/, 100));
//   $(window).scroll(function (event) {
//     // what the y position of the scroll is
//     var y = $(this).scrollTop();

//     // whether that's below the form
//     if (y >= top) {
//       // if so, add the fixed class
//       $('#top-line').addClass('fixed');
//     } else {
//       // otherwise remove it
//       $('#top-line').removeClass('fixed');
//     }
//   });
// });


<script>
//浮动条设置(set the floating bar)
$( function(){
    //add new .fixed style to the <head>
    var css = '#top-line.fixed{position:fixed;top:1px;z-index:9999;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet){ style.styleSheet.cssText = css; } 
    else { style.appendChild(document.createTextNode(css)); }
    head.appendChild(style);

    var menuOffset = $("#top-line")[0].offsetTop;
    var menuWidth = document.getElementById("floating_bar").offsetWidth;
    $(document).on("scroll", function(){
        var docScroll = $(document).scrollTop();
        if(docScroll >= menuOffset) { 
            $("#top-line").addClass("fixed");
            //dynamically change the width of floating bar according to it's width of previous state 
            $("#top-line.fixed").width(menuWidth);
        }else {
            $("#top-line").removeClass("fixed");
        }
    });
});
</script>