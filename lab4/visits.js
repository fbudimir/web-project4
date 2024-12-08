let pageVisits = localStorage.getItem("pageVisits")
	? parseInt(localStorage.getItem("pageVisits"))
	: 0;

function updatePageVisits() {
	pageVisits++;
	localStorage.setItem("pageVisits", pageVisits);
	document.getElementById("page-visits").innerText = pageVisits;
}

window.onload = function () {
	updatePageVisits();
};
