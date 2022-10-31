let settings = document.getElementsByClassName("cookie-container")[0];

const value = ("; " + document.cookie).split(`; name=`).pop().split(";")[0];

//check if the user has already visited
if (document.cookie == String) settings.style.display = "none";

let input = document.getElementById("popup-input");
let close = document.getElementById("close");
close.addEventListener("click", function () {
	if (input.value == "") settings.style.display = "none";
	document.cookie = "name=" + input.value;
	console.log(document.cookie, input.value, "hi :)");
	settings.style.display = "none";
});

function deleteCookie(name) {
	document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// let openProfile = document.getElementsByClassName("right-icons")[2];
// openProfile.addEventListener("onclick", function () {
// 	settings.style.display = "flex";
// });
