require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');

const { errorHandler, notFoundHandler } = require("./middlewares/handlers");

const PORT = process.env.PORT || 3000,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));
app.use(notFoundHandler);
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();