import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to Our Mutual Fund Investment Platform</h1>
        
        <section className="intro">
          <h2>What are Mutual Funds?</h2>
          <p>
            Mutual funds are investment vehicles that pool together funds from multiple investors to invest in a diversified portfolio of stocks, bonds, and other securities. They are managed by professional fund managers who aim to achieve the best possible returns for the investors.
          </p>
        </section>
        
        <section className="how-it-works">
          <h2>How Does it Work?</h2>
          <p>
            When you invest in a mutual fund, you buy shares of the fund. Each share represents your ownership in the fund and entitles you to a portion of the profits or losses generated by the fund's investments. The fund manager makes decisions about where to invest the pooled money, based on the fund's investment objectives.
          </p>
        </section>
        
        <section className="disclaimer">
          <h2>Disclaimer</h2>
          <p>
            Investing in mutual funds involves risk, including the possible loss of principal. Before investing, consider your investment objectives, risks, charges, and expenses. Past performance is not indicative of future results. Always consult with a financial advisor before making any investment decisions.
          </p>
        </section>
      </div>
      
      <div className="footer-wrapper">
        <footer className="footer">
          <p>Follow us on social media:</p>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <img src="https://freepnglogo.com/images/all_img/1697562980facebook-logo-transparent.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1723992046~exp=1723992646~hmac=5aae9c4ec49aee5a4dc5feafe967bb1f336507d68c6351d4266ece5990aa199a" alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-media-icon">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
