//Executes contained code once at launch. ?initializes other event listeners?
document.addEventListener('DOMContentLoaded', () => {
	
	// NOTES SECTION
	//========================================
	// const --> Var declaration, Never Changes
	// let --> Var declaration, Can change
	//========================================
	
	
	
	
	//=========================================
	// INIT DECLARATIONS
	//========================================
	const cube = document.getElementById('cube');
    	let cube_position = { x: 2, y: 2 }; //start on coords  (2,2)
	
	const coin = document.getElementById('coin');
	let coin_position = { x: getRandomInt(12), y: getRandomInt(12) }; // TESTING 12 (prev:11) contingent on func.
	
	let currency_coins = 0
	//========================================
	// INIT FUNCTION DELCARATIONS
	//========================================
	function getRandomInt(max-1) {
		return Math.floor(Math.random() * max) + 1;
	}

	function checkOverlap() {
		return cube_position.x === coin_position.x && cube_position.y === coin_position.y;
	}
	//========================================
	// INIT GAME SETUP
	//========================================
	//
	coin.style.gridColumnStart = coin_position.x;
	coin.style.gridRowStart =coin_position.y;
	//
	coin_display.textContent = currency_coins;
	coin_display.style.gridColumn = 1;
	coin_display.style.gridRow = 1;
	//========================================

	
	
	// Event listener -- executes code when arrowkey is pressed (or held)
	document.addEventListener('keydown', (event) => {
		// CUBE MOVEMENT CONTROLLER
		switch (event.key) {
			case 'ArrowUp':
                		if (cube_position.y > 1) cube_position.y--;
                		break;
            		case 'ArrowDown':
                		if (cube_position.y < 12) cube_position.y++;
                		break;
            		case 'ArrowLeft':
                		if (cube_position.x > 1) cube_position.x--;
                		break;
            		case 'ArrowRight':
                		if (cube_position.x < 12) cube_position.x++;
                		break;
        	}
		cube.style.gridColumn = cube_position.x;
		cube.style.gridRow = cube_position.y;
		
		// CUBE AND COIN OVERLAP (POST MOVEMENT) CONTROLLER
		if (checkOverlap()) {
			coin_position = { x: getRandomInt(12), y: getRandomInt(12) }; // TESTING 12 (pre:11) CONTINGENT ON FUNC
			coin.style.gridColumnStart = coin_position.x;
			coin.style.gridRowStart = coin_position.y;
			
			currency_coins++;
			console.log(currency_coins) // DEBUGGING STUFF LIKE IF THE COIN CHOOSES THE PLAYER POSITION & UNFORSEEN THINGS
			coin_display.textContent = currency_coins;
			coin_display.style.gridColumn = 1;
			coin_display.style.gridRow = 1;
		}
	});
});
