import React, {Component} from 'react';
import House from './House';
//import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: {},
        }
        this.addNewHouse = this.addNewHouse.bind(this)
    }
    
    getAllHouses() {
        axios.get('/api/house/all')
        .then( house => {
          this.setState({
            houses: {
              ...this.state.houses,
              all: house.data
            }
          })
        }).catch( error => alert(error.response.request.response))
      }

      addNewHouse(newHouse) {
        this.setState({
          houses: {
            ...this.state.houses,
            user: newHouse,
          },
        })
    }
     render() {      
        const {name, address, city, zipcode}=this.state.houses
        return (
           
     
                <div className = "housedisplay">
                            <House house = {name}/>
                            <House house = {address}/>
                            <House house = {city }/>
                            <House house = {zipcode}/>
                    </div>
        )}
        
    }

    //         <div className="dashboard">
    //         <House/>
    //         <Link to = '/wizard'>Add New Property</Link>
    //         </div>
    //       );
    // }


