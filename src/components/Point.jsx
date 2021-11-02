import React from 'react';
import Plot from 'react-plotly.js';
//import graphData from '../../public/resources/3d-graph.json';

class Point extends React.Component {
  const 
    render(){
      var data = [{
        y:[1,1],
        
        type: 'surface',
        contours: {
          z: {
            show:true,
            usecolormap: true,
            highlightcolor:"#42f462",
            project:{z: true}
          }
        }
      }];
      return(
        
        <Plot
            data={data}
            layout={
                {
                   
                  title: 'Sistema de temperatura en 3d',
                  scene: {camera: {eye: {x: 1.87, y: 0.88, z: -0.64}}},
                  autosize: false,
                  width: 500,
                  height: 500,
                  margin: {
                    l: 65,
                    r: 50,
                    b: 65,
                    t: 90,
                  }                   
  
   
                }
            }
        />
      )
    }
  }

export default Point