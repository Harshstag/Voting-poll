// keep track of winner
let winner = false;

//Get a referance to the cards div
const cards = document.querySelector(".cards");

// Render cards

cards.innerHTML = getCards();

// Get a referance

const cardButtons = document.querySelector(".card-btn");

const modijiVotesE1 = document.querySelector(".votes-number-modiji");

const rahulVotesE1 = document.querySelector(".votes-number-rahul");

cardButtons.forEach((cardButton) => {
  cardButton.addEventlistner("click", (e) => {
    if (e.target.classList.contains("btn-modiji")) {
      addVote(0, "modiji", modijiVotesE1);
    } else {
      addVote(1, "rahul", rahulVotesE1);
    }
  });
});
