import React from "react";
import Plot from 'react-plotly.js';

import * as Plotly from 'plotly.js';

const PlotWrapper = ({ data, layout }) => {

    // after we've rendered (so that the 'graph' element exists)
    // e.g. click handler
    Plotly.plot('graph', data, layout).then((gd) => {
        return Plotly.toImage(gd);
    }).then((dataURI) => {
        console.log(dataURI);
    });

    return (
        <div>
            <Plot
                data={data}
                layout={layout}
            />
            <div id="graph" style={{ display: "none" }}></div>
        </div>
    );
}
export default PlotWrapper