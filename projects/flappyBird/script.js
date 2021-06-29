var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// Creates where the hole is
hole.addEventListener("animationiteration", () => {
	var random = -(Math.random() * 300 + 150);
	hole.style.top = random + "px";
	counter++;
	document.getElementById("message").innerHTML = "Score: " + counter;
});

// Adds Gravity
setInterval(function () {
	var characterTop = parseInt(
		window.getComputedStyle(character).getPropertyValue("top")
	);
	if (jumping == 0) {
		character.style.top = characterTop + 3 + "px";
	}
	var blockLeft = parseInt(
		window.getComputedStyle(block).getPropertyValue("left")
	);
	var holeTop = parseInt(
		window.getComputedStyle(hole).getPropertyValue("top")
	);
	var cTop = -(500 - characterTop);

	// Checks for loss, and Game Over message
	if (
		characterTop > 480 ||
		(blockLeft < 20 &&
			blockLeft > -50 &&
			(cTop < holeTop || cTop > holeTop + 130))
	) {
		document.getElementById("character").style.display = "none";
		document.getElementById("message").innerHTML =
			"Game Over. Score: " + counter;
		document.getElementById("block").style.animation =
			"block 0s infinite linear";
		document.getElementById("hole").style.animation =
			"block 0s infinite linear";
	}
}, 9);

// Adds Jumping Functionality
function jump() {
	jumping = 1;
	let jumpCount = 0;
	var jumpInterval = setInterval(function () {
		var characterTop = parseInt(
			window.getComputedStyle(character).getPropertyValue("top")
		);
		if (characterTop > 6 && counter < 15) {
			character.style.top = characterTop - 3 + "px";
		}
		if (jumpCount > 20) {
			clearInterval(jumpInterval);
			jumping = 0;
			jumpCount = 0;
		}
		jumpCount++;
	}, 5);
}
