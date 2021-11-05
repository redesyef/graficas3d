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
		const endpoint = "https://muons.com.co/soft/misericordia/API/datos/articulos.php";

		fetch(endpoint)
			.then(response => response.json())
			.then(data => {
				this.setState( {data: data} )
			})
	}

	// Change data structure
	transformData (data) {
		let plot_data = [];

		//let x = [];
		//let y = [];
        const markes =[{
            maker: {
                color:[]
        },
        },{    
            maker: {
                color:[]
         }},{    
            maker: {
                color:[]
        }},{    
            maker: {
                color:[]
        }},{    
            maker: {
                color:[]
        }},{    
            maker: {
                color:[]
        }},{    
            maker: {
                color:[]
        }},{    
            maker: {
                color:[]
        }},{    
            maker: {
                color:[]
        }}
        ];
		data.map(each => {
			//x.push(each.hora)
            //y.push(each.temp2)
			markes[0].maker.color.push(each.temp1)
            markes[1].maker.color.push(each.temp2)
            markes[2].maker.color.push(each.temp3)
            markes[3].maker.color.push(each.temp4)
            markes[4].maker.color.push(each.temp5)
            markes[5].maker.color.push(each.temp6)
            markes[6].maker.color.push(each.temp7)
            markes[7].maker.color.push(each.temp8)
            markes[8].maker.color.push(each.temp9)
		})
		//plot_data['x'] = x;
		//plot_data['y'] = y;
        plot_data['maker.color'] = markes[0].maker.color;
        plot_data['maker.color2'] = markes[1].maker.color;
        plot_data['maker.color3'] = markes[2].maker.color;
        plot_data['maker.color4'] = markes[3].maker.color;
        plot_data['maker.color5'] = markes[4].maker.color;
        plot_data['maker.color6'] = markes[5].maker.color;
        plot_data['maker.color7'] = markes[6].maker.color;
        plot_data['maker.color8'] = markes[7].maker.color;
        plot_data['maker.color9'] = markes[8].maker.color;
		console.log(plot_data)

		return plot_data
	}


	render() {
		return (
			<div>
				<Plot
					data = {[
                        
							{mode: 'markers',
                            hovertemplate:
              "Temp1<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color'],
                                coloraxis: "coloraxis",
                                symbol: "diamond",
                              },
							 x: [1],
							 y: [1],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp2<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color2'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.2],
							 y: [1.3],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp3<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color3'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.3],
							 y: [1.4],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp4<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color4'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.4],
							 y: [1.5],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp5<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color5'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.5],
							 y: [1.6],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp6<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color6'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.6],
							 y: [1.7],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp7<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color7'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.7],
							 y: [1.8],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp8<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color8'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [1.9],
							 y: [2.0],
                             z:[0],
                             colorscale:'diverging',
                            },
                            {mode: 'markers',
                            hovertemplate:
              "Temp9<br>%{marker.color}°C<br>x=%{x}<br>y=%{y}<br>z=%{z}<br>", 
                            type:'scatter3d',
                            marker: {
                                color: this.transformData(this.state.data)['maker.color9'],
                                coloraxis: "coloraxis",
                                symbol: "circle",
                              },
							 x: [2,2],
							 y: [2,1],
                             z:[0],
                             colorscale:'diverging',
                            }
                    ]}
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