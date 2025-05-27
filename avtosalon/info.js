function openReviewsModal() {
	document.getElementById('reviews-modal').style.display = 'block';
}

// Закриття модального вікна
function closeReviewsModal() {
	document.getElementById('reviews-modal').style.display = 'none';
}

// Додавання відгуку
function addReview() {
	const name = document.getElementById('name').value;
	const reviewText = document.getElementById('review').value;

	if (name && reviewText) {
		const reviewList = document.getElementById('review-list');
		const newReview = document.createElement('div');
		newReview.classList.add('review-item');
		newReview.innerHTML = `<strong>${name}</strong>: ${reviewText}`;
		reviewList.appendChild(newReview);

		// Очистити форму після додавання
		document.getElementById('name').value = '';
		document.getElementById('review').value = '';
	}
}