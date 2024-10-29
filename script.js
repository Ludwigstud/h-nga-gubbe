const thirdLetterWord = ["cat", "dog", "sun", "pen", "hat"];
const fourLetterWord = ["pear", "card", "fish", "cart", "fart"];
const fiveLetterWord = ["crazy", "house", "bread", "water", "light"];
let keysPressed = [];
let guesses = 0;
let word;
const hangman = ["scaffold", "head", "body", "arms", "legs"];
let hangmanCounter = 0;
document.addEventListener("keydown", buttonPressed);

function startGame() {
	wordPicker();
}

function buttonPressed(pressed) {
	if (!keysPressed.includes(pressed.key)) {
		keysPressed.push(pressed.key);
	}
	console.log(pressed.key);
	winOrLose();

	if (word.length == 3) {
		if (pressed.key == word[0]) {
			letters[0].innerText = word[0];
		} else if (pressed.key == word[1]) {
			letters[1].innerText = word[1];
		} else if (pressed.key == word[2]) {
			letters[2].innerText = word[2];
		} else {
			guesses++;
			document.querySelector(`#${hangman[hangmanCounter]}`).style.display =
				"block";
			hangmanCounter++;
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
			guesses++;
			document.querySelector(`#${hangman[hangmanCounter]}`).style.display =
				"block";
			hangmanCounter++;
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
			guesses++;
			document.querySelector(`#${hangman[hangmanCounter]}`).style.display =
				"block";
			hangmanCounter++;
		}
	}
	console.log(guesses);
}

function wordPicker() {
	let rnd = Math.floor(Math.random() * 3);
	if (rnd == 0) {
		word =
			thirdLetterWord[Math.floor(Math.random() * thirdLetterWord.length)].split(
				""
			);

		console.log(word);
	} else if (rnd == 1) {
		word =
			fourLetterWord[Math.floor(Math.random() * fourLetterWord.length)].split(
				""
			);

		console.log(word);
	} else {
		word =
			fiveLetterWord[Math.floor(Math.random() * fiveLetterWord.length)].split(
				""
			);

		console.log(word);
	}
	const div = document.querySelector("#letters");
	word.forEach((letter) => {
		let lett = document.createElement("p");

		div.appendChild(lett);
	});
}

function winOrLose() {
	if (guesses >= 5) {
		console.log("u lost");
	}
}

startGame();

const letters = document.querySelectorAll("p");
