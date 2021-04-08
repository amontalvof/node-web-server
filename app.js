require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Andy Montalvo',
        title: 'Node Course',
    });
});
app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Andy Montalvo',
        title: 'Node Course',
    });
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Andy Montalvo',
        title: 'Node Course',
    });
});
app.get('*', (req, res) => {
    // res.sendFile(__dirname + '/public/404.html');
    res.send('404 Not Found');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
