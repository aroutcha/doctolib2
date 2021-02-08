import React, { Component } from 'react';
import Search from './Search';
import { contacts, getContactes} from '../Service/DataService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container d1" >
               
                    <h1>Réservez une consultation physique chez un professionnel de santé</h1>
                    <Search search={this.search}></Search>
             
            </div>

        );
    }
}

export default Home;