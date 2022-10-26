let container = document.getElementById("primary-chart");
let coordsText = document.getElementById("coords");
let values = document.getElementById("computed");

container.addEventListener("mousemove", function (event) {
	let rect = container.getBoundingClientRect();

	let x = Math.round(((event.clientX - rect.left) / rect.width) * 100);
	let y = Math.round(((event.clientY - rect.top) / rect.height) * 100);

	coordsText.innerHTML = `X position:${x} Y position: ${y}`;
	compute(x, y);
});

function compute(x, y) {
	let time;
	let money;

	if (x < 0 || y < 0) return;

	if (x >= 0 && x <= 10) time = "april";
	else if (x >= 11 && x <= 25) time = "may";
	else if (x >= 26 && x <= 40) time = "june";
	else if (x >= 41 && x <= 55) time = "july";
	else if (x >= 56 && x <= 69) time = "august";
	else if (x >= 70 && x <= 88) time = "september";
	else time = "";

	if (y <= 90 && y >= 75) money = "$150";
	else if (y <= 74 && y >= 60) money = "$200";
	else if (y <= 59 && y >= 45) money = "$250";
	else if (y <= 44 && y >= 28) money = "$300";
	else if (y <= 27 && y >= 13) money = "$350";
	else if (y <= 12 && y >= 1) money = "$400";
	else money = "";

	values.innerHTML = `Time: ${time} Money: ${money}`;
}

//switch case to find values of money and time. use <= >=
