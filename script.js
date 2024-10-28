const thirdLetterWord = ["Cat", "Dog", "Sun", "Pen", "Hat"];
const fourLetterWord = ["Book", "Tree", "Fish", "Ball", "Door"];
const fiveLetterWord = ["Apple", "House", "Bread", "Water", "Light"];
let keysPressed = [];
let guesses = 0;

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
		if (
			pressed.key == word[0] ||
			pressed.key == word[1] ||
			pressed.key == word[2]
		) {
		}
	} else if (word.length == 4) {
	} else if (word.length == 5) {
	}
}

function wordPicker() {
	let rnd = Math.floor(Math.random() * 3);
	let word;
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
		word.forEach((letter) => {
			//show rectangles for letters in word
		});
	}
}

function winOrLose() {
	//if guesses 5 lose
	//check css hidden or innerText
	//guess = 5 lose else win
}

startGame();
