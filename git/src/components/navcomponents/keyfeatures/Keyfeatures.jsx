import React from 'react';

const keyStatistics = [
  { label: 'Years of Experience', value: '22+' ,value1: 'Years of Experience'},
  { label: 'Million Users', value: '10+' ,value1: 'Years of Experience'},
  { label: 'Team Strength', value: '400+' ,value1: 'Years of Experience'},
  { label: 'Team Strength', value: '400+' ,value1: 'Years of Experience'},
  
];

const Keyfeatures = () => {
  return (
    <div className='container-3'>
    <h1 className="container-3-header">Key Features</h1>
    <div className="container-3-1-1-1">
      
      {keyStatistics.map((statistic, index) => (
        <div key={index} className="container-3-1">
          
          <p className="container-3-1-1"><div className="span-1">{statistic.value}</div> 
          {statistic.label}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Keyfeatures;
