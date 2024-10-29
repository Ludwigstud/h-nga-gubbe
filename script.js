const thirdLetterWord = ["cat", "dog", "sun", "pen", "hat"];
const fourLetterWord = ["pear", "card", "fish", "cart", "fart"];
const fiveLetterWord = ["crazy", "house", "bread", "water", "light"];
let keysPressed = [];
let guesses = 0;
let word;
const hangman = ["scaffold", "head", "body", "arms", "legs"];

let hangmanCounter = 0;
document.addEventListener("keydown", buttonPressed);
document
	.querySelector(".restart-win")
	.addEventListener("click", () => location.reload());
document
	.querySelector(".restart-loss")
	.addEventListener("click", () => location.reload());
function startGame() {
	wordPicker();
}

function buttonPressed(pressed) {
	if (hangmanCounter > 4) {
	} else if (word.length == 3) {
		if (pressed.key == word[0]) {
			letters[0].innerText = word[0];
		} else if (pressed.key == word[1]) {
			letters[1].innerText = word[1];
		} else if (pressed.key == word[2]) {
			letters[2].innerText = word[2];
		} else {
			if (document.querySelector("#win-screen").style.display != "flex") {
				if (!keysPressed.includes(pressed.key)) {
					keysPressed.push(pressed.key);
					guesses++;
					document.querySelector(`#${hangman[hangmanCounter]}`).style.display =
						"block";
					hangmanCounter++;
					usedLetters.appendChild(wrongLetter);
					wrongLetter.innerText = `${keysPressed} `;
				}
			}
		}
	} else if (word.length == 4) {
		if (pressed.key == word[0]) {
			letters[0].innerText = word[0];
		} else if (pressed.key == word[1]) {
			letters[1].innerText = word[1];
		} else if (pressed.key == word[2]) {
			letters[2].innerText = word[2];
		} else if (pressed.key == word[3]) {
			letters[3].innerText = word[3];
		} else {
			if (document.querySelector("#win-screen").style.display != "flex") {
				if (!keysPressed.includes(pressed.key)) {
					keysPressed.push(pressed.key);
					guesses++;
					document.querySelector(`#${hangman[hangmanCounter]}`).style.display =
						"block";
					hangmanCounter++;
					usedLetters.appendChild(wrongLetter);
					wrongLetter.innerText = `${keysPressed} `;
				}
			}
		}
	} else if (word.length == 5) {
		if (pressed.key == word[0]) {
			letters[0].innerText = word[0];
		} else if (pressed.key == word[1]) {
			letters[1].innerText = word[1];
		} else if (pressed.key == word[2]) {
			letters[2].innerText = word[2];
		} else if (pressed.key == word[3]) {
			letters[3].innerText = word[3];
		} else if (pressed.key == word[4]) {
			letters[4].innerText = word[4];
		} else {
			if (document.querySelector("#win-screen").style.display != "flex") {
				if (!keysPressed.includes(pressed.key)) {
					keysPressed.push(pressed.key);
					guesses++;
					document.querySelector(`#${hangman[hangmanCounter]}`).style.display =
						"block";
					hangmanCounter++;
					usedLetters.appendChild(wrongLetter);
					wrongLetter.innerText = `${keysPressed} `;
				}
			}
		}
	}

	if (compareArrays()) {
		win();
	} else {
	}

	if (
		hangmanCounter == 5 &&
		document.querySelector("#win-screen").style.display != "flex"
	) {
		lose();
	}
}

function wordPicker() {
	let rnd = Math.floor(Math.random() * 3);
	if (rnd == 0) {
		document.querySelector("#the-word-was").innerText = `The word was: "${
			thirdLetterWord[Math.floor(Math.random() * thirdLetterWord.length)]
		}"`;
		word =
			thirdLetterWord[Math.floor(Math.random() * thirdLetterWord.length)].split(
				""
			);
	} else if (rnd == 1) {
		document.querySelector("#the-word-was").innerText = `The word was: "${
			fourLetterWord[Math.floor(Math.random() * fourLetterWord.length)]
		}"`;
		word =
			fourLetterWord[Math.floor(Math.random() * fourLetterWord.length)].split(
				""
			);
	} else if (rnd == 2) {
		document.querySelector("#the-word-was").innerText = `The word was: "${
			fiveLetterWord[Math.floor(Math.random() * fiveLetterWord.length)]
		}"`;
		word =
			fiveLetterWord[Math.floor(Math.random() * fiveLetterWord.length)].split(
				""
			);
	}
	const div = document.querySelector("#letters");
	word.forEach((letter) => {
		let letterBox = document.createElement("p");
		div.appendChild(letterBox);
	});
}

function lose() {
	document.querySelector("#loss-screen").style.display = "flex";
}
function win() {
	document.querySelector("#win-screen").style.display = "flex";
}
startGame();

const letters = document.querySelectorAll("p");

function compareArrays() {
	const lettersArray = Array.from(letters).map((el) => el.innerText);

	for (let i = 0; i < word.length; i++) {
		if (word[i] !== lettersArray[i]) {
			return false;
		}
	}

	return true;
}

usedLetters = document.querySelector(".used-letters");
let wrongLetter = document.createElement("p");
