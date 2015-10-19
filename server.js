import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
//import Request from './models/request';
//import mongoose from 'mongoose';
import { Storage, Request }  from './storage';



const app = express();
const port = process.env.PORT || 3000;

new Storage().initFakeData();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/api/articles', (req, res) => {
    Request.find((err, items) => {
        if (err) res.send(err);

        res.json({ count: items.length, data: items });
    });
});

app.post('/api/articles', function(req, res) {
    new Request(req.body).save((err) => console.log(err || 'save ok'));  
});

app.get('/api/articles/:email', (req, res) => {
    Request.find({ email: res.params.email }, (err, item) => {
        if (err) res.send(err);

        res.json(item);
    }); 
    res.send('GET: api/articles/'+req.params.id);
});

app.put('/api/articles/:email', function (req, res){
    Request.findOne({'email': req.params.email}, (err, res) => {
        if (err) res.send(err);
        res.status = req.body.status;
        res.save();
    });   
});

app.delete('/api/articles/:id', function (req, res){
    res.send('DELETE: api/articles/'+req.params.id);
});

app.use((req, res, next) => {
    res.status(404);
    res.send({ error: 'Not found' });
    return;
});

app.listen(port, () => {
	console.log('Server started on port: ' + port);
});