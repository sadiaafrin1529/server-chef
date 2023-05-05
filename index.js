const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
const chefRecipe = require('./Data/chefRecipe.json')
app.use(cors());
app.get('/' , (req,res)=>{
res.send('Dragon is running')
});
app.get('/chefRecipe' , (req,res)=>{
    res.send(chefRecipe)
})

// finding data Or single data 
app.get('/chefRecipe/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const findingdata = chefRecipe.find(singleData => parseInt(singleData.id) === id)
    res.send(findingdata)
})


app.listen(port, ()=>{
    console.log(`chef recipe is running on port: ${port} `)
})
