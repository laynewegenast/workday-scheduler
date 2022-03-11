//display date at top of page
$('#current-day').text(moment().format('dddd MMMM DD YYYY'));

$('.saveBtn').on('click', function(){
    var userInput = $(this).siblings('textarea').val()
    var timeBlock = $(this).siblings('textarea').attr('id')
    console.log(userInput, timeBlock);
})

//create time blocks for working hours of day

//time blocks are color coded to indicate past present future

//when time blocks are clicked the user may enter a task

//tasks may be saved in local storage 

//tasks remain on page when refreshed