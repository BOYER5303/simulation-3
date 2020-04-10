import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            address: '',
            city: '',
            zipcode: ''
        }
        
    }
        nameHandler(e) {
        this.setState({ name: e.target.value });
      }
        addressHandler(e) {
        this.setState({ address: e.target.value });
      }
        cityHandler(e) {
        this.setState({ name: e.target.value });
      }
        zipcodeHandler(e) {
        this.setState({ name: e.target.value });
      }

    addNewHouse() {
        const { name, address, city, zipcode} = this.state;
        axios 
        .post('/api/house/user', {name: name, address:address, city:city, zipcode: zipcode})
        .then(res => {
            this.props.addMyHouse(res.data);
            this.setState({ name: '', address: '', city: '', zipcode: ''})
        })
        .catch(error => {
            console.log(error);
            alert(error.response.request.response)
        })
    }
    
    render() { 
        
        return (

            <div className="wizard">
            <div>Wizard</div>
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={ e => this.nameHandler(e)}
                placeholder="Name..."
                />

                <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={ e=> this.textHandler(e)}
                placeholder="Address..."
                />
                
                 <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={(e)=> this.cityHandler(e)}
                placeholder="City..."
                />
                 <input
                type="text"
                name="zipcode"
                value={this.state.zipcode}
                onChange={ e=> this.zipcodeHandler(e)}
                placeholder="Zipcode..."
                />
            
            <Link to = "/">Cancel</Link>
            <button onClick={() => this.addNewHouse()}>Add New Property</button>
            </div>
          );
    }
}
 
export default Wizard;