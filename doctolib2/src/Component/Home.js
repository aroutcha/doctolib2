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
            <div>
                <div className="container">
                    <h1>Réservez une consultation physique chez un professionnel de santé</h1>

                </div>
                <Search search={this.search}></Search>

            </div>

        );
    }
}

export default Home;