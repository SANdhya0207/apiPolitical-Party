const express = require ("express");
const cors = require ("cors")
const app = express();
const data = require("./api.json")

app.use(express.json());
app.use(cors());

const Port = process.env.PORT || 5000;


app.get('/', (req,res) => {
      res.send("Api is running");
})

app.get('/api', (req,res) => {
      res.send(data);
})

app.listen(Port, () => {
      console.log(`Server running on port ${Port}`)
})
