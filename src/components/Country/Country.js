import React from 'react';
import './Country.css'

const Country = (props) => {
      const { name, flag, capital, region, population } = props.country;
      console.log(props.country);
      return (
            <div className ="country">
                  <h3>Country: {name}</h3>
                  <img src={flag} alt="flag"/>
                  <h4>Capital: {capital}</h4> 
                  <h5>Region is: {region}</h5> <h4>population is: {population}</h4>
            </div>
      );
};

export default Country;