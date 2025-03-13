import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './MutualFundCalculator.css';

function MutualFundCalculator() {
  const [investmentType, setInvestmentType] = useState('lumpSum');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [investmentYears, setInvestmentYears] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [totalInvested, setTotalInvested] = useState('');
  const [interestEarned, setInterestEarned] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [chartData, setChartData] = useState(null);

  const calculateAmountReceived = () => {
    if (!investmentAmount || !investmentYears || !growthRate) {
      alert("Please fill in all fields before calculating.");
      return;
    }
    
    const amount = parseFloat(investmentAmount);
    const years = parseFloat(investmentYears);
    const rate = parseFloat(growthRate) / 100;

    let totalInvestment = 0;
    if (investmentType === 'lumpSum') {
      totalInvestment = amount;
    } else if (investmentType === 'monthlyInvestment') {
      totalInvestment = amount * 12 * years;
    }

    let futureValue = totalInvestment;
    for (let i = 0; i < years; i++) {
      futureValue *= 1 + rate;
    }
    const interest = futureValue - totalInvestment;

    setTotalInvested(`Total Invested Amount: Rs ${totalInvestment.toFixed(2)}`);
    setInterestEarned(`Interest Earned: Rs ${interest.toFixed(2)}`);
    setAmountReceived(`Amount Received: Rs ${futureValue.toFixed(2)}`);

    setChartData({
      labels: ['Invested Amount', 'Interest Earned'],
      datasets: [
        {
          data: [totalInvestment, interest],
          backgroundColor: ['#36A2EB', '#FF6384'],
        },
      ],
    });
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2>Mutual Fund Calculator</h2>
        <div className="radio-group">
          <label>
            Lump Sum
            <input
              type="radio"
              name="investmentType"
              value="lumpSum"
              checked={investmentType === 'lumpSum'}
              onChange={() => setInvestmentType('lumpSum')}
            />
          </label>
          <label>
            Monthly Investment
            <input
              type="radio"
              name="investmentType"
              value="monthlyInvestment"
              checked={investmentType === 'monthlyInvestment'}
              onChange={() => setInvestmentType('monthlyInvestment')}
            />
          </label>
        </div>
        <input
          type="number"
          id="ab"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          placeholder="Investment Amount"
          required
        />
        <input
          type="number"
          id="years"
          value={investmentYears}
          onChange={(e) => setInvestmentYears(e.target.value)}
          placeholder="Investment Duration (Years)"
          required
        />
        <input
          type="number"
          id="rate"
          value={growthRate}
          onChange={(e) => setGrowthRate(e.target.value)}
          placeholder="Growth Rate (%)"
          required
        />
        <button onClick={calculateAmountReceived} className="butt">Calculate</button>
        <h3>{totalInvested}</h3>
        <h3>{interestEarned}</h3>
        <h3>{amountReceived}</h3>
      </div>
      {chartData && (
        <div className="chart">
          <Pie 
            data={chartData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MutualFundCalculator;
