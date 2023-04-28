import React from 'react';
import logo from './logo.svg';
import './App.css';

const caseNames = ['case1', 'case2', 'case3']

const Case = ({name}: {name:string}) => (
  <div className="case-container">
    <a href={`/cases/${name}`}><span className="case-title">{name}</span></a>
  </div>
)

function App() {
  return (
    <div className="App">
      {caseNames.map((caseName) => (<Case name={caseName} />))}
    </div>
  );
}

export default App;
