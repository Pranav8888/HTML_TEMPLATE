const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening at Port ${3000}`));
app.use(express.static('public'));

