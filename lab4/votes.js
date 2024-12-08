const cookieImages = [
	"c1.png",
	"c2.png",
	"c3.png",
	"c4.png",
	"c5.png",
	"c6.png",
	"c7.jpg",
	"c8.png",
	"c9.png",
	"c10.png",
	"c11.png",
	"c12.jpg",
	"c13.png",
	"c14.jpg",
	"c15.png",
	"c16.png",
	"c17.png",
	"c18.png",
	"c19.png",
	"c20.jpg",
	"c21.jpg",
	"c22.jpg",
	"c23.jpg",
	"c24.jpg",
	"c25.jpg",
	"c26.jpg",
	"c27.jpg",
	"c28.jpg",
	"c29.jpg",
	"c30.jpg",
	"c31.jpg",
];

let totalVotes = parseInt(localStorage.getItem("totalVotes")) || 0;

let cookieVotes =
	JSON.parse(localStorage.getItem("cookieVotes")) ||
	Array(cookieImages.length).fill(0);

function createCookieImage(src, index) {
	const imageDiv = document.createElement("div");
	imageDiv.classList.add("cookie-image");

	const img = document.createElement("img");
	img.src = `images/${src}`;
	img.alt = "Chocolate Chip Cookie";
	img.classList.add("cookie-image-img");

	const voteCount = document.createElement("p");
	voteCount.innerText = `Votes: ${cookieVotes[index]}`;
	voteCount.classList.add("vote-count");

	img.onclick = function () {
		cookieVotes[index]++;
		voteCount.innerText = `Votes: ${cookieVotes[index]}`;

		updateTotalVotes();
		saveVotes();
	};

	imageDiv.appendChild(img);
	imageDiv.appendChild(voteCount);

	return imageDiv;
}

function updateTotalVotes() {
	totalVotes = cookieVotes.reduce((sum, votes) => sum + votes, 0);
	document.getElementById(
		"total-votes"
	).innerText = `Total Votes: ${totalVotes}`;
}

function loadCookieImages() {
	const cookieImagesContainer = document.getElementById("cookie-images");
	cookieImages.forEach((image, index) => {
		const cookieImageElement = createCookieImage(image, index);
		cookieImagesContainer.appendChild(cookieImageElement);
	});

	updateTotalVotes();
}

function saveVotes() {
	localStorage.setItem("cookieVotes", JSON.stringify(cookieVotes));
	localStorage.setItem("totalVotes", totalVotes);
}

loadCookieImages();
