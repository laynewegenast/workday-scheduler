# Work Day Scheduler Starter Code
### I genuinely enjoyed this project. The use of jQuery creating this specific application truly helped the language to click for me. It was difficult to approach this project in the beginning, but using pseduo-code tremendously helped me to get started. 

## Application
### The purpose of this application is to allow the user to input their daily, working-hour tasks in a responsive environment. When the user clicks on the hour, they will be able to input their desired tasks. They will then be able to save the input which will remain on the page even when refreshed thanks to the localStorage. Also, the description features the current date and the hours are color-coded to reflect the past, present, and future.

### After establishing my Javascript document and using it to pseudo-code, I first began this project by using Moment.js to create an element that reflects the current date. 

### Once that was established, I then edited the started HTML to include seperate div containers to hold each hour, text area, and save button. I then made sure I labeled them with the premade CSS classes that were included in the starter code. After setting up this initial HTML, I then used jQuery to create a function that would be applied to the save button allowing the user to save their input in the text area. I also added the command to save the input from the text area saved to a specific hour to be saved to local storage, that way if the page were to refresh the task would still remain.

### After establishing this function, I then focused on allowing the page to reflect the past, present, and future through the color of the time block. To do this I created a for loop that called classes that were already set in the CSS. 
