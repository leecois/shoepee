import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'apexcharts';

const ChartRevenue = () => {
  // Define the chart options
  const options = {
    chart: {
      id: 'area-datetime',
      type: 'area',
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: '#fff',
              background: '#00E396',
            },
          },
        },
      ],
      xaxis: [
        {
          x: new Date('14 Nov 2023').getTime(),
          borderColor: '#999',
          yAxisIndex: 0,
          label: {
            show: true,
            text: 'Rally',
            style: {
              color: '#fff',
              background: '#775DD0',
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: 'hollow',
    },
    xaxis: {
      type: 'datetime',
      min: new Date('01 Mar 2023').getTime(),
      tickAmount: 6,
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  // Set initial series state
  const [series, setSeries] = useState([
    {
      name: 'Total Revenue',
      data: [
        [new Date('2023-01-01').getTime(), 5000], // Jan 1, 2023, Revenue: 50000
        [new Date('2023-01-02').getTime(), 5000], // Jan 1, 2023, Revenue: 50000
        [new Date('2023-02-01').getTime(), 4800], // Feb 1, 2023, Revenue: 48000
      ],
    },
    {
      name: 'Total Sales',
      data: [
        [new Date('2023-01-01').getTime(), 400], // Jan 1, 2023, Sales: 400
        [new Date('2023-01-02').getTime(), 400], // Jan 1, 2023, Revenue: 50000
        [new Date('2023-02-01').getTime(), 450], // Feb 1, 2023, Sales: 450
      ],
    },
  ]);

  // Function to update the chart data
  const updateData = (timeline) => {
    let newMinDate, newMaxDate;
    switch (timeline) {
      case 'one_month':
        // Adjusted for one month in 2023
        newMinDate = new Date('2023-01-01').getTime();
        newMaxDate = new Date('2023-01-31').getTime();
        break;
      case 'six_months':
        // Adjusted for the last six months up to a date in 2023
        newMinDate = new Date('2022-08-27').getTime();
        newMaxDate = new Date('2023-02-27').getTime();
        break;
      case 'one_year':
        // Adjusted for one year up to a date in 2023
        newMinDate = new Date('2022-02-27').getTime();
        newMaxDate = new Date('2023-02-27').getTime();
        break;
      case 'ytd':
        // From the start of 2023 to a specific date
        newMinDate = new Date('2023-01-01').getTime();
        newMaxDate = new Date('2023-02-27').getTime();
        break;
      case 'all':
        // Assuming your data starts from a date in 2022
        newMinDate = new Date('2022-01-01').getTime();
        newMaxDate = new Date('2023-02-27').getTime();
        break;
      default:
        // Default case can be adjusted as needed
        newMinDate = new Date('2023-01-01').getTime();
        newMaxDate = new Date('2023-02-27').getTime();
    }

    ApexCharts.exec('area-datetime', 'zoomX', newMinDate, newMaxDate);
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5"></div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              onClick={() => updateData('one_month')}
              className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
            >
              1M
            </button>
            <button
              onClick={() => updateData('six_months')}
              className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
            >
              6M
            </button>
            <button
              onClick={() => updateData('one_year')}
              className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
            >
              1Y
            </button>
            <button
              onClick={() => updateData('ytd')}
              className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
            >
              YTD
            </button>
            <button
              onClick={() => updateData('all')}
              className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
            >
              ALL
            </button>
          </div>
        </div>
      </div>
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartRevenue;
