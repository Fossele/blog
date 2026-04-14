const express = require('express');
const app = express();
// Middleware to parse JSON

const productRoutes = require("./routes/productRoutes");

app.use(express.json());// Sample route

app.use("/api/products/", productRoutes)

app.get('/', (req, res) => {
res.send('API Home');
});

module.exports = app;