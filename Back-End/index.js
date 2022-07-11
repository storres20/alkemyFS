const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000" //frontend
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Alkemy Back-End application." });
});

app.post("/login", (req, res) => {
  const {username, password} = req.body
  const values = [username, password]
  
  var connection = mysql.createConnection()
})

require("./app/routes/product.routes.js")(app);

const server = app.listen(process.env.PORT || 3001, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});