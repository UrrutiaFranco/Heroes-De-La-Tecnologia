const express = require("express")
const app = express();
const path = require ("path")
 app.use(express.static("DH heroes"));




app.get("/", (req ,res)=> {
    return res.sendFile(path.join(__dirname, "/DH heroes/views/index.html"))
})

app.get('/Charles-Babbage', (req, res) => {
     return res.sendFile(path.join(__dirname , "DH heroes/views/babbege.html"))
});


app.get("/Berners-Lee", (req ,res)=> {
    return res.sendFile(path.join(__dirname , "DH heroes/views/berners.lee.html"))
})

app.get("/Arthur C. Clarke", (req ,res)=> {
    return res.sendFile(path.join(__dirname ,"DH heroes/views/clarke.html"))
})

app.get("/Margaret Hamilton", (req ,res)=> {
    return res.sendFile(path.join(__dirname, "DH heroes/views/hamilton.html" ))
})
app.get("/Grace Murray Hopper", (req ,res)=> {
return res.sendFile(path.join(__dirname, "DH heroes/views/hopper.html"))
})

app.get("/Ada Lovelace", (req ,res)=> {
    return res.sendFile(path.join(__dirname, "DH heroes/views/lovelace.html"))
})
app.get("/Alan Turing", (req ,res)=> {
    return res.sendFile(path.join(__dirname, "DH heroes/views/turing.html"))
})

app.listen(3030,()=> console.log ("el sevidor esta funcionando"))