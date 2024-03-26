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

type ChartProps = {
  data: number[];
  labels: string[];
  borderDash: number[];
};

const LineChart: React.FC<ChartProps> = ({ data, labels, borderDash }) => {
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
          pointBorderWidth: 2,
          data: data,
          borderColor: 'rgb(255, 99, 132, 0)',
          pointHoverBackgroundColor: '#20130b',
          pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
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
        display: false,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: string) => `${value} шт.`,
        },
        border: {
          dash: borderDash,
        },
        grid: {
          lineWidth: 1,
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
    <div className="w-full h-full">
      <Chart ref={chartRef} type="line" data={chartData} options={options} />
    </div>
  );
};

export { LineChart };
