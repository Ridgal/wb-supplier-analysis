import { ChartArea, ChartData, Chart as ChartJS } from 'chart.js';
import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';

import 'chart.js/auto';

const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
  const colorStart = 'rgb(8, 243, 68)';
  const colorMid = 'rgb(19, 198, 113, 0.5)';
  const colorEnd = 'rgb(19, 198, 113, 0.2)';

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(1, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(0, colorEnd);

  return gradient;
};

const ChartStatistics: React.FC = () => {
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
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      datasets: [
        {
          fill: 'start',
          pointStyle: 'circle', // Определяет стиль точек (вершин)
          pointRadius: 2, // Размер точек (вершин)
          pointHoverRadius: 5,
          pointBorderWidth: 2,
          data: [11, 13, 11, 30, 15, 18, 16, 14, 36, 29, 33, 34, 18, 25, 22, 27, 31, 34, 18, 25, 22, 27, 31],
          borderColor: 'rgb(255, 99, 132, 0)',
          pointHoverBackgroundColor: '#20130b',
          pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
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
          callback: (value: string) => `${value} шт.`,
        },
        border: {
          dash: [10 , 5],
        },
        grid: {
          lineWidth: 2,
          color: '#696969',
        },
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: '#07e074',
        callbacks: {
          title: () => null,
          label: (context: any) => `${context.parsed.y} шт.`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-full h-full xxl:h-[96%]">
      <Chart ref={chartRef} type="line" data={chartData} options={options} />
    </div>
  );
};

export { ChartStatistics };
