const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Dele que dele, trope and galope. Esse código precisa ser aprovado manualmente.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
