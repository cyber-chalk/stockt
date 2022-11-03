let container = document.getElementById("primary-chart");

let moneyValue = document.getElementById("money");
let dateValue = document.getElementById("date");
let infoBox = document.getElementById("info-box");

let rect = container.getBoundingClientRect();

container.addEventListener("mouseleave", function () {
	infoBox.style.display = "none";
});

container.addEventListener("mousemove", function (event) {
	let x = Math.round(((event.clientX - rect.left) / rect.width) * 100);
	let y = Math.round(((event.clientY - rect.top) / rect.height) * 100);

	let time;
	let money;

	infoBox.style.display = "flex";

	if (x >= 0 && x <= 10) time = "april";
	else if (x >= 11 && x <= 25) time = "may";
	else if (x >= 26 && x <= 40) time = "june";
	else if (x >= 41 && x <= 55) time = "july";
	else if (x >= 56 && x <= 69) time = "august";
	else if (x >= 70 && x <= 88) time = "september";
	else time = "No date";

	if (y <= 90 && y >= 75) money = "$150";
	else if (y <= 74 && y >= 60) money = "$200";
	else if (y <= 59 && y >= 45) money = "$250";
	else if (y <= 44 && y >= 28) money = "$300";
	else if (y <= 27 && y >= 13) money = "$350";
	else if (y <= 12 && y >= 1) money = "$400";
	else money = "$0";

	moneyValue.innerHTML = `${money}`;
	dateValue.innerHTML = `${time}`;

	infoBox.style.top = event.clientY + "px";
	infoBox.style.left = event.clientX + "px";
});
