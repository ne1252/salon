const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.toggle('active', i === index);
	});
}

prevButton.addEventListener('click', () => {
	currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
	showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
	currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
	showSlide(currentSlide);
});


function closeModal() {
	document.getElementById('modal').style.display = 'none';
}
// Відкрити модальне вікно для характеристик авто
function openModal(title, price, engine, drive, color, rik, info) {
	document.getElementById('modal-title').innerText = title;
	document.getElementById('modal-price').innerText = price;
	document.getElementById('modal-engine').innerText = engine;
	document.getElementById('modal-drive').innerText = drive;
	document.getElementById('modal-color').innerText = color;
	document.getElementById('modal-rik').innerText = rik;
	document.getElementById('modal-info').innerText = info;
	document.getElementById('modal').style.display = 'flex'; // Відкриваємо модальне вікно
}

document.getElementById('close-btn').addEventListener('click', closeModal);



// Закриття модального вікна, якщо натиснути на фон модального вікна для характеристик авто
window.addEventListener('click', function (event) {
	var modal = document.getElementById("modal");
	if (event.target === modal) {
		closeModal();
	}
});

// Відкриття модального вікна для відгуків
document.getElementById('reviews-link').addEventListener('click', function () {
	document.getElementById('reviews-modal').style.display = 'flex';
});

// Закриття модального вікна відгуків
function closeReviewsModal() {
	document.getElementById('reviews-modal').style.display = 'none';
}

// Функція для додавання нового відгуку
function addReview() {
	const name = document.getElementById('name').value;
	const review = document.getElementById('review').value;

	if (name && review) {
		const reviewList = document.getElementById('review-list');

		const reviewItem = document.createElement('div');
		reviewItem.classList.add('review-item');
		reviewItem.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

		reviewList.appendChild(reviewItem);

		// Очищення полів після додавання відгуку
		document.getElementById('name').value = '';
		document.getElementById('review').value = '';
	} else {
		alert('Будь ласка, заповніть всі поля.');
	}
}

// Відкриття модального вікна "Про нас"
function openAboutModal() {
	document.getElementById("about-modal").style.display = "flex";
}

// Закриття модального вікна "Про нас"
function closeAboutModal() {
	document.getElementById("about-modal").style.display = "none";
}

// Закриття модального вікна "Про нас" при натисканні на елемент з класом "close-about"
document.querySelector('.close-about').addEventListener('click', closeAboutModal);

// Закриття модального вікна "Про нас" при натисканні на фон
window.addEventListener('click', function (event) {
	if (event.target === document.getElementById("about-modal")) {
		closeAboutModal();
	}
});

// Закриття модального вікна "про нас" при натисканні на елемент з класом "close"
document.querySelector('.close-about').addEventListener('click', closeAboutModal);

// Закриваємо модальне вікно "про нас", якщо натиснути на фон
window.addEventListener('click', function (event) {
	if (event.target === document.getElementById("about-modal")) {
		closeAboutModal();
	}
});


// Загальні функції
document.addEventListener('DOMContentLoaded', function () {
	console.log('Сторінка завантажена');
});

// Специфічний функціонал для by.html
if (window.location.pathname.includes('by.html')) {
	const items = document.querySelectorAll('.by-item');
	items.forEach(item => {
		item.addEventListener('click', () => {
			alert('Ви вибрали б/у автомобіль');
		});
	});
}



