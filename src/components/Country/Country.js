import React from 'react';
import './Country.css'

const Country = (props) => {
      const { name, flag, capital, region, population } = props.country;
      // console.log(props.country);
      return (
            <div className ="country ">
                  <h3 className="fs-4 mt-3 mb-3">Country: {name}</h3>
                  <img src={flag} alt="flag"/>
                  <h4 className="fs-5 mt-2">Capital: {capital}</h4> 
                  <h5>Region is: {region}</h5>
                  <h4 className="fs-5">Population is: {population}</h4>
            </div>
      );
};

export default Country;