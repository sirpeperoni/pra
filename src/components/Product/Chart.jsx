import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from 'prop-types'


const Chart1 = props => {
  const lineChartData = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Февраль"],
    datasets: [
      {
        data: props.prices,
        label: "Цена",
        borderColor: "#4267b2",
        fill: true,
        lineTension: 0.5, 
      },
    ]
  };

  return (
    <Line
      type="line"
      width={"30%"}
      height={"20%"}
      data={lineChartData}
      options= {{
        plugins: {
            title: {
                display: true,
                text: 'График изменений цен'
            },
        }
    }}
    />
  );
};

Chart1.propTypes = {
    prices: PropTypes.number
}
export default Chart1;