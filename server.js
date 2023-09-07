const express = require("express");
const connectDB = require("./config/dbConnection");

const dotenv = require("dotenv").config();

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // help to parse the data from client
app.use("/api/contacts", require("./routes/contactRoute"));
app.use("/api/user", require("./routes/userRoute"));


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});