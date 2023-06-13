/*-------------------------------
----------- Rock Paper Scissors Btns ------------
------------------------------- */

const rpsBtns = document.querySelectorAll(".rps-btns button");
const rpsChoiceBtns = document.querySelector(".game-body");
const result = document.querySelector(".result");

const rules = {
  rock: { beats: "scissors", losesTo: "paper" },
  paper: { beats: "rock", losesTo: "scissors" },
  scissors: { beats: "paper", losesTo: "rock" },
};
let userScoreCount = 0;
let houseScoreCount = 0;

rpsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    const userChoice = btn.dataset.choice;
    let computerChoice = "";
    const rps = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * rps.length);
    computerChoice = rps[randomNum];
    rpsChoiceBtns.classList.add("hide");
    result.classList.add("show");
    result.innerHTML = `
        <div class="your-picked">
            <button class="btn ${userChoice}">
              <img src="./images/icon-${userChoice}.svg" alt="Paper" />
            </button>
            <p>You Picked</p>
        </div>
        <section class="rematch">
            <strong class="title"></strong>
            <button class="play-again">Play Again</button>
            <button class="btn reset">Reset</button>
        </section>
        <div class="house-picked">
            <button class="btn">
            </button>
           <p>The House Picked</p>
        </div>
    `;
    const winCaption = document.querySelector(".title");
    const userChoiceBtn = document.querySelector(`.your-picked .btn`);
    const housePickedShow = document.querySelector(`.house-picked`);
    const rematch = document.querySelector(`.rematch`);

    const userScore = document.querySelector(`.user-scores`);
    const houseScore = document.querySelector(`.house-scores`);

    setTimeout(() => {
      housePickedShow.innerHTML = `<button class="btn ${computerChoice} ">
              <img src="./images/icon-${computerChoice}.svg" alt="Paper" />
           
            </button> <p>The House Picked</p>`;
      console.log(computerChoice);
      const houseChoiceBtn = document.querySelector(`.house-picked .btn`);
      if (userChoice === computerChoice) {
        winCaption.innerText = `It's a tie!`;
        userChoiceBtn.classList.add("winner");
        houseChoiceBtn.classList.add("winner");
      } else if (rules[userChoice].beats === computerChoice) {
        winCaption.innerText = `You Win!`;
        userScoreCount++;
        userChoiceBtn.classList.add("winner");
        userScore.innerText = userScoreCount;
      } else if (rules[userChoice].losesTo === computerChoice) {
        winCaption.innerText = `You Lose!`;
        houseScoreCount++;
        houseChoiceBtn.classList.add("winner");
        houseScore.innerText = houseScoreCount;
      }

      setTimeout(() => {
        rematch.classList.add("show");
      }, 1000);
      const playAgain = document.querySelector(".play-again");
      const reset = document.querySelector(".reset");

      playAgain.addEventListener("click", () => {
        btn.classList.remove("active");
        rpsChoiceBtns.classList.remove("hide");
        rematch.classList.remove("show");
        result.classList.remove("show");
      });

      reset.addEventListener("click", () => {
        userScoreCount = 0;
        houseScoreCount = 0;
        rpsChoiceBtns.classList.remove("hide");
        rematch.classList.remove("show");
        btn.classList.remove("active");
        result.classList.remove("show");
        userScore.innerText = userScoreCount;
        houseScore.innerText = houseScoreCount;
      });
      console.log(rules[userChoice].beats);
    }, 2000);
  });
});
/*-------------------------------
----------- Rules Button ------------
------------------------------- */
const rulesBtn = document.querySelector(".rule");
const showRules = document.querySelector(".rules");
const exit = document.querySelector(".exit");

rulesBtn.addEventListener("click", () => {
  showRules.classList.toggle("show");
  exit.addEventListener("click", () => {
    showRules.classList.remove("show");
  });
});
