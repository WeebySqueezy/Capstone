
const express = require('express');
const app = express();
const fs = require('fs');


app.use(express.static('public'));
app.use(express.json());

fs.readFile('worldSave.json', (err,data)=> 
{
    worldSave = JSON.parse(data);
})
app.get('/open',(req, res) => {

    
})

app.post('/save',(req, res) => {
    let world = req.getCustomizedBase64s.base64();
    fs.writeFile('worldSave.json', world, function(err) {
        if(err) throw err;
        console.log('Game Saved!');
    });
    })
app.get('/load',(req,res) => {
    let package = {worldSave, chracterSave};
    res.send(worldSave);
})
    




    
app.listen(3000, () => {
    console.log('THE CRUSADE HAS BEGUN! TO WAR, COMRADES!');
});