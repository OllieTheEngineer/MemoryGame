const gameContainer = document.getElementById("game");
let card1 = undefined;
let card2 = undefined;
let noClicking = false;


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

  const color = this.classList;
  this.style.backgroundColor = color;

  if (card1 === undefined){
   card1 = e.target;
  }
  else if (card1 !== undefined && card2 === undefined){
   card2 = e.target;
  }

  if(card1 &&  card1.style.backgroundColor !== "" && card2 && card2.style.backgroundColor !== ""){
    if(card1.style.backgroundColor === card2.style.backgroundColor){
    alert('You have picked the right cards!');
    card1 = undefined;
    card2 = undefined;
  } else {
      setTimeout(function() {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        alert("You picked the wrong cards")
        card1.removeAttribute("style");
        card2.removeAttribute("style"); 
        card1 = undefined;
        card2 = undefined;
      }, 500);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
