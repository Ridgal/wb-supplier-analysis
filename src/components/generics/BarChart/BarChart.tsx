import { ChartData, Chart as ChartJS } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import 'chart.js/auto';


type ChartProps = {
  data: number[];
  labels: string[];
};

const BarChart: React.FC<ChartProps> = ({ data, labels }) => {
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
      labels: labels,
      datasets: [
        {
          fill: 'start',
          pointStyle: 'circle', // Определяет стиль точек (вершин)
          pointRadius: 2, // Размер точек (вершин)
          pointHoverRadius: 5,
          data: data,
          borderRadius: 3,
          borderColor: 'rgb(255, 99, 132, 0)',
          pointHoverBackgroundColor: '#20130b',
          pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
          backgroundColor: '#04A17B',
          hoverBackgroundColor: '#40FF3D'

        },
      ],
    };

    setChartData(chartData);
  }, [data, labels]);

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
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
    <div className="w-full h-full">
      <Chart ref={chartRef} type="bar" data={chartData} options={options} />
    </div>
  );
};

export { BarChart };
