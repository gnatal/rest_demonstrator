import express from "express";
import 'dotenv/config' // that's how you import a dotenv to ES6

const app = express();
//const port = 3000; // bad pratice, if you need to deploy to another port this will break
const port = process.env.PORT || 3000; // good practice

app.get('/', (req, res) => {
    console.log('Hello World', process.env);
    res.send('new hello World');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})