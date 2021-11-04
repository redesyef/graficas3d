require(["plotly"], function (Plotly) {
  window.PLOTLYENV = window.PLOTLYENV || {};
  if (document.getElementById("55708cba-0965-453f-a89d-c48f63c241d1")) {
    Plotly.newPlot(
      "55708cba-0965-453f-a89d-c48f63c241d1",
      [
        {
          hovertemplate:
            "species=setosa<br>sepal_length=%{x}<br>sepal_width=%{y}<br>petal_width=%{z}<br>petal_length=%{marker.color}<extra></extra>",
          legendgroup: "setosa",
          marker: {
            color: [
              1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4,
              1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1.0, 1.7, 1.9, 1.6,
              1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.5, 1.3,
              1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4,
            ],
            coloraxis: "coloraxis",
            symbol: "circle",
          },
          mode: "markers",
          name: "setosa",
          scene: "scene",
          showlegend: true,
          type: "scatter3d",
          x: [
            5.1, 4.9, 4.7, 4.6, 5.0, 5.4, 4.6, 5.0, 4.4, 4.9, 5.4, 4.8, 4.8,
            4.3, 5.8, 5.7, 5.4, 5.1, 5.7, 5.1, 5.4, 5.1, 4.6, 5.1, 4.8, 5.0,
            5.0, 5.2, 5.2, 4.7, 4.8, 5.4, 5.2, 5.5, 4.9, 5.0, 5.5, 4.9, 4.4,
            5.1, 5.0, 4.5, 4.4, 5.0, 5.1, 4.8, 5.1, 4.6, 5.3, 5.0,
          ],
          y: [
            3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0,
            3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0,
            3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.1, 3.0,
            3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3,
          ],
          z: [
            0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1,
            0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2,
            0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.1, 0.2, 0.2, 0.1, 0.2,
            0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2,
          ],
        },
        {
          hovertemplate:
            "species=versicolor<br>sepal_length=%{x}<br>sepal_width=%{y}<br>petal_width=%{z}<br>petal_length=%{marker.color}<extra></extra>",
          legendgroup: "versicolor",
          marker: {
            color: [
              4.7, 4.5, 4.9, 4.0, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4.0,
              4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4.0, 4.9, 4.7, 4.3, 4.4,
              4.8, 5.0, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1,
              4.0, 4.4, 4.6, 4.0, 3.3, 4.2, 4.2, 4.2, 4.3, 3.0, 4.1,
            ],
            coloraxis: "coloraxis",
            symbol: "diamond",
          },
          mode: "markers",
          name: "versicolor",
          scene: "scene",
          showlegend: true,
          type: "scatter3d",
          x: [
            7.0, 6.4, 6.9, 5.5, 6.5, 5.7, 6.3, 4.9, 6.6, 5.2, 5.0, 5.9, 6.0,
            6.1, 5.6, 6.7, 5.6, 5.8, 6.2, 5.6, 5.9, 6.1, 6.3, 6.1, 6.4, 6.6,
            6.8, 6.7, 6.0, 5.7, 5.5, 5.5, 5.8, 6.0, 5.4, 6.0, 6.7, 6.3, 5.6,
            5.5, 5.5, 6.1, 5.8, 5.0, 5.6, 5.7, 5.7, 6.2, 5.1, 5.7,
          ],
          y: [
            3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2,
            2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0,
            2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0,
            2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8,
          ],
          z: [
            1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0,
            1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4,
            1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3,
            1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3,
          ],
        },
        {
          hovertemplate:
            "species=virginica<br>sepal_length=%{x}<br>sepal_width=%{y}<br>petal_width=%{z}<br>petal_length=%{marker.color}<extra></extra>",
          legendgroup: "virginica",
          marker: {
            color: [
              6.0, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5,
              5.0, 5.1, 5.3, 5.5, 6.7, 6.9, 5.0, 5.7, 4.9, 6.7, 4.9, 5.7, 6.0,
              4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8,
              5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5.0, 5.2, 5.4, 5.1,
            ],
            coloraxis: "coloraxis",
            symbol: "square",
          },
          mode: "markers",
          name: "virginica",
          scene: "scene",
          showlegend: true,
          type: "scatter3d",
          x: [
            6.3, 5.8, 7.1, 6.3, 6.5, 7.6, 4.9, 7.3, 6.7, 7.2, 6.5, 6.4, 6.8,
            5.7, 5.8, 6.4, 6.5, 7.7, 7.7, 6.0, 6.9, 5.6, 7.7, 6.3, 6.7, 7.2,
            6.2, 6.1, 6.4, 7.2, 7.4, 7.9, 6.4, 6.3, 6.1, 7.7, 6.3, 6.4, 6.0,
            6.9, 6.7, 6.9, 5.8, 6.8, 6.7, 6.7, 6.3, 6.5, 6.2, 5.9,
          ],
          y: [
            3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0,
            2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
            2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0,
            3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0,
          ],
          z: [
            2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1,
            2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8,
            1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8,
            2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8,
          ],
        },
      ],
      {
        coloraxis: {
          colorbar: { title: { text: "petal_length" } },
          colorscale: [
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
        legend: { title: { text: "species" }, tracegroupgap: 0 },
        margin: { t: 60 },
        scene: {
          domain: { x: [0.0, 1.0], y: [0.0, 1.0] },
          xaxis: { title: { text: "sepal_length" } },
          yaxis: { title: { text: "sepal_width" } },
          zaxis: { title: { text: "petal_width" } },
        },
        template: {
          data: {
            bar: [
              {
                error_x: { color: "#2a3f5f" },
                error_y: { color: "#2a3f5f" },
                marker: {
                  line: { color: "#E5ECF6", width: 0.5 },
                  pattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                },
                type: "bar",
              },
            ],
            barpolar: [
              {
                marker: {
                  line: { color: "#E5ECF6", width: 0.5 },
                  pattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                },
                type: "barpolar",
              },
            ],
            carpet: [
              {
                aaxis: {
                  endlinecolor: "#2a3f5f",
                  gridcolor: "white",
                  linecolor: "white",
                  minorgridcolor: "white",
                  startlinecolor: "#2a3f5f",
                },
                baxis: {
                  endlinecolor: "#2a3f5f",
                  gridcolor: "white",
                  linecolor: "white",
                  minorgridcolor: "white",
                  startlinecolor: "#2a3f5f",
                },
                type: "carpet",
              },
            ],
            choropleth: [
              { colorbar: { outlinewidth: 0, ticks: "" }, type: "choropleth" },
            ],
            contour: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                colorscale: [
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
                type: "contour",
              },
            ],
            contourcarpet: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                type: "contourcarpet",
              },
            ],
            heatmap: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                colorscale: [
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
                type: "heatmap",
              },
            ],
            heatmapgl: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                colorscale: [
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
                type: "heatmapgl",
              },
            ],
            histogram: [
              {
                marker: {
                  pattern: { fillmode: "overlay", size: 10, solidity: 0.2 },
                },
                type: "histogram",
              },
            ],
            histogram2d: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                colorscale: [
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
                type: "histogram2d",
              },
            ],
            histogram2dcontour: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                colorscale: [
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
                type: "histogram2dcontour",
              },
            ],
            mesh3d: [
              { colorbar: { outlinewidth: 0, ticks: "" }, type: "mesh3d" },
            ],
            parcoords: [
              {
                line: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "parcoords",
              },
            ],
            pie: [{ automargin: true, type: "pie" }],
            scatter: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scatter",
              },
            ],
            scatter3d: [
              {
                line: { colorbar: { outlinewidth: 0, ticks: "" } },
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scatter3d",
              },
            ],
            scattercarpet: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scattercarpet",
              },
            ],
            scattergeo: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scattergeo",
              },
            ],
            scattergl: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scattergl",
              },
            ],
            scattermapbox: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scattermapbox",
              },
            ],
            scatterpolar: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scatterpolar",
              },
            ],
            scatterpolargl: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scatterpolargl",
              },
            ],
            scatterternary: [
              {
                marker: { colorbar: { outlinewidth: 0, ticks: "" } },
                type: "scatterternary",
              },
            ],
            surface: [
              {
                colorbar: { outlinewidth: 0, ticks: "" },
                colorscale: [
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
                type: "surface",
              },
            ],
            table: [
              {
                cells: { fill: { color: "#EBF0F8" }, line: { color: "white" } },
                header: {
                  fill: { color: "#C8D4E3" },
                  line: { color: "white" },
                },
                type: "table",
              },
            ],
          },
          layout: {
            annotationdefaults: {
              arrowcolor: "#2a3f5f",
              arrowhead: 0,
              arrowwidth: 1,
            },
            autotypenumbers: "strict",
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
            colorway: [
              "#636efa",
              "#EF553B",
              "#00cc96",
              "#ab63fa",
              "#FFA15A",
              "#19d3f3",
              "#FF6692",
              "#B6E880",
              "#FF97FF",
              "#FECB52",
            ],
            font: { color: "#2a3f5f" },
            geo: {
              bgcolor: "white",
              lakecolor: "white",
              landcolor: "#E5ECF6",
              showlakes: true,
              showland: true,
              subunitcolor: "white",
            },
            hoverlabel: { align: "left" },
            hovermode: "closest",
            mapbox: { style: "light" },
            paper_bgcolor: "white",
            plot_bgcolor: "#E5ECF6",
            polar: {
              angularaxis: {
                gridcolor: "white",
                linecolor: "white",
                ticks: "",
              },
              bgcolor: "#E5ECF6",
              radialaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
            },
            scene: {
              xaxis: {
                backgroundcolor: "#E5ECF6",
                gridcolor: "white",
                gridwidth: 2,
                linecolor: "white",
                showbackground: true,
                ticks: "",
                zerolinecolor: "white",
              },
              yaxis: {
                backgroundcolor: "#E5ECF6",
                gridcolor: "white",
                gridwidth: 2,
                linecolor: "white",
                showbackground: true,
                ticks: "",
                zerolinecolor: "white",
              },
              zaxis: {
                backgroundcolor: "#E5ECF6",
                gridcolor: "white",
                gridwidth: 2,
                linecolor: "white",
                showbackground: true,
                ticks: "",
                zerolinecolor: "white",
              },
            },
            shapedefaults: { line: { color: "#2a3f5f" } },
            ternary: {
              aaxis: { gridcolor: "white", linecolor: "white", ticks: "" },
              baxis: { gridcolor: "white", linecolor: "white", ticks: "" },
              bgcolor: "#E5ECF6",
              caxis: { gridcolor: "white", linecolor: "white", ticks: "" },
            },
            title: { x: 0.05 },
            xaxis: {
              automargin: true,
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
              title: { standoff: 15 },
              zerolinecolor: "white",
              zerolinewidth: 2,
            },
            yaxis: {
              automargin: true,
              gridcolor: "white",
              linecolor: "white",
              ticks: "",
              title: { standoff: 15 },
              zerolinecolor: "white",
              zerolinewidth: 2,
            },
          },
        },
      },
      { responsive: true }
    ).then(function () {
      var gd = document.getElementById("55708cba-0965-453f-a89d-c48f63c241d1");
      var x = new MutationObserver(function (mutations, observer) {
        {
          var display = window.getComputedStyle(gd).display;
          if (!display || display === "none") {
            {
              console.log([gd, "removed!"]);
              Plotly.purge(gd);
              observer.disconnect();
            }
          }
        }
      });

      // Listen for the removal of the full notebook cells
      var notebookContainer = gd.closest("#notebook-container");
      if (notebookContainer) {
        {
          x.observe(notebookContainer, { childList: true });
        }
      }

      // Listen for the clearing of the current output cell
      var outputEl = gd.closest(".output");
      if (outputEl) {
        {
          x.observe(outputEl, { childList: true });
        }
      }
    });
  }
});