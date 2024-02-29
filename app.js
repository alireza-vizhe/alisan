const express = require("express");

const cors = require("cors");
const { setHeaders } = require("./middlewares/headers");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();


app.use(cors());
app.use(express.json());
app.use(setHeaders);

dotenv.config({path: "./config/config.env"});

connectDB();

app.use(require("./routes/user"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server has started on Port:${PORT}`));