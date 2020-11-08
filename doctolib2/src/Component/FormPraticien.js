import React, { Component, useState } from 'react';
import { ajouterContact, isLogged} from '../Service/DataService';




const FormPraticien = (props) => {
    const [contact, setContact] = useState({

        nom: '',
        prenom: '',
        adresse: '',
        telephone: '',
        email: ''

    })


    const changeField = (e) => {
        let tmpContact = { ...contact }
        tmpContact[e.target.getAttribute("name")] = e.target.value
        setContact(tmpContact)
    }

    const validForm = (e) => {
        e.preventDefault()
        ajouterContact(contact).then(res => {
            if (!res.data.error) {
                props.history.push('/detail/' + res.data.id)
            }
        })
    }




    return (
        <form className="container" onSubmit={validForm} >
            <div className="row m-1">
                <input type="text" name="Nom" onChange={changeField} className="form-control col" placeholder="Nom" />
            </div>
            <div className="row m-1">
                <input type="text" name="Prenom" onChange={changeField} className="form-control col" placeholder="Prénom" />
            </div>
            <div className="row m-1">
                <input type="text" name="Adresse" onChange={changeField} className="form-control col" placeholder="Adresse" />
            </div>
            <div className="row m-1">
                <input type="Text" name="Téléphone" onChange={changeField} className="form-control col" placeholder="Téléphone" />
            </div>
            <div className="row m-1">
                <input type="string" name="Email" onChange={changeField} className="form-control col" placeholder="Email" />
            </div>

            <div className="row m-1">
                <div className="form-group">
                    <select className="form control col" name="Spécialitée" onChange={changeField}>
                        <option value="1">Dentiste</option>
                        <option value="2">Sage-femme</option>
                        <option value="3" selected>Médecin généraliste</option>
                        <option value="4" >Dermatologue</option>
                        <option value="5" >Gynécologue médical et obstétrique</option>
                    </select>
                </div>
            </div>



            <div className="row m-1">
                <button type="submit" className="btn col btn-primary">Valider</button>
            </div>
        </form>
    );

}

export default FormPraticien;