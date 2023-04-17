const express = require('express');

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
    res.send({ message: 'hello orange' })
})

app.listen(PORT, () => {
    console.log(`API 服務啟動在端口 ${PORT}`)
})