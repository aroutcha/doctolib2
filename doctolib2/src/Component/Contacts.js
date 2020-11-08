import React, { Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state != nextState || this.props != nextProps
    }
    render() { 
        return ( 
            <div className="container">
                {this.props.contacts.map(contact=> (
                <Contact key={contact.id} contact={contact}></Contact>
                ))}

            </div>
         );
    }
}
 
export default Contacts;