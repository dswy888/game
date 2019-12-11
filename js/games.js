$(function () {
    // console.log(this);

    $(window).scroll(function () {
        // console.log($(this).innerHeight());
        var a = $(this).scrollTop();
        console.log(a);
        var current = (a / ($(document).height() - $(this).innerHeight()));
        console.log("innerheight", $(this).innerHeight());
        console.log("height", $(document).height());
        console.log("current", current);
        if (a > 100) {
            // console.log($(".navbar-default"));
            $(".wrapper .navbar-default").css("backgroundColor", "rgba(204,204,204," + current + ")");
        }
    })
})