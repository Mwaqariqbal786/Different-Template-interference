const express = require('express')
const path = require('path');

const app = express();
const port = 80;
app.use('static', express.static('static'))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res)=>{
     res.status(200).render('index.pug')
})
app.get(url='/About', (req, res)=>{
    console.log(req.url)
    url = req.url;
     res.status(200).render('home.pug')
})
app.get(url='/contact', (req, res)=>{
    console.log(req.url)
    url = req.url;
     res.status(200).render('contact.pug')
})
app.get(url='/services', (req, res)=>{
    console.log(req.url)
    url = req.url;
     res.status(200).render('services.pug')
})
app.listen(port, ()=>{
    console.log(`the application is running on ${port}`);
})