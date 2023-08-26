const express = require('express');
const path = require("path");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
  });
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.use(express.static("public"));