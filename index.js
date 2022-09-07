const express = require('express');
const app = express();

app.listen(80, () => {
  console.log(`Example app listening on port ${8088}`)
})
app.get('/',(req,res)=>{
  res.send('Line message API is running!')
})
module.exports = app;