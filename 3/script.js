const text = document.getElementById('text');
const messageInput = document.getElementById('message__input');
const sendButton = document.getElementById('send__button');
const locationButton = document.getElementById('location__button');

const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

websocket.onmessage = function(event) {
  const message = event.data;
  showMessage(message);
};

function showMessage(message) {
  const messageElement = document.createElement('span');
  messageElement.innerText = message;
  text.appendChild(messageElement);
}

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  websocket.send(message);
  showMessage(message);
  messageInput.value = '';
});

locationButton.addEventListener('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const link = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}`;
      showMessage(`Геолокация: ${link}`);
    }, function(error) {
      console.error('Ошибка получения геопозиции', error);
    });
  }
});