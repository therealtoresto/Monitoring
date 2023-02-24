const dgram = require('dgram');

const socket = dgram.createSocket('udp4');
const name = 'Terens Boroni';

setInterval(() => {
  const message = Buffer.from(name);
  socket.send(message, 2222, 'localhost', (error) => {
    if (error) console.error(error);
    console.log(`Отправлено сообщение: ${message}`);
  });
}, 6000);