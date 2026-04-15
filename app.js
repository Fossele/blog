const express = require('express');
const app = express();
// Middleware to parse JSON

const productRoutes = require("./routes/productRoutes");
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());// Sample route

app.use("/api/products/", productRoutes);

app.use(ErrorHandler);


app.get('/', (req, res) => {
res.send('API Home');
});

module.exports = app;