const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        name: 'Andy Montalvo',
        title: 'Node Course'
    });
});
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});
app.get('*', (req, res) => {
    // res.sendFile(__dirname + '/public/404.html');
    res.send('404 Not Found');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
