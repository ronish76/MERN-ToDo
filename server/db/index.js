const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb+srv://user:<user>@cluster0.qao9hsl.mongodb.net/")
  .then(() => console.log("Connected mongo db"))
  .catch((e) => console.log(e));
