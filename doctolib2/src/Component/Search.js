import React, { Component } from 'react';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div classeName="container">
                <div className="row">
                    <input className="col form-control m-5" onChange={this.changeSearch} type="search" placeholder="votre recherche"></input>
                    <button onClick={this.valideClick} className="col-2 btn btn-primary m-5">Valider</button>
                </div>

            </div>
         );
    }
}
 
export default Search ;