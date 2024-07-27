document.addEventListener('DOMContentLoaded', () => {
    // Code that executes once at startup
	
	//const --> Var declaration, Never Changes
	//let --> Var declaration, Can change
	
	let currency_coins = 0 //NOT DOING ANYTHING WITH THIS YET
	
	const cube = document.getElementById('cube');
    let cube_position = { x: 2, y: 2 }; //start on coords  (2,2)
	
	const coin = document.getElementById('coin');
	let coin_position = { x: getRandomInt(11), y: getRandomInt(11) }; //11 is actually 12 due to floor in function.
	
	coin.style.gridColumnStart = coin_position.x;
	coin.style.gridRowStart =coin_position.y;
	
	function getRandomInt(max) {
		return Math.floor(Math.random() * max) + 1;
	}

	function checkOverlap() {
		return cube_position.x === coin_position.x && cube_position.y === coin_position.y;
	}
	
	
	// Event listener that ticks when arrowkeys are pressed
    document.addEventListener('keydown', (event) => {
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
        cube.style.gridColumnStart = cube_position.x;
        cube.style.gridRowStart = cube_position.y;
		
		if (checkOverlap()) {
			coin_position = { x: getRandomInt(11), y: getRandomInt(11) };
			coin.style.gridColumnStart = coin_position.x;
			coin.style.gridRowStart = coin_position.y;
			
			currency_coins++;
			console.log(currency_coins)
			coin_display.textContent = currency_coins;
			coin_display.style.gridColumnStart = coin_position.x;
			coin_display.style.gridRowStart = coin_position.y;
        }
    });
});
