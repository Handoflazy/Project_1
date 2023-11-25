const express = require('express');
const app = express();
const port = 3000;
const getData = require('./database/serve-data.js');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'));

app.get('/', (req, res) => {
    getData()
        .then((dataList) => {
            console.log('hello');
            console.log(dataList);
            // res.render('index');
            res.render('./index', { productList: dataList });
        })
        .catch((error) => {
            console.error('Error: ' + error.stack);
            res.sendStatus(500); 
        });
})

app.get('/product', (req, res) => {
    getData()
        .then((dataList) => {
            console.log('hello');
            console.log(dataList);
            res.render('./product', { productList: dataList });
        })
        .catch((error) => {
            console.error('Error: ' + error.stack);
            res.sendStatus(500); 
        });
});

app.get('/instance-page', (req, res) => {
    res.render('./instance-page');
})

app.get('/sign-in', (req, res) => {
    res.render('./sign-in');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});