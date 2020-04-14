// ASSIGNMENT:  write the document ready function
// PURPOSE OF CODE:  
 
$(document).ready(() =>
        {


// ASSIGNMENT:  write the jQ code that shows the dropdown menu for the cart
// PURPOSE OF CODE:  

            $('#cart').on('click', () =>
                {
                    $('#cartMenu').show();
                })



// ASSIGNMENT write the jQ code that shows the dropdown menu for the account
// PURPOSE OF CODE:

            $('account').on('click', () =>
                {
                    $('#accountMenu').show();
                })

// ASSIGNMENT:  write the jQ code that shows the dropdown menu for help
// PURPOSE OF CODE:

            $('#help').on('click', () =>
                {
                    $('#helpMenu').show();
                })

// ASSIGNMENT:  write the jQ code that causes the menu to disappear
// PURPOSE OF CODE:

            $('.dropdown-menu').on('mouseleave', () =>
                {
                    $('.dropdown-menu').hide();
                })
        })