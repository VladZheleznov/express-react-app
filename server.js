const express = require('express');
const cors = require('cors')
const axios = require('axios');//Строка 1
const app = express(); //Строка 2
const port = process.env.PORT || 5000; //Строка 3

// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6

app.use(cors({
    origin: 'http://localhost:3000'
}));

// Создание GET маршрута
app.get('/express_backend', (req, res) => { //Строка 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Строка 10
}); //Строка 11

app.get('/currencies', (req, res) => { //Строка 9
  axios.get("https://www.cbr-xml-daily.ru/latest.js")
    .then(function (resp) { 
      res.send(resp.data)
}).catch((err) => res.send({Error: 'something egmeom'}))
});




