import React from 'react';
import {Pie} from 'react-chartjs-2';
import logo from './logo.svg';
import './App.css';
const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

function App() {
  return (
    <div className="App">
      <div>
        <h2>Pie Example</h2>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default App;
