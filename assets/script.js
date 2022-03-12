//display date at top of page
$('#current-day').text(moment().format('dddd MMMM DD YYYY'));

//allow user input on click and ability to save
$('.saveBtn').on('click', function(){
    var userInput = $(this).siblings('textarea').val()
    var timeBlock = $(this).siblings('textarea').attr('id')
    console.log(userInput, timeBlock);

    localStorage.setItem(timeBlock, userInput)
})

var currentHour = moment().hours()

for( let i = 9; i < 18; i++) {
    $('#' + i).val(localStorage.getItem(i))
    if (i < currentHour) {
        $('#' + i).addClass('past')
    } else if (i == currentHour) {
        $('#' + i).addClass('present')
    } else {
        $('#' + i).addClass('future')
    }
}

//time blocks are color coded to indicate past present future

