import React from 'react';
import Wizard from './Wizard';


export default function House(props) {

    const house = props.house.map((item, index) => {
      return <div key = {index}>
                <div>{item.name}</div>
                <div>{item.address}</div>
                <div>{item.city}</div>
                <div>{item.zipcode}</div>
      </div>
    });
    return (
      <div>
          {props.addNewHouse ? <Wizard addNewHouse= {props.addNewHouse}/> : null}
        {house}
      </div>
    );
  }
  