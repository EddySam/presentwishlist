$(document).ready(function () {


    $(".add-to-list-btn").click(function (e) {
        e.preventDefault();
        $(".add-to-list-btn").removeClass('active');

        $(this).closest('.sell-list__inner').find(".added-goods").addClass('active');

        $(this).closest('.chose_presents').find(".present-form-add__empty").addClass('no-active');

        $(this).closest('.sell-list__item').addClass('added');


        //thi add block with content to added-products
        $('.added-products').append('<div class="type-off-product" />');

        var this_parent = $(this).closest('.sell-list__inner');

        var this_full_text = this_parent.find('.full-text').clone([false, false]).addClass('full-text-added');
        
        this_full_text.appendTo('.type-off-product');







    });


});
