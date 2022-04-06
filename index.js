import express from "express";

const app = express();
const port = 3000; // bad pratice, if you need to deploy to another port this will break

app.get('/', (req, res) => {
    res.send('new hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })