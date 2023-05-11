require("dotenv/config");

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const app = require("./app");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sangeetha:sangee1997@sangeetha.dmujqlq.mongodb.net/Auth?retryWrites=true&w=majority",

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      }
    );
    console.log("DB Connected");
  } catch (e) {
    console.log(e.message, "error in connecting db");
  }
};
const port = process.env.PORT || 3001;
dbConnect();
app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});

app.get("/", (req, res) => {
  res.send("Working fine...");
});
