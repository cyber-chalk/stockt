let settings = document.getElementsByClassName("cookie-container")[0];

const value = ("; " + document.cookie).split(`; name=`).pop().split(";")[0];

//check if the user has already visited
if (value == String) settings.style.display = "none";

let input = document.getElementById("popup-input");
let close = document.getElementById("close");
close.addEventListener("click", function () {
	document.cookie = "name=" + input.value + ";max-age=86400;";

	console.log(document.cookie, input.value);
	settings.style.display = "none";
});

// function deleteCookie(name) {.
// 	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
// }

//Profile

let profile = document.getElementsByClassName("profile-container")[0];
let btn = document.getElementsByClassName("right-icons")[2];
btn.addEventListener("click", function () {
	profile.style.display = "flex";
});

let closeProfile = document.getElementById("close-profile");
closeProfile.addEventListener("click", function () {
	profile.style.display = "none";
});

let status = document.querySelector(".profile-contianer h1");
if (value == String) status.innerHTMl = value;
