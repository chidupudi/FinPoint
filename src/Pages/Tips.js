import React, { useState } from 'react';
import { Line } from '@ant-design/charts';

const Tips = () => {
  const [activeTab, setActiveTab] = useState('equity');

  const stocksData = [
    { symbol: 'TCS', marketCap: '₹13.2T', industryPE: 33.45, graphData: generateHistoricalData('TCS'), currentLTP: 3450, logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/TCS-Logo-2008-present.jpg' },
    { symbol: 'HDFC Bank', marketCap: '₹8.7T', industryPE: 20.12, graphData: generateHistoricalData('HDFC Bank'), currentLTP: 1570, logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/HDFC_Bank_New_Logo.png/220px-HDFC_Bank_New_Logo.png' },
    { symbol: 'Reliance Industries', marketCap: '₹15.5T', industryPE: 28.67, graphData: generateHistoricalData('Reliance Industries'), currentLTP: 2445, logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png' },
    { symbol: 'Infosys', marketCap: '₹6.5T', industryPE: 28.91, graphData: generateHistoricalData('Infosys'), currentLTP: 1815, logoUrl: 'https://logos-download.com/wp-content/uploads/2016/02/Infosys_logo.png' },
    { symbol: 'Hindustan Unilever', marketCap: '₹6.1T', industryPE: 70.84, graphData: generateHistoricalData('Hindustan Unilever'), currentLTP: 2410, logoUrl: 'https://1000logos.net/wp-content/uploads/2017/05/Hindustan-Unilever-Logo.png' },
    { symbol: 'ICICI Bank', marketCap: '₹5.2T', industryPE: 19.75, graphData: generateHistoricalData('ICICI Bank'), currentLTP: 925, logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/ICICI_Bank_Logo.svg/1200px-ICICI_Bank_Logo.svg.png' },
    { symbol: 'Bharti Airtel', marketCap: '₹4.9T', industryPE: 16.82, graphData: generateHistoricalData('Bharti Airtel'), currentLTP: 615, logoUrl: 'https://seeklogo.com/images/B/bharti-airtel-logo-2B3B32CCF4-seeklogo.com.png' },
    { symbol: 'Axis Bank', marketCap: '₹3.8T', industryPE: 25.63, graphData: generateHistoricalData('Axis Bank'), currentLTP: 805, logoUrl: 'https://1000logos.net/wp-content/uploads/2017/12/Axis-Bank-Logo.png' },
    { symbol: 'ITC', marketCap: '₹2.9T', industryPE: 19.37, graphData: generateHistoricalData('ITC'), currentLTP: 211, logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/ITC_Limited_logo.svg/1200px-ITC_Limited_logo.svg.png' },
    { symbol: 'State Bank of India', marketCap: '₹2.5T', industryPE: 11.98, graphData: generateHistoricalData('State Bank of India'), currentLTP: 425, logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/State_Bank_of_India_New_Logo.svg/1200px-State_Bank_of_India_New_Logo.svg.png' },
  ];

  const mutualFundsData = [
    { name: 'Mirae Asset Large Cap Fund', nav: 75.68, returns3Years: 16.2, logoUrl: 'https://example.com/mirae_logo.png' },
    { name: 'SBI Small Cap Fund', nav: 85.12, returns3Years: 22.5, logoUrl: 'https://example.com/sbi_fund_logo.png' },
    { name: 'Axis Midcap Fund', nav: 65.45, returns3Years: 18.9, logoUrl: 'https://example.com/axis_midcap_logo.png' },
    { name: 'ICICI Prudential Bluechip Fund', nav: 55.76, returns3Years: 14.3, logoUrl: 'https://example.com/icici_bluechip_logo.png' },
    { name: 'Aditya Birla Sun Life Tax Relief 96', nav: 45.32, returns3Years: 12.8, logoUrl: 'https://example.com/abs_tax_logo.png' },
    { name: 'HDFC Hybrid Equity Fund', nav: 105.44, returns3Years: 19.6, logoUrl: 'https://example.com/hdfc_hybrid_logo.png' },
    { name: 'Franklin India Low Duration Fund', nav: 25.67, returns3Years: 7.5, logoUrl: 'https://example.com/franklin_low_logo.png' },
    { name: 'UTI Nifty Index Fund', nav: 60.82, returns3Years: 12.1, logoUrl: 'https://example.com/uti_nifty_logo.png' },
    { name: 'Nippon India Liquid Fund', nav: 1000.12, returns3Years: 6.3, logoUrl: 'https://example.com/nippon_liquid_logo.png' },
    { name: 'L&T Emerging Businesses Fund', nav: 45.91, returns3Years: 23.8, logoUrl: 'https://example.com/lt_emerging_logo.png' },
  ];

  const govtBondsData = [
    {
      title: 'Government Bond Yields',
      graphData: [
        { year: '2013', value: 5.0 },
        { year: '2014', value: 5.5 },
        { year: '2015', value: 6.0 },
        { year: '2016', value: 6.2 },
        { year: '2017', value: 6.5 },
        { year: '2018', value: 6.3 },
        { year: '2019', value: 6.1 },
        { year: '2020', value: 5.8 },
        { year: '2021', value: 5.7 },
        { year: '2022', value: 5.6 },
        { year: '2023', value: 5.4 },
      ],
      description: 'Government bonds are typically rated AAA, indicating high credit quality and low risk.',
    },
    {
      title: 'Government Bond Maturities',
      graphData: [
        { year: '2013', value: 'Short-term' },
        { year: '2014', value: 'Short-term' },
        { year: '2015', value: 'Short-term' },
        { year: '2016', value: 'Medium-term' },
        { year: '2017', value: 'Medium-term' },
        { year: '2018', value: 'Medium-term' },
        { year: '2019', value: 'Medium-term' },
        { year: '2020', value: 'Long-term' },
        { year: '2021', value: 'Long-term' },
        { year: '2022', value: 'Long-term' },
        { year: '2023', value: 'Long-term' },
      ],
      description: 'Government bonds offer various maturity periods catering to different investment horizons.',
    },
  ];

  function generateHistoricalData(stock) {
    const data = [];
    const startYear = 2013;
    const endYear = 2023;

    const baseValue = {
      'TCS': 1000,
      'HDFC Bank': 800,
      'Reliance Industries': 900,
      'Infosys': 700,
      'Hindustan Unilever': 600,
      'ICICI Bank': 500,
      'Bharti Airtel': 400,
      'Axis Bank': 300,
      'ITC': 200,
      'State Bank of India': 250,
    }[stock];

    for (let year = startYear; year <= endYear; year++) {
      const value = baseValue * (1 + 0.1 * (year - startYear)); // Assuming 10% annual growth
      data.push({
        year: `${year}`,
        value: Math.floor(value + Math.random() * 100 - 50), // Adding random fluctuation
      });
    }
    return data;
  }

  const lineConfig = {
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      style: {
        fill: '#aaa',
      },
    },
    height: 300,
    width: 400,
    yAxis: {
      label: {
        formatter: (v) => `₹${v}`,
      },
    },
    xAxis: {
      title: {
        text: 'Year',
      },
    },
    tooltip: {
      showCrosshairs: true,
      shared: true,
    },
    responsive: true,
  };

  const tabButtonStyle = {
    padding: '10px 20px',
    border: 'none',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
  };

  const activeTabButtonStyle = {
    ...tabButtonStyle,
    backgroundColor: '#007bff',
    color: 'white',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '5px',
  };

  const lineChartStyle = {
    marginTop: '10px',
    height: '200px',
    width: '100%',
  };

  const renderEquityContent = () => (
    <div style={gridContainerStyle}>
      {stocksData.map((stock, index) => (
        <div key={index} style={cardStyle}>
          <div className="logo">
            <img src={stock.logoUrl} alt={`${stock.symbol} Logo`} />
          </div>
          <h4>{stock.symbol}</h4>
          <Line {...lineConfig} data={stock.graphData} style={lineChartStyle} />
          <p>Market Cap: {stock.marketCap}</p>
          <p>P/E Ratio: {stock.industryPE}</p>
          <p>Current LTP: ₹{stock.currentLTP}</p>
        </div>
      ))}
    </div>
  );

  const renderMutualFundsContent = () => (
    <div style={gridContainerStyle}>
      {mutualFundsData.map((fund, index) => (
        <div key={index} style={cardStyle}>
          <div className="logo">
            <img src={fund.logoUrl} alt={`${fund.name} Logo`} />
          </div>
          <h4>{fund.name}</h4>
          <p>NAV: ₹{fund.nav}</p>
          <p>3-Year Returns: {fund.returns3Years}%</p>
        </div>
      ))}
    </div>
  );

  const renderGovtBondsContent = () => (
    <div>
      {govtBondsData.map((bond, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{bond.title}</h3>
          <Line {...lineConfig} data={bond.graphData} style={lineChartStyle} />
          <p>{bond.description}</p>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'equity':
        return renderEquityContent();
      case 'mutual':
        return renderMutualFundsContent();
      case 'govt':
        return renderGovtBondsContent();
      default:
        return null;
    }
  };

  return (
    <div style={{ maxWidth: '2000px', margin: '0 auto', padding: '20px' }}>
      <h2>Investment Tips</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <button style={activeTab === 'equity' ? activeTabButtonStyle : tabButtonStyle} onClick={() => setActiveTab('equity')}>Equity</button>
        <button style={activeTab === 'mutual' ? activeTabButtonStyle : tabButtonStyle} onClick={() => setActiveTab('mutual')}>Mutual Funds</button>
        <button style={activeTab === 'govt' ? activeTabButtonStyle : tabButtonStyle} onClick={() => setActiveTab('govt')}>Government Bonds</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Tips;
