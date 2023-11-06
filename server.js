const express = require('express');
const app = express();
const axios = require('axios'); // Import Axios

// set the view engine to ejs
app.set('view engine', 'ejs');

// Default route (index page)
app.get('/', async (req, res) => {
    res.render('pages/index'); // Render the index page
});

// /load-products route (products page)
app.get('/load-products', async (req, res) => {
    try {
        // Make a request to the API
        const response = await axios.get('https://dummyjson.com/products');
        const products = response.data;

        res.render('pages/products', { products }); // Render the products page
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading products.');
    }
});

app.listen(8081);
console.log('8081 is the magic port');