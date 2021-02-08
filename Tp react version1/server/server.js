const http =require("http");
//const fs = require("fs");
let praticiens = [];
let compteur = 0;

const express = require("express");

const app = express()

// const updatePraticiens = () => {
//     fs.writeFile("sv/data.json", JSON.stringify(praticiens), (err) => {  
//     })
// }

// const getAnnonces = () => {
//     fs.readFile("sv/data.json", "utf-8",(err,data) => {
//        praticiens = JSON.parse(data)
//     })
// }

app.use(express.json());
// getPraticiens();
//Ajouter un middelware pour les cross origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Content-Type")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    next();
})



//route en get  pour récuperer la liste des praticiens
app.get('/praticiens', (req,res) => {
    res.json({
        error : false,
        praticiens: praticiens
    })
})


//route en get pour récuperer un seule praticien
app.get('/praticien/:id', (req,res) => {
    const id = req.params.id
    const praticien = praticiens.find(p => p.id == id)
    if(praticien!= undefined) {
        res.json({
            error : false,
            praticien : praticien
        })
    }
    else {
        res.json({
            error : true,
            message : "praticien not found"
        })
    }
})

//route pour ajouter un praticien
app.post('/praticien', (req,res) => {
    let praticien = {...req.body};
    praticien.id = ++compteur;
    praticiens.push(praticien);
    // updatePraticiens();
    res.json({
        error:false,
        id : praticien.id
    })
})

//route pour effectuer une recherche
app.get('/praticiens/:filter', (req, res) => {
    const filter = req.params.filter
    const tmpPraticiens = praticiens.filter(p => p.nom.includes(filter) || p.specialite.includes(filter))
    res.json({
        error : false,
        praticiens : tmpPraticiens
    })
})
const webServer = http.createServer(app);

webServer.listen(3020)