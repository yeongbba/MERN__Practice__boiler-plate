const express = require("express");
const app = express();
const port = 3000;

//mongoDB, mongoose 연결
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://yeongbba:tkfkdgo12!@boiler-plate.qe8np.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
