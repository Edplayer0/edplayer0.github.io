// Inicializar conexión con Pusher
const pusher = new Pusher({
  appId: '1646185',
  key: 'f9742413a1f6c1dfbcde',
  secret: 'ed950037bb0e26ae9f29',
  cluster: 'us2',
  encrypted: true
});

// Suscribirse al canal 'chat-channel'
const channel = pusher.subscribe('chat-channel');

// Escuchar eventos de 'nuevo-mensaje'
channel.bind('nuevo-mensaje', function(data) {
  const chatMessages = document.getElementById('chat-messages');
  const message = document.createElement('p');
  message.innerText = data.message;
  chatMessages.appendChild(message);
});

// Enviar mensaje cuando se envíe el formulario
const messageForm = document.getElementById('message-form');
messageForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  // Enviar mensaje al evento 'nuevo-mensaje' del canal 'chat-channel'
  pusher.trigger('chat-channel', 'nuevo-mensaje', { message: message });

  messageInput.value = '';
});
