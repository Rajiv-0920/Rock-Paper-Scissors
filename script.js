/*-------------------------------
----------- Rock Paper Scissors Btns ------------
------------------------------- */
const level = document.querySelector(".level");
const advancedMode = document.querySelector(".advanced-mode");
const normalMode = document.querySelector(".game-body");
const advancedLogo = document.querySelector(".advanced");
const normalLogo = document.querySelector(".normal");

level.addEventListener("click", () => {
  advancedMode.classList.toggle("show");
  normalMode.classList.toggle("hide");
  advancedLogo.classList.toggle("show");
  normalLogo.classList.toggle("hide");
  level.innerText === "Advanced"
    ? (level.innerText = "Normal")
    : (level.innerText = "Advanced");
});

const rpsBtns = document.querySelectorAll(".rps-btns button");
const rpsChoiceBtns = document.querySelectorAll(".game-body");
const result = document.querySelector(".result");

let userScoreCount = 0;
let houseScoreCount = 0;

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
      const rps = ["rock", "paper", "scissors"];
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
      const rps = ["rock", "paper", "scissors", "spock", "lizard"];
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
           <p>The House Picked</p>
        </div>
    `;
      const winCaption = document.querySelector(".title");
      const userChoiceBtn = document.querySelector(`.your-picked .btn`);
      const housePickedShow = document.querySelector(`.house-picked`);
      const rematch = document.querySelector(`.rematch`);
      const userScore = document.querySelector(`.user-scores`);
      const houseScore = document.querySelector(`.house-scores`);
      const rule = document.querySelector(`p.rule`);

      setTimeout(() => {
        housePickedShow.innerHTML = `<button class="btn ${computerChoice} ">
              <img src="./images/icon-${computerChoice}.svg" alt="Paper" />
           
            </button> <p>The House Picked</p>`;
        const houseChoiceBtn = document.querySelector(`.house-picked .btn`);
        const rules = {
          rock: { beats: ["lizard", "scissors"], losesTo: ["paper", "spock"] },
          lizard: { beats: ["spock", "paper"], losesTo: ["rock", "scissors"] },
          spock: { beats: ["scissors", "rock"], losesTo: ["lizard", "paper"] },
          scissors: { beats: ["paper", "lizard"], losesTo: ["spock", "rock"] },
          paper: { beats: ["rock", "spock"], losesTo: ["scissors", "lizard"] },
        };
        if (userChoice === computerChoice) {
          winCaption.innerText = `It's a tie!`;
          userChoiceBtn.classList.add("winner");
          houseChoiceBtn.classList.add("winner");
        } else if (rules[userChoice].beats.includes(computerChoice)) {
          winCaption.innerText = `You Win!`;
          userScoreCount++;
          userChoiceBtn.classList.add("winner");
          userScore.innerText = userScoreCount;
          rule.classList.remove("loses");
          if (userChoice === "lizard" && computerChoice === "spock") {
            rule.innerText = `Lizard poisons Spock`;
          } else if (userChoice === "lizard" && computerChoice === "paper") {
            rule.innerText = `Lizard eats Paper`;
          } else if (userChoice === "spock" && computerChoice === "rock") {
            rule.innerText = `Spock vaporizes Rock`;
          } else if (userChoice === "scissors" && computerChoice === "lizard") {
            rule.innerText = `Scissors decapitates Lizard`;
          } else if (userChoice === "rock" && computerChoice === "lizard") {
            rule.innerText = `Rock crushes Lizard`;
          } else if (userChoice === "paper" && computerChoice === "spock") {
            rule.innerText = `Paper disproves Spock`;
          } else if (userChoice === "paper" && computerChoice === "rock") {
            rule.innerText = `Paper covers Rock`;
          } else if (userChoice === "rock" && computerChoice === "scissors") {
            rule.innerText = `Rock crushes Scissors`;
          } else if (userChoice === "scissors" && computerChoice === "paper") {
            rule.innerText = `Scissors cuts Paper`;
          } else if (userChoice === "spock" && computerChoice === "scissors") {
            rule.innerText = `Spock smashes Scissors`;
          }
        } else if (!rules[userChoice].beats.includes(computerChoice)) {
          winCaption.innerText = `You Lose!`;
          houseScoreCount++;
          houseChoiceBtn.classList.add("winner");
          rule.classList.add("loses");
          houseScore.innerText = houseScoreCount;
          if (userChoice === "lizard" && computerChoice === "scissors") {
            rule.innerText = `Scissors decapitates Lizard`;
          } else if (userChoice === "lizard" && computerChoice === "rock") {
            rule.innerText = `Rock crushes Lizard`;
          } else if (userChoice === "spock" && computerChoice === "lizard") {
            rule.innerText = `Lizard poisons Spock`;
          } else if (userChoice === "spock" && computerChoice === "paper") {
            rule.innerText = `Paper disproves Spock`;
          } else if (userChoice === "paper" && computerChoice === "lizard") {
            rule.innerText = `Lizard eats Paper`;
          } else if (userChoice === "rock" && computerChoice === "spock") {
            rule.innerText = `Spock vaporizes Rock`;
          } else if (userChoice === "rock" && computerChoice === "paper") {
            rule.innerText = `Paper covers Rock`;
          } else if (userChoice === "scissors" && computerChoice === "rock") {
            rule.innerText = `Rock crushes Scissors`;
          } else if (userChoice === "paper" && computerChoice === "scissors") {
            rule.innerText = `Scissors cuts Paper`;
          } else if (userChoice === "scissors" && computerChoice === "spock") {
            rule.innerText = `Spock smashes Scissors`;
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

console.log(normalRules, advancedRules);
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
