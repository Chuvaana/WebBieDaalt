const express = require("express");
const app = express();
const cors = require("cors"); // Import cors middleware
// require("dotenv").config();
const connectDB = require("./config/db");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
 
// Connect to the MongoDB database
connectDB();

// Use cors middleware
app.use(cors());

app.use('/images', express.static('public/uploads'));
app.use('/api/items', require("./routes/items"));
app.use('/api/worker', require("./routes/worker"));
app.use('/api/order', require("./routes/order"));
app.use('/api/payment', cors(), require("./routes/payment"));
app.use('/api/user', require("./routes/users"));

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
