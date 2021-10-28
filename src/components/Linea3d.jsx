import React from 'react';
import Plot from 'react-plotly.js'


function Linea() {
    var traceA = {
        x: [1, 5, 13, 24, 35, 46, 60],
        y: [80, 40, 70, 65, 15, 75, 49],
        z:[51,5],
        type: 'scatter3d',
        mode: 'lines'
      };
      
      var traceB = {
        x: [4, 9, 17, 21, 31, 42, 56],
        y: [64, 81, 3, 49, 25, 17, 26],
        z:[],
        type: 'scatter3d',
        mode: 'lines'
      };
      
      var data = [traceA, traceB];
      
      var layout = {
        title:'A Line Chart in Plotly',
        width: 900,
        height: 800,
        title: `Simple 3D Scatter`
      };
    
 ;

  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
}

export default Linea;