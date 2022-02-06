const gameContainer = document.getElementById("game");
let card1 = "";
let card2 = "";
let cardsFlipped = 0; // did not have this initially
let noClicking = false; //initially i did not have this variable, added it after I saw the solution

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked 
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;

  this.style.backgroundColor = this.classList
  if(card1 == "")
  {
   card1 = this.style.backgroundColor
  //  card1 = this
  }
  else if (card1 != "" && card2 === "")
  {
   card2 = this.style.backgroundColor
  //  card2 = this
  }
  else if(card1 != "" && card2 != "")
  {
    if(card1.style.backgroundColor === card2.style.backgroundColor)
    alert('You have picked the right cards!')
    {

    } 
      setTimeout(function() {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        // card1 = "";
        // card2 = "";
        noClicking = false;
        alert("You picked the wrong cards")
      /*Code here to reset the cards*/  
    }, 1000);
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
