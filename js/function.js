// Return a ist of cards

const getCards = () => {
  return candidates.map((candidate) => {
    return `<div class="card">
          <img class="card-image" src="images/${candidate.id}.jpg" />
          <div class="card-info">
            <div class="candidate-votes">
              <span class="votes-number-${candidate.id}">${candidate.votes}</span>
              <span class="votes-text">VOTE</span>
            </div>
            <div class="line"></div>
            <div class="candidate-info">
              <span class="candidate-name">${candidate.name}</span>
              <span class="candidate-party">${candidate.party}</span>
            </div>
          </div>
          <button class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`;
  });
};

const addVote = (index, candidate, votesE1) => {
  if (!winner) {
    candidates[index].votes++;

    votesE1.textContent = candidates[index].votes;

    isWinner(candidate, candidates[index].votes);
  }
};

const isWinner = (candidate, votes) => {
  if (votes === 270) {
    winner = true;
    setWinnerLoser(candidate);
  }
};

const setWinnerLoser = (candidate) => {
  if (candidate === "modiji") {
    document.querySelector(".btn-modiji").textContent = "WINNER";

    ocument.querySelector(".btn-rahul").textContent = "LOSER";
  } else {
    document.querySelector(".btn-rahul").textContent = "WINNER";

    ocument.querySelector(".btn-modiji").textContent = "WINNER";
  }
};
