import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const Contact = (props) => {
    const contact = props.contact
    return (
     <div className="container">
        <div classeName="row">
            <div className="col-6">
                {contact.nom}
            </div>
            <div className="col-6">
                {contact.prenom}
            </div>
        </div>
        <div className="row">
            <div className="col">
             {contact.spécialitée}
            </div>

        </div>
        <div className="row">
            <div className="col-6">
             {contact.téléphone}
            </div>
            <div className="col-6">
             {contact.Email}
            </div>

        </div>
        <div className="row">
            <div classeName="col">
            {contact.adresse}
             
            </div>
        </div>

        <div className="col-2">
                <Link className="btn btn-primary" to={'/calandar/' + contact.id}>Prise de RDV</Link>
         </div>


     </div>
    )
}