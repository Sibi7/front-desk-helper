//mobile menu button--------------------------------------------------
$(document).on('click', '.mobile-menu', function () {
    $(this).toggleClass('.mobile-menu_active');
    var list = $('#header-menu');
    if (list.is(':visible')) {
        list.slideUp();
    } else {
        list.slideDown();
    }
});
//!mobile menu button--------------------------------------------------