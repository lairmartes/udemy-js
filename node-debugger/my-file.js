const express = require('express');
const app = express();

app.get('/', (req, res) => {
    debugger;
    res.send('Hey, it worked.');

});

app.listen(3000, () => console.log('Server is running.'));