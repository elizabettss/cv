function fetchData() {
  fetch('https://profile.free.beeceptor.com/allcv', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); 
  })
  .then(data => {
      console.log('Received data:', data);       
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
}

// Викликаємо fetchData
fetchData(); 

// Робимо дії, коли DOM повністю завантажений
document.addEventListener('DOMContentLoaded', function() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalImage = document.getElementById('modalImage');
  const closeModalButton = document.getElementById('closeModal');

  // Обробляємо кліки на всіх зображеннях з класом "img"
  document.querySelectorAll('.img').forEach(image => {
      image.addEventListener('click', function(event) {
          modalImage.src = event.target.src; // Встановлюємо зображення в модальне вікно
          modalOverlay.style.display = 'flex'; // Показуємо модальне вікно
      });
  });

  // Закриваємо модальне вікно при натисканні на кнопку закриття
  closeModalButton.addEventListener('click', function() {
      modalOverlay.style.display = 'none';
  });

  // Закриваємо модальне вікно при кліку на темну область (overlay)
  modalOverlay.addEventListener('click', function() {
      modalOverlay.style.display = 'none';
  });

  // Запобігаємо закриттю модального вікна при кліку всередині нього
  const modalContent = document.querySelector('.modal-content');
  modalContent.addEventListener('click', function(event) {
      event.stopPropagation(); 
  });
});
