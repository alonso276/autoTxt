//select from the dom
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'I love programming!';

//initialize variable in index 1 we'll type one by one
let idx = 1;

let speed = 300 / speedEl.value;

writeText();

function writeText() {
	// index starts at 1
	textEl.innerText = text.slice(0, idx);
	idx++;

	//if index is greater than text length it starts over
	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
}

//speedEl is the number input
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
