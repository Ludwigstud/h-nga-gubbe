const thirdLetterWord = ["cat", "dog", "sun", "pen", "hat"];
const fourLetterWord = ["pear", "card", "fish", "cart", "fart"];
const fiveLetterWord = ["crazy", "house", "bread", "water", "light"];
let keysPressed = [];
let guesses = 0;
let word;

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
			console.log("Det var den första bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[1]) {
			console.log("Det var den andra bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[2]) {
			console.log("Det var den tredje bokstaven"); //pressed key to innerText
		}
	} else if (word.length == 4) {
		if (pressed.key == word[0]) {
			console.log("Det var den första bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[1]) {
			console.log("Det var den andra bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[2]) {
			console.log("Det var den tredje bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[3]) {
			console.log("Det var den fjärde bokstaven"); //pressed key to innerText
		}
	} else if (word.length == 5) {
		if (pressed.key == word[0]) {
			console.log("Det var den första bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[1]) {
			console.log("Det var den andra bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[2]) {
			console.log("Det var den tredje bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[3]) {
			console.log("Det var den fjärde bokstaven"); //pressed key to innerText
		} else if (pressed.key == word[4]) {
			console.log("Det var den femte bokstaven"); //pressed key to innerText
		}
	}
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

	const test = document.querySelectorAll("p");
	console.log(test[0]);
}

function winOrLose() {
	guesses++;
	//if guesses 5 lose
	//check css hidden or innerText
	//guess = 5 lose else win
}

startGame();
