//display date at top of page
$('#current-day').text(moment().format('dddd MMMM DD YYYY'));

$('.saveBtn').on('click', function(){
    var userInput = $(this).siblings('textarea').val()
    var timeBlock = $(this).siblings('textarea').attr('id')
    console.log(userInput, timeBlock);

    localStorage.setItem(timeBlock, userInput)
})

for( let i = 9; i < 18; i++) {
    $('#' + i).val(localStorage.getItem(i))
}

//time blocks are color coded to indicate past present future


//tasks may be saved in local storage 

//tasks remain on page when refreshed