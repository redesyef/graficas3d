import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class Linea extends Component {

	// Set up states for loading data
	constructor(props){
		super(props);
		this.state ={ data: [] }
	}

	// Call API upon component mount
	componentDidMount() {
		const endpoint = "https://www.muons.com.co/soft/demo1/datos1_reducido/articulos.php";

		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
				this.setState( {data: data} )
			})
	}

	// Change data structure
	transformData (data) {
		let plot_data = [];

		let x = [];
		let y = [];
		data.map(each => {
			x.push(each.hora)
			y.push(each.temp2)
		})
		plot_data['x'] = x;
		plot_data['y'] = y;

		console.log(plot_data)

		return plot_data
	}

	render() {
		return (
			<div>
				<Plot
					data = {[
							{mode: 'line', 
                            type:'scatter3d',
							 x: this.transformData(this.state.data)['x'],
							 y: this.transformData(this.state.data)['y'],
                             z:[2.2,1.1,2.1,1.6,2.0,2.7,2.3,2.7],
                             colorscale:'Viridis',
							 //marker: { color: '#ed022d'}}
                    }]}
					layout = { 
                        {
                        width: 900, height: 800, title: 'Temperatura 3d',
                        scene: {camera: {eye: {x: 1.87, y: 0.64, z: 1.88}}},
                    }
                     }
				 />
			</div>
		)
	}
}

export default Linea;