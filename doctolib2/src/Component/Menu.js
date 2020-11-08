import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item m-2">
                            <Link to='/'>Doctolib</Link>
                        </li>
                        <li className="nav-item m-2">
                            <Link to='/addPraticiens'>Vous êtes un praticien ?</Link>
                        </li>
                        <li className="nav-item m-2"  >
                            <Link to='/Login'>Se connecter</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
             
        );
    }
}
export default Menu;