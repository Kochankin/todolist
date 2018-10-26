const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// DATA
let artists = [
    {
        id: 1,
        name: 'Metallica'
    },
    {
        id: 2,
        name: 'Iron Maiden'
    },
    {
        id: 3,
        name: 'Deep Purple'
    },
];

// GET
app.get('/', (req, res) => res.send('Hello API'));
app.get('/artists', (req, res) => res.send(artists));
app.get('/artists/:key', (req, res) => {
    console.log(req.params);
    const artist = artists.find( (artist) => artist.id === Number(req.params.key));
    res.send(artist);
});

// POST
app.post('/artists', (req, res) => {
    const artist = {
        name: req.body.name,
        id: Date.now().toString(), 
    };
    artists.push(artist);
    res.send(artist);
});

// PUT
app.put('/artists/:key', (req, res) => {
    const artist = artists.find( (artist) => artist.id === Number(req.params.key));
    artist.name = req.body.name;
    res.sendStatus(200);
});

// DELETE
app.delete('/artists/:id', (req, res) => {
    artists = artists.filter((artist) => artist.id !== Number(req.params.id));
    res.sendStatus(200);
});

app.listen(3012, function(){
    console.log('API app started');
});