import { ChartData, Chart as ChartJS } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import 'chart.js/auto';

// const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
//   const colorStart = 'rgb(8, 243, 68)';
//   const colorMid = 'rgb(19, 198, 113, 0.5)';
//   const colorEnd = 'rgb(19, 198, 113, 0.2)';

//   const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

//   gradient.addColorStop(1, colorStart);
//   gradient.addColorStop(0.5, colorMid);
//   gradient.addColorStop(0, colorEnd);

//   return gradient;
// };

const ChartShipmentStatus: React.FC = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }



    const chartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      datasets: [
        {
          fill: 'start',
          pointStyle: 'circle', // Определяет стиль точек (вершин)
          pointRadius: 2, // Размер точек (вершин)
          pointHoverRadius: 5,
          data: [40, 75, 85, 60, 86, 150, 110, 75, 85, 60, 86, 40],
          borderColor: 'rgb(255, 99, 132, 0)',
          borderRadius: 3,
          pointHoverBackgroundColor: '#20130b',
          pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
          backgroundColor: '#04A17B',
          hoverBackgroundColor: '#40FF3D'
        },
      ],
    };

    setChartData(chartData);
  }, []);

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: string) => `${value} k.`,
        },
        grid: {
          color: '#696969',
          borderWidth: 10,
          borderDash: [10, 10],
          borderRadius: 5,
        },
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: '#07e074',
        callbacks: {
          title: () => null,
          label: (context: any) => `${context.parsed.y} k.`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="h-full">
      <Chart ref={chartRef} type="bar" data={chartData} options={options} />
    </div>
  );
};

export { ChartShipmentStatus };
