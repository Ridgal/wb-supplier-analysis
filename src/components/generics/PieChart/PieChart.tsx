import { ChartData, Chart as ChartJS } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import 'chart.js/auto';

type ChartProps = {
  labels: string[],
  datasets: {
    data: number[],
    backgroundColor: string[],
    cutout: string,
    borderWidth: number,
    borderRadius: number,
    weight: number,
    radius: number,
  }[],
};

const PieChart: React.FC<ChartProps> = ({labels, datasets}) => {
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
      datasets: datasets.map((datasets) => ({
        data: datasets.data,
        backgroundColor: datasets.backgroundColor,
        cutout: datasets.cutout,
        borderWidth: datasets.borderWidth,
        borderRadius: datasets.borderRadius,
        weight: datasets.weight,
        radius: datasets.radius,
      }))
    };

    setChartData(chartData);
  }, []);

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    backgroundColor: '#4B4B4B',
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
        backgroundColor: '#4B4B4B',
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
    <div className="h-[14rem]">
      <Chart ref={chartRef} type="pie" data={chartData} options={options} />
    </div>
  );
};

export { PieChart };
