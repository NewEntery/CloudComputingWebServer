const express = require("express");
const app = express();
const port = 3000;

const products = [
    { id: 1, name: "Laptop Premium", price: 1299.99, image: "https://bucketcloudcomputing01.s3.ap-southeast-1.amazonaws.com/electronics/OIP.jpg" },
    { id: 2, name: "Smartphone", price: 799.50, image: "https://bucketcloudcomputing01.s3.ap-southeast-1.amazonaws.com/electronics/OIP+(1).jpg" },
    { id: 3, name: "Headphones", price: 149.99, image: "https://bucketcloudcomputing01.s3.ap-southeast-1.amazonaws.com/electronics/OIP+(2).jpg" }
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.use(express.static("public")); // Serve static files from the "public" directory

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});