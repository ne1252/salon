document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll(".accordion");

	accordions.forEach(button => {
		button.addEventListener("click", () => {
			const panel = button.nextElementSibling;
			button.classList.toggle("active");

			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	});
});

