// Inicializar conexión con Pusher
const pusher = new Pusher('f9742413a1f6c1dfbcde', {
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

// Enviar mensaje cuando se haga clic en el botón "Enviar"
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', function() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  // Enviar mensaje al evento 'nuevo-mensaje'
  channel.trigger('nuevo-mensaje', { message });

  messageInput.value = '';
});
