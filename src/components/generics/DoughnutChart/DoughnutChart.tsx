import { ChartData, Chart as ChartJS } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import 'chart.js/auto';


type ChartProps = {
  data: number[];
  labels: string[];
  radius: number;
  rotation: number;
  circumference: number;
  cutout: number | string;
  cutoutPercentage: number;
};

const DoughnutChart: React.FC<ChartProps> = ({ data, labels, radius, rotation, circumference, cutout, cutoutPercentage }) => {
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
          pointRadius: 0, // Размер точек (вершин)
          pointHoverRadius: 5,
          data: data,
          borderColor: 'rgb(255, 99, 132, 0)',
          borderWidth: 50,
          borderRadius: 1,
          weight: 1,
          radius: radius,
          rotation: rotation,
          circumference: circumference,
          cutout: cutout,
          cutoutPercentage: cutoutPercentage,
          pointHoverBackgroundColor: '#20130b',
          pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
          backgroundColor: ['#31FF5F', '#4B4B4B'],
        },
      ],
    };

    setChartData(chartData);
  }, [data, labels, radius, rotation, circumference, cutout, cutoutPercentage]);

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          callback: (value: string) => `${value} k.`,
        },
        grid: {
          color: '#696969',
          borderWidth: 2,
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
    <>
      <Chart ref={chartRef} type="doughnut" data={chartData} options={options} />
    </>
  );
};

export { DoughnutChart };
