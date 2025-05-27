


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


<button onclick="window.location.href='index.html'">Головна сторінка</button>
