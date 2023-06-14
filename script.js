/*-------------------------------
----------- Rock Paper Scissors Btns ------------
------------------------------- */
const level = document.querySelector(".level");
const advancedMode = document.querySelector(".advanced-mode");
const normalMode = document.querySelector(".game-body");
const advancedLogo = document.querySelector(".advanced");
const normalLogo = document.querySelector(".normal");
const userScore = document.querySelector(`.user-scores`);
const houseScore = document.querySelector(`.house-scores`);
let userScoreCount = 0;
let houseScoreCount = 0;

const rpsBtns = document.querySelectorAll(".rps-btns button");
const rpsChoiceBtns = document.querySelectorAll(".game-body");
const result = document.querySelector(".result");

rpsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (level.innerText === "Advanced") {
      const rules = {
        rock: { beats: "scissors", losesTo: "paper" },
        paper: { beats: "rock", losesTo: "scissors" },
        scissors: { beats: "paper", losesTo: "rock" },
      };

      btn.classList.add("active");
      const userChoice = btn.dataset.choice;
      let computerChoice = "";
      const rps = ["paper", "rock", "scissors"];
      const randomNum = Math.floor(Math.random() * rps.length);
      computerChoice = rps[randomNum];
      rpsChoiceBtns[0].classList.add("hide");
      result.classList.add("show");
      level.classList.add("hide");
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
           <p>The House is Picking</p>
        </div>
    `;
      const winCaption = document.querySelector(".title");
      const userChoiceBtn = document.querySelector(`.your-picked .btn`);
      const housePickedShow = document.querySelector(`.house-picked`);
      const rematch = document.querySelector(`.rematch`);

      setTimeout(() => {
        housePickedShow.innerHTML = `<button class="btn ${computerChoice} ">
              <img src="./images/icon-${computerChoice}.svg" alt="Paper" />
           
            </button> <p>The House Picked</p>`;
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
          rpsChoiceBtns[0].classList.remove("hide");
          rematch.classList.remove("show");
          level.classList.remove("hide");
          result.classList.remove("show");
        });

        reset.addEventListener("click", () => {
          userScoreCount = 0;
          houseScoreCount = 0;
          rpsChoiceBtns[0].classList.remove("hide");
          rematch.classList.remove("show");
          level.classList.remove("hide");
          btn.classList.remove("active");
          result.classList.remove("show");
          userScore.innerText = userScoreCount;
          houseScore.innerText = houseScoreCount;
        });
      }, 2000);
    } else {
      level.classList.add("hide");
      btn.classList.add("active");
      const userChoice = btn.dataset.choice;
      let computerChoice = "";
      const rps = ["rock", "scissors", "paper", "lizard", "spock"];
      const randomNum = Math.floor(Math.random() * rps.length);
      computerChoice = rps[randomNum];

      rpsChoiceBtns[1].classList.add("hide");
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
            <p class="rule"></p>
            <button class="play-again">Play Again</button>
            <button class="btn reset">Reset</button>
        </section>
        <div class="house-picked">
            <button class="btn">
            </button>
           <p>The House is Picking</p>
        </div>
    `;
      const winCaption = document.querySelector(".title");
      const userChoiceBtn = document.querySelector(`.your-picked .btn`);
      const housePickedShow = document.querySelector(`.house-picked`);
      const rematch = document.querySelector(`.rematch`);
      const rule = document.querySelector(`p.rule`);

      setTimeout(() => {
        housePickedShow.innerHTML = `<button class="btn ${computerChoice} ">
              <img src="./images/icon-${computerChoice}.svg" alt="Paper" />
           
            </button> <p>The House Picked</p>`;
        const houseChoiceBtn = document.querySelector(`.house-picked .btn`);

        // Create an object that maps each choice to an array of choices that it beats
        const beatsTo = {
          lizard: ["spock", "paper"],
          spock: ["rock", "scissors"],
          paper: ["spock", "rock"],
          rock: ["lizard", "scissors"],
          scissors: ["lizard", "paper"],
        };

        // Create an object that maps each pair of choices to the rule that explains the outcome
        const rulesDescribe = {
          "lizard-spock": "Lizard poisons Spock",
          "lizard-paper": "Lizard eats Paper",
          "spock-rock": "Spock vaporizes Rock",
          "scissors-lizard": "Scissors decapitates Lizard",
          "rock-lizard": "Rock crushes Lizard",
          "paper-spock": "Paper disproves Spock",
          "paper-rock": "Paper covers Rock",
          "rock-scissors": "Rock crushes Scissors",
          "scissors-paper": "Scissors cuts Paper",
          "spock-scissors": "Spock smashes Scissors",
        };

        if (userChoice === computerChoice) {
          winCaption.innerText = `It's a tie!`;
          userChoiceBtn.classList.add("winner");
          houseChoiceBtn.classList.add("winner");
        } else if (beatsTo[userChoice].includes(computerChoice)) {
          winCaption.innerText = `You Win!`;
          userScoreCount++;
          userChoiceBtn.classList.add("winner");
          userScore.innerText = userScoreCount;
          rule.classList.remove("loses");

          if (beatsTo[userChoice].includes(computerChoice)) {
            // Use the rules object to get the rule that explains the outcome
            rule.innerText = rulesDescribe[userChoice + "-" + computerChoice];
          }
        } else if (beatsTo[computerChoice].includes(userChoice)) {
          winCaption.innerText = `You Lose!`;
          houseScoreCount++;
          houseChoiceBtn.classList.add("winner");
          rule.classList.add("loses");
          houseScore.innerText = houseScoreCount;
          // Use the beats object to check if the userChoice wins over the computerChoice
          if (beatsTo[computerChoice].includes(userChoice)) {
            // Use the rules object to get the rule that explains the outcome
            rule.innerText = rulesDescribe[computerChoice + "-" + userChoice];
          }
        }

        setTimeout(() => {
          rematch.classList.add("show");
        }, 1000);
        const playAgain = document.querySelector(".play-again");
        const reset = document.querySelector(".reset");

        playAgain.addEventListener("click", () => {
          btn.classList.remove("active");
          rpsChoiceBtns[1].classList.remove("hide");
          level.classList.remove("hide");
          rematch.classList.remove("show");
          result.classList.remove("show");
        });

        reset.addEventListener("click", () => {
          userScoreCount = 0;
          houseScoreCount = 0;
          rpsChoiceBtns[1].classList.remove("hide");
          rematch.classList.remove("show");
          level.classList.remove("hide");
          btn.classList.remove("active");
          result.classList.remove("show");
          userScore.innerText = userScoreCount;
          houseScore.innerText = houseScoreCount;
        });
      }, 2000);
    }
  });
}); /*-------------------------------
----------- Rules Button ------------
------------------------------- */
const rulesBtn = document.querySelector(".rule");
const showRules = document.querySelector(".rules");
const exit = document.querySelector(".exit");
const normalRules = document.querySelector(".normal-rules-img");
const advancedRules = document.querySelector(".advanced-rules-img");

rulesBtn.addEventListener("click", () => {
  showRules.classList.toggle("show");
  if (level.innerText === "Advanced") {
    normalRules.classList.remove("normal-mode-hide");
    advancedRules.classList.remove("show");
  } else {
    normalRules.classList.add("normal-mode-hide");
    advancedRules.classList.add("show");
  }
  exit.addEventListener("click", () => {
    showRules.classList.remove("show");
  });
});

level.addEventListener("click", () => {
  advancedMode.classList.toggle("show");
  normalMode.classList.toggle("hide");
  advancedLogo.classList.toggle("show");
  normalLogo.classList.toggle("hide");
  userScoreCount = 0;
  houseScoreCount = 0;
  userScore.innerText = userScoreCount;
  houseScore.innerText = houseScoreCount;
  level.innerText === "Advanced"
    ? (level.innerText = "Normal")
    : (level.innerText = "Advanced");
});
