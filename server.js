const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const app = express();

// router api
const productRouter = require("./routes/productRouter");

// koneksi ke mongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// menjalankan api test
app.get("/", (req, res) => {
  res.send("API is running...");
});

// menggunakan router api
app.use("/products", productRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
