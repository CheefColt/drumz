
// Used to count the number of button available to use them for index 
var numberOfDrumButtons = document.querySelectorAll('.drums').length;

// Used to run a loop and select the respective button and add an event listener. This event listener is used to add the function 
// that plays the sound on click.
for(var i=0; i<numberOfDrumButtons; i++)
{
    document.querySelectorAll('.drums')[i].addEventListener("click",playOnClick);
}

//But infact the playOnClick function only recieves the key pressed and sends it to a more versatile and common function 'makeSound'

function playOnClick()
{
    // Here we make use of the var to take the key pressed 
    var buttonInnerHtml = this.textContent;
    buttonInnerHtml = buttonInnerHtml.toLowerCase();

    // Here we send the var value to two functions 'makeSound' and 'buttonAnimation'
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

// Here we are adding an Event Listener that takes the value of any key pressed on the keyboard while on the site.
// So we get the key and send it to the 'playOnPress' function for further processing of the key.

document.addEventListener("keypress", playOnPress);

//This function takes into consideration the event that took place.
function playOnPress(event)
{
    // Here we are taking the key from the 'keypress' event by using the '.key'. And sending that key to the makeSound and buttonAnimation functions.
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key)
{
    // We are making use of the key recieved and sending to the switch case which further plays the sound in respect to the key recieved.

    switch(key)
    {
        case 'w':

            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();

        break;

        case 'a':
            
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();

        break;

        case 's':
            
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();

        break;

        case 'd':
            
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();

        break;

        case 'j':
            
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();

        break;

        case 'k':
            
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();

        break;

        case 'l':
            
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();

        break;

        // Prints a log in the console that the wrong button is pressed
        default:
            console.log("Wrong buttons friend!");
    }
}


// This function is used to make the drum button look like it is pressed by making the pressed class declared in the 'styles.css' file to be added to the drum bottom on beign clicked. 
function buttonAnimation(currentKey)
{

        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
}