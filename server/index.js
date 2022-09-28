const express = require('express')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 5000

mongoose.connect('mongodb://192.168.31.155:27017/testdbaa',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const WordSchema = new mongoose.Schema({
  inputword: {
    type: String,
    required: true,
  },
  servertime: {
    type: String,
    default: 'THREE',
  },
});

const WordModel = mongoose.model("fromreact", WordSchema);


app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
  res.send('Hello Linux Stans!')
})

app.get("/fromnodejs", (req, res) => {
  let td = require('./fordate.js');
  //console.log(td)
  res.send("Server Time: "+ td.the_day.today_is);
});

app.post('/store-data',(req, res) => {
  let data = req.body;
  console.log(data);
  const word = new WordModel({inputword: data.nb, servertime: data.nnow});
  
  word.save((err) => {
  if (err) return handleError(err);
  });

});

app.listen(port,'0.0.0.0',() => {
  console.log(`Node`)
})
