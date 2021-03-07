const express = require('express');
const router = express.Router();

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

/*app.get('/', (req, res) => {
	res.render('index', {data: "WEll well well"});
});*/

router.get('/', (req,res) => {
	res.render('index', {data:"Breh"})
})

router.get('/contact', (req,res) =>{
	res.render('contact');
})

app.use(router);

app.listen('8080', () => console.log("started app on 8080"));

