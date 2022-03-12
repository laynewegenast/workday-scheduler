# Work Day Scheduler 
### I genuinely enjoyed this project. The use of jQuery creating this specific application truly helped the language to click for me. It was difficult to approach this project in the beginning, but using pseduo-code tremendously helped me to get started. 

## Application
### The purpose of this application is to allow the user to input their daily, working-hour tasks in a responsive environment. When the user clicks on the hour, they will be able to input their desired tasks. They will then be able to save the input which will remain on the page even when refreshed thanks to the localStorage. Also, the description features the current date and the hours are color-coded to reflect the past, present, and future.

### After establishing my Javascript document and using it to pseudo-code, I first began this project by using Moment.js to create an element that reflects the current date.<img width="472" alt="Screen Shot 2022-03-11 at 7 41 20 PM" src="https://user-images.githubusercontent.com/96094719/158028345-fe52f979-bbc1-40e9-b4b4-3ced918f935c.png">
 

### Once that was established, I then edited the started HTML to include seperate div containers to hold each hour, text area, and save button. I then made sure I labeled them with the premade CSS classes that were included in the starter code. After setting up this initial HTML, I then used jQuery to create a function that would be applied to the save button allowing the user to save their input in the text area. I also added the command to save the input from the text area saved to a specific hour to be saved to local storage, that way if the page were to refresh the task would still remain.![Screen Shot 2022-03-12 at 11 25 22 AM](https://user-images.githubusercontent.com/96094719/158028362-5b62e181-7d25-4f04-ae68-1c2a9ce48dd9.png)


### After establishing this function, I then focused on allowing the page to reflect the past, present, and future through the color of the time block. To do this I created a for loop that called classes that were already set in the CSS. ![Screen Shot 2022-03-12 at 11 27 56 AM](https://user-images.githubusercontent.com/96094719/158028364-59c0d9bd-0508-4b10-975e-2b902319eacf.png)

