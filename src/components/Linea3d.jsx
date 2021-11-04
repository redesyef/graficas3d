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
        let maker ={
    color:[],
    };
		data.map(each => {
			x.push(each.hora)
            y.push(each.temp2)
			maker.color.push(each.temp2)
		})
		plot_data['x'] = x;
		plot_data['y'] = y;
        plot_data['maker.color'] = maker.color;
		console.log(plot_data)

		return plot_data
	}

	render() {
		return (
			<div>
				<Plot
					data = {[
                        
							{mode: 'line',
                            hovertemplate:
              "Temp1=Grados<br>Grados=%{marker.color}<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color'],
                                coloraxis: "coloraxis",
                                symbol: "diamond",
                              },
							 x: this.transformData(this.state.data)['x'],
							 y: this.transformData(this.state.data)['y'],
                             z:[2.2,1.1,2.1,1.6,2.0,2.7,2.3,2.7],
                             colorscale:'diverging',
                             //color: [5,5,6,24,4,6,8]
							 //marker: { color: ['#ed022d']}}
                    }]}
					layout = { 
                        {
                        width: 900, height: 800, title: 'Temperatura 3d',
                        scene: {camera: {eye: {x: 1.87, y: 0.64, z: 1.88}}},
                        coloraxis: { colorbar: { outlinewidth: 0, ticks: "" } },
                        colorscale: {
                            diverging: [
                              [0, "#8e0152"],
                              [0.1, "#c51b7d"],
                              [0.2, "#de77ae"],
                              [0.3, "#f1b6da"],
                              [0.4, "#fde0ef"],
                              [0.5, "#f7f7f7"],
                              [0.6, "#e6f5d0"],
                              [0.7, "#b8e186"],
                              [0.8, "#7fbc41"],
                              [0.9, "#4d9221"],
                              [1, "#276419"],
                            ],
                            sequential: [
                              [0.0, "#0d0887"],
                              [0.1111111111111111, "#46039f"],
                              [0.2222222222222222, "#7201a8"],
                              [0.3333333333333333, "#9c179e"],
                              [0.4444444444444444, "#bd3786"],
                              [0.5555555555555556, "#d8576b"],
                              [0.6666666666666666, "#ed7953"],
                              [0.7777777777777778, "#fb9f3a"],
                              [0.8888888888888888, "#fdca26"],
                              [1.0, "#f0f921"],
                            ],
                            sequentialminus: [
                              [0.0, "#0d0887"],
                              [0.1111111111111111, "#46039f"],
                              [0.2222222222222222, "#7201a8"],
                              [0.3333333333333333, "#9c179e"],
                              [0.4444444444444444, "#bd3786"],
                              [0.5555555555555556, "#d8576b"],
                              [0.6666666666666666, "#ed7953"],
                              [0.7777777777777778, "#fb9f3a"],
                              [0.8888888888888888, "#fdca26"],
                              [1.0, "#f0f921"],
                            ],
                          },
 
                    }
                     }
				 />
			</div>
		)
	}
}

export default Linea;