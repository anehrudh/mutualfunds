import React, { useState } from 'react';
import mf1 from './images/mf1.png';
import mf2 from './images/mf2.png';
import mf3 from './images/mf3.png';
import mf4 from './images/mf4.png';
import mf5 from './images/mf5.png';
import mf6 from './images/mf6.png';
import mf7 from './images/mf7.png';
import mf8 from './images/mf8.png';
import mf9 from './images/mf9.png';
import mf10 from './images/mf10.png';
import './InvestPage.css';

const mutualFunds = [
  { id: 1, name: 'Parag Parikh Flexi Fund', returnRate: 8, risk: 'High', logo: mf1 },
  { id: 2, name: 'PGIM India Midcap Fund', returnRate: 7.5, risk: 'Medium', logo: mf2 },
  { id: 3, name: 'HDFC Large and Mid Cap Fund', returnRate: 7, risk: 'Medium', logo: mf3 },
  { id: 4, name: 'ICICI Prudential Fund', returnRate: 6.5, risk: 'High', logo: mf4 },
  { id: 5, name: 'Canara Robeco Fund', returnRate: 6, risk: 'Medium', logo: mf5 },
  { id: 6, name: 'Motilal Oswal Fund', returnRate: 5.5, risk: 'Low', logo: mf6 },
  { id: 7, name: 'Aditya Birla Fund', returnRate: 5, risk: 'Low', logo: mf7 },
  { id: 8, name: 'Kotak Gold Fund', returnRate: 4.5, risk: 'Medium', logo: mf8 },
  { id: 9, name: 'Mirae Asset Fund', returnRate: 4, risk: 'High', logo: mf9 },
  { id: 10, name: 'Kotak NASDAQ 100 Fund', returnRate: 3.5, risk: 'High', logo: mf10 },
];

const details = [
  { id: 1, detail: "The Parag Parikh Flexi Cap Fund is known for its diversified investment strategy, targeting a mix of large-cap, mid-cap, and small-cap stocks. This fund aims to provide long-term capital appreciation." },
  { id: 2, detail: "This fund focuses on mid-cap companies with the potential for high growth. It's suitable for investors looking to capitalize on the growth potential of mid-sized companies." },
  { id: 3, detail: "The HDFC Large and Mid Cap Fund invests in a mix of large and mid-sized companies, aiming for balanced growth and stability." },
  { id: 4, detail: "This fund invests in large-cap U.S. companies, providing Indian investors exposure to the U.S. equity market." },
  { id: 5, detail: "The Canara Robeco Bluechip Equity Fund focuses on large-cap stocks, aiming to deliver steady returns with lower volatility." },
  { id: 6, detail: "This hybrid fund invests in both equity and debt instruments, providing a balanced approach for conservative investors." },
  { id: 7, detail: "Aimed at investors seeking liquidity and low risk, this fund invests in money market instruments." },
  { id: 8, detail: "This fund invests in gold ETFs, providing investors with exposure to gold as an asset class." },
  { id: 9, detail: "Known for its strong performance, this fund invests in a mix of large-cap and mid-cap stocks with high growth potential." },
  { id: 10, detail: "This fund of fund invests in units of NASDAQ-100 ETFs, giving investors exposure to technology and other high-growth sectors in the U.S. market." },
];

const InvestPage = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [selectedFund, setSelectedFund] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState('');

  const fundGroups = [
    mutualFunds.slice(0, 3),
    mutualFunds.slice(3, 6),
    mutualFunds.slice(6, 9),
    mutualFunds.slice(9),
  ];

  const nextGroup = () => {
    if (currentGroup < fundGroups.length - 2) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const previousGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  const selectFund = (fund) => {
    setSelectedFund(fund);
  };

  const handleInvestmentAmountChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  return (
    <div className="invest-page">
      <div className="fund-list">
        <div className="funds-container" style={{ transform: `translateX(-${currentGroup * 100}%)` }}>
          {fundGroups.map((group, index) => (
            <div key={index} className="funds">
              {group.map((fund) => (
                <div
                  key={fund.id}
                  className={`fund ${selectedFund && selectedFund.id === fund.id ? 'active' : ''}`}
                  onClick={() => selectFund(fund)}
                >
                  <img src={fund.logo} alt={fund.name} />
                  <div>{fund.name}</div>
                  <div>Return Rate: {fund.returnRate}%</div>
                  <div>Risk: {fund.risk}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="navigation">
          <button onClick={previousGroup} disabled={currentGroup === 0}>Previous</button>
          <button onClick={nextGroup} disabled={currentGroup === fundGroups.length - 2}>Next</button>
        </div>
      </div>

      <div className="fund-full">
        {selectedFund && (
          <div className="f-details">
            {details.find(item => item.id === selectedFund.id)?.detail}
          </div>
        )}
        
        {selectedFund && (
          <div className="fund-details">
            <div className='right-details'>
              <h2>{selectedFund.name}</h2>
              <div className="fund-details-row">
                <div>Return Rate:</div>
                <div>{selectedFund.returnRate}%</div>
              </div>
              <div className="fund-details-row">
                <div>Risk:</div>
                <div>{selectedFund.risk}</div>
              </div>
              <div className="investment-options">
                <div className="fund-details-row">
                  <div>Investment Type:</div>
                  <select>
                    <option value="lumpSum">Lump Sum</option>
                    <option value="sip">SIP</option>
                  </select>
                </div>
                <div className="fund-details-row">
                  <div>Investment Duration (Years):</div>
                  <input className='c' type="number" min="1" max="100" />
                </div>
                <div className="fund-details-row">
                  <div>Investment Amount:</div>
                  <input
                    type="number"
                    value={investmentAmount}
                    onChange={handleInvestmentAmountChange}
                    min="0"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              <button className='b'>Invest</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestPage;
