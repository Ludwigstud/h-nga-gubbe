const word = "Word";
const keysPressed = [];

let wordSplit = word.split("");
console.log(wordSplit);

document.addEventListener("keydown", (event) => {
	// Check if the key is not already in the array to avoid duplicates (optional)
	if (!keysPressed.includes(event.key)) {
		keysPressed.push(event.key);
	}
	console.log(keysPressed); // Log the updated array to the console
});
