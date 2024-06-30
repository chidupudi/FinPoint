import React from 'react';
import { Line } from '@ant-design/charts';

const InvestContent = () => {
  // Data for different investment options
  const stocksData = [
    { year: '2012', value: 12 },
    { year: '2013', value: 15 },
    { year: '2014', value: 10 },
    { year: '2015', value: 18 },
    { year: '2016', value: 9 },
    { year: '2017', value: 14 },
    { year: '2018', value: 17 },
    { year: '2019', value: 16 },
    { year: '2020', value: 11 },
    { year: '2021', value: 13 },
  ];

  const realEstateData = [
    { year: '2012', value: 8 },
    { year: '2013', value: 9 },
    { year: '2014', value: 7 },
    { year: '2015', value: 10 },
    { year: '2016', value: 6 },
    { year: '2017', value: 11 },
    { year: '2018', value: 12 },
    { year: '2019', value: 10 },
    { year: '2020', value: 9 },
    { year: '2021', value: 10 },
  ];

  const sgbData = [
    { year: '2012', value: 10 },
    { year: '2013', value: 12 },
    { year: '2014', value: 8 },
    { year: '2015', value: 15 },
    { year: '2016', value: 7 },
    { year: '2017', value: 10 },
    { year: '2018', value: 14 },
    { year: '2019', value: 12 },
    { year: '2020', value: 9 },
    { year: '2021', value: 11 },
  ];

  // Function to calculate CAGR
  const calculateCAGR = (data) => {
    const startValue = data[0].value;
    const endValue = data[data.length - 1].value;
    const years = data.length - 1;
    const CAGR = ((endValue / startValue) ** (1 / years) - 1) * 100;
    return CAGR.toFixed(2);
  };

  // Configurations for each investment type
  const stocksConfig = {
    data: stocksData,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  const realEstateConfig = {
    data: realEstateData,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  const sgbConfig = {
    data: sgbData,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };

  return (
    <div>
      <h2>Investment Options</h2>
      <p>Explore various investment options and their returns over the past ten years.</p>

      <div style={{ marginBottom: '30px' }}>
        <Line {...stocksConfig} />
        <div>
          <h3>Stocks</h3>
          <p>Description of stocks investment.</p>
          <p>CAGR: {calculateCAGR(stocksData)}%</p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <Line {...realEstateConfig} />
        <div>
          <h3>Real Estate</h3>
          <p>Description of real estate investment.</p>
          <p>CAGR: {calculateCAGR(realEstateData)}%</p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <Line {...sgbConfig} />
        <div>
          <h3>Sovereign Gold Bonds (SGBs)</h3>
          <p>Sovereign Gold Bonds are issued by the Reserve Bank of India on behalf of the Government of India. They are a safe and alternative way for investors to hold gold without physical possession.</p>
          <p>CAGR: {calculateCAGR(sgbData)}%</p>
          <h4>Advantages of SGBs:</h4>
          <ul>
            <li>Interest Rate: SGBs offer fixed interest (currently 2.5% per annum) on the initial investment.</li>
            <li>Capital Gains: Exemption from capital gains tax on redemption if held until maturity.</li>
            <li>Tradable: Listed on stock exchanges, providing liquidity to investors.</li>
            <li>Security: Backed by the Government of India, making them a secure investment.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestContent;
