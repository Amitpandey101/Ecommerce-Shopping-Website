const mongoose=require("mongoose");
const URL=process.env.DB_URL
mongoose.connect(`${URL}`,{ useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("successfully connected to db");
  },
  (err) => {
    console.log(err);
  }
);