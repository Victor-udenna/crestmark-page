let answers = document.querySelectorAll(".content-container");
answers.forEach((event) => {
event.addEventListener("click", () => {
	if (event.classList.contains("active")) {
	event.classList.remove("active");
	} else {
	event.classList.add("active");
	}
});
});


// const faq_head = document.getElementsByClassName('content-container');

// for (i = 0; i < faq_head.length; i++) {

//     faq_head[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//     })
// };