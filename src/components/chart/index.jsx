import { StyledChart } from "./styles";
import { useState, useEffect } from "react";

export function MyLineChart() {
  const dataWeek = [
    ["dias", "temperatura"],
    ["seg", 60],
    ["ter", 65],
    ["qua", 60],
    ["qui", 62],
    ['sex', 80],
    ['sab', 66],
    ['dom', 58]
  ];

  const options = {
    title: "Helio",
    titleTextStyle: { color: "#fff" },

    curveType: "function",
    backgroundColor:'transparent',
    colors:['#fff'],

    pointSize: 10,

    legend:'none',
    vAxis: {
      textStyle: { color: "#fff" },

      gridlines: {
        count: -1,
      },
    },
    
    hAxis: {
      textStyle: { color: "#fff" },
      gridlines: {
        color: "#AEA8FF",
      },
    },    
    lineWidth:4,  
  };

  const [chart, setChart] = useState(null);

  const handleChartReady = ({ chartWrapper }) => {
    setChart(chartWrapper);
  };

  useEffect(() => {
    if (chart) {
      const svgElement = chart.getChart().getContainer().getElementsByTagName("svg")[0];
      svgElement.setAttribute(
        "style",
        "background-image: linear-gradient(180deg, #FF7600 0%, #2E2C2C 100%);"
      );
    }
  }, [chart]);

  return (
    <StyledChart
      width={"90%"}
      height={"50.6rem"}
      chartType="LineChart"
      data={dataWeek}
      options={options}
      chartEvents={[{ eventName: "ready", callback: handleChartReady }]}
    />
  );
}
