let settings = document.getElementsByClassName("cookie-container")[0];

let value = ("; " + document.cookie).split(`; name=`).pop().split(";")[0];
console.log(value, "value");
//check if the user has already visited
if (value.length != 0) {
	settings.style.display = "none";
}

let input = document.getElementById("popup-input");
let close = document.getElementById("close");
close.addEventListener("click", function () {
	if (input.value == "") return (settings.style.display = "none");
	document.cookie = "name=" + input.value + ";max-age=86400;";
	value = input.value;

	console.log(document.cookie, input.value);
	settings.style.display = "none";
});

// function deleteCookie(name) {.
// 	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// }

// Profile

let profile = document.getElementsByClassName("profile-container")[0];
let openbtn = document.getElementById("profile");
openbtn.addEventListener("click", function () {
	profile.style.display = "block";
	update();
});

let closeProfile = document.getElementById("close-profile");
closeProfile.addEventListener("click", function () {
	profile.style.display = "none";
});

let cookieStatus = document.querySelector(".profile-container h1");

let update = () => {
	if (value.length != 0) cookieStatus.innerText = value;
};
