document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	// event listener
	document.getElementById('submit').addEventListener('click', function() {
		generateBonus(2, 1, 12);
		generate(5, 1, 50);
	});

	// functions for calculating random numbers
	// main numbers
	function generate(size, lowest, highest) {
		let numbers = [];
		for (let i = 0; i < size; i++) {
			let add = true;
			let randomNumber = Math.floor(Math.random() * highest) + 1;
			for (let y = 0; y < highest; y++) {
				if (numbers[y] == randomNumber) {
					add = false;
				}
			}
			if (add) {
				numbers.push(randomNumber);
			} else {
				i--;
			}
		}

		let highestNumber = 0;
		for (let m = 0; m < numbers.length; m++) {
			for (let n = m + 1; n < numbers.length; n++) {
				if (numbers[n] < numbers[m]) {
					highestNumber = numbers[m];
					numbers[m] = numbers[n];
					numbers[n] = highestNumber;
				}
			}
		}

		document.getElementById('number1').innerHTML = numbers[0];
		document.getElementById('number2').innerHTML = numbers[1];
		document.getElementById('number3').innerHTML = numbers[2];
		document.getElementById('number4').innerHTML = numbers[3];
		document.getElementById('number5').innerHTML = numbers[4];
	}

	// bonus numbers
	function generateBonus(size, lowest, highest) {
		let numbers = [];
		for (let i = 0; i < size; i++) {
			let add = true;
			let randomNumber = Math.floor(Math.random() * highest) + 1;
			for (let y = 0; y < highest; y++) {
				if (numbers[y] == randomNumber) {
					add = false;
				}
			}
			if (add) {
				numbers.push(randomNumber);
			} else {
				i--;
			}
		}

		let highestNumber = 0;
		for (let m = 0; m < numbers.length; m++) {
			for (let n = m + 1; n < numbers.length; n++) {
				if (numbers[n] < numbers[m]) {
					highestNumber = numbers[m];
					numbers[m] = numbers[n];
					numbers[n] = highestNumber;
				}
			}
		}

		document.getElementById('bnumber2').innerHTML = numbers[1];
		document.getElementById('bnumber2').className = 'animated flipInX';
		document.getElementById('bnumber1').innerHTML = numbers[0];
		document.getElementById('bnumber1').className = 'animated flipInX';
	}
}
