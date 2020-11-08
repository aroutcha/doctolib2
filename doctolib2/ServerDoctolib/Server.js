const http = require("http");

const contacts = [];
let compteur = 0;

const express = require("express");

const app = express()

app.use(express.json());

//Ajouter un middelware pour les cross origin
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Content-Type")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    next();
})

//route en get pour récupérer la liste des contacts
app.get('/contacts', (req, res)=> {
    res.json({
        error : false,
        contacts : contacts
    })
})



//route en get pour récuperer un seul contact
app.get('/contact/:id', (req, res)=>{
    const id = req.params.id
    const contact = contacts.find(c => c.id == id)
    if(contact != undefined) {
        res.json({
            error : false,
            contact : contact
        })
    } 
    else {
        res.json({
            error : true,
            message : "Contact Non trouvé!"
        })
    }
})


//route pour ajouter un contact
app.post('/contact', (req,res)=> {
let contact = {...req.body};
contact.id = ++compteur;
contacts.push(contact)
res.json({
     error:false,
     id : contact.id
})
})
//route pour effectuer une recherche
app.get('/contacts/:filter', (req,res)=>{
    const filter = req.params.filter
    const tmpContacts = contacts.filter(c => c.nom.includes(filter) || c.spécialitée.includes(filter))
    res.json({
        error : false,
        contacts : tmpContacts
    })
})





const webServer = http.createServer(app);

webServer.listen(4010)