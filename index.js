const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;

//Cofiguración de platilla
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs'
}));

//Static
app.use(express.static('assets'));
app.use('/bootstrap', express.static(__dirname +
    '/node_modules/bootstrap/dist'));

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/home', (req, res) => {
    res.render('home'), {
        title: 'Home',
    }
        
});
app.get('/contact', (req, res) => {
    res.render('contact'), {
        title: 'Contact',
    }
});
app.get('/productos', (req, res) => {
    res.render('productos'), {
        title: 'Productos',
        pets: ['dragon', 'dog', 'eagle', 'lion', 'cat']
    }
});


app.listen(port, () => console.log(`El servidor se ha levantado en el port http://localhost:${port}`));
