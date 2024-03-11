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

const StoreChartSummary: React.FC = () => {
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
      labels: ['29 янв.'],
      datasets: [
        // {
        //   fill: 'start',
        //   pointStyle: 'circle', // Определяет стиль точек (вершин)
        //   pointRadius: 0, // Размер точек (вершин)
        //   pointHoverRadius: 5,
        //   data: [100],
        //   borderColor: 'rgb(255, 99, 132, 0)',
        //   borderWidth: 50,
        //   borderRadius: 1,
        //   weight: 1,
        //   radius: 100,
        //   rotation: -90,
        //   circumference: 360,
        //   cutout: '60%',
        //   pointHoverBackgroundColor: '#20130b',
        //   pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
        //   backgroundColor: [
        //     '#31FF5F',

        //   ],

        // },
        // {
        //   fill: 'start',
        //   pointStyle: 'circle', // Определяет стиль точек (вершин)
        //   pointRadius: 0, // Размер точек (вершин)
        //   pointHoverRadius: 5,
        //   data: [130],
        //   borderColor: 'rgb(255, 99, 132, 0)',
        //   borderWidth: 50,
        //   borderRadius: 1,
        //   weight: 1,
        //   radius: 90,
        //   rotation: -90,
        //   circumference: 360,
        //   cutout: '60%',
        //   cutoutPercentage: 50,
        //   pointHoverBackgroundColor: '#20130b',
        //   pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
        //   backgroundColor: [
        //     '#27D4AB',

        //   ],

        // },
        // {
        //   fill: 'start',
        //   pointStyle: 'circle', // Определяет стиль точек (вершин)
        //   pointRadius: 0, // Размер точек (вершин)
        //   pointHoverRadius: 5,
        //   data: [170],
        //   borderColor: 'rgb(255, 99, 132, 0)',
        //   borderWidth: 50,
        //   borderRadius: 1,
        //   weight: 1,
        //   radius: 80,
        //   rotation: -90,
        //   circumference: 360,
        //   cutout: '60%',
        //   cutoutPercentage: 75,
        //   pointHoverBackgroundColor: '#20130b',
        //   pointHoverBorderColor: 'rgb(19, 198, 113, 1)',
        //   backgroundColor: [
        //     '#04A17B',

        //   ],
        // },

         {
          data: [100, 150],
          backgroundColor: ['#31FF5F', '#4B4B4B'],
          cutout: '60%',
          borderWidth: 0,
          borderRadius: 1,
          weight: 1,
          radius: 90,
        },
        {
          data: [100, 70],
          backgroundColor: ['#27D4AB', '#4B4B4B'],
          cutout: '60%',
          borderWidth: 0,
          borderRadius: 1,
          weight: 1,
          radius: 80,
        },
        {
          data: [100, 160],
          backgroundColor: ['#04A17B', '#4B4B4B'],
          cutout: '60%',
          borderWidth: 0,
          borderRadius: 1,
          weight: 1,
          radius: 70,
        },
      ],
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

export { StoreChartSummary };
