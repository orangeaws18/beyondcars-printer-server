const express = require('express');
const SocketServer = require('ws').Server;

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next()
})

app.get('/', (req, res) => {
    res.send({ message: 'i love orange' })
})

app.post('/print-qrcode', (req, res) => {
  const clients = wss.clients;
  clients.forEach(client => {
    client.send(JSON.stringify(req.body))
  })

  res.send({ message: 'success' })
})

const server = app.listen(PORT, () => {
  console.log(`API 服務啟動在端口 ${PORT}`)
})

const wss = new SocketServer({ server });

wss.on('connection', ws => {
  console.log('WebSocket 連接成功');

  ws.on('message', data => {
    console.log(JSON.parse(data));
  })

  ws.on('close', () => {
    console.log('WebSocket 連接關閉');
  })

})