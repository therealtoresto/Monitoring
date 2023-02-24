const dgram = require('dgram');

const socket = dgram.createSocket('udp4');
const clients = new Map();

socket.on('listening', () => {
  const address = socket.address();
  console.log(`Сервер запущен на порте ${address.port}`);
});

socket.on('message', (message, remote) => {
  const name = message.toString();
  clients.set(name, Date.now());
  console.log('Message: ', name)
});

setInterval(() => {
  const now = Date.now();
  for (const [name, lastSeen] of clients.entries()) {
    if (now - lastSeen > 60000) {
      console.log(`Нет связи скриптом "${name}"`);
      clients.delete(name);
    }
  }
}, 1000);
socket.bind(2222, () => {
  socket.addMembership('224.0.0.114');
});