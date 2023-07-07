const express = require ("express");
const cors = require ("cors")
const app = express();
const centralData = require("./centralApi.json");
const stateData = require("./stateApi.json");

app.use(express.json());
app.use(cors());

const Port = process.env.PORT || 5000;


app.get('/', (req,res) => {
      res.send("Api is running");
})

app.get('/centralApi', (req,res) => {
      res.send(centralData);
})

app.get('/stateApi', (req,res) => {
      res.send(stateData);
})

app.listen(Port, () => {
      console.log(`Server running on port ${Port}`)
})
