const express  = require('express')
const app = express();

app.get('/',(req, res) =>{
res.send("Hola Tia Alan lo logre AWS Elastic Beanstalk");
});
const port = process.env.port || 3000;
app.listen(port, () =>{
    console.log("Wazzaap");
});