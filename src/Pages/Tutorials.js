import React from 'react';
import { FaExternalLinkAlt, FaVideo } from 'react-icons/fa';
import styles from './Tutorials.module.css';

const tutorials = [
  {
    title: "The Basics of Money Management",
    type: "article",
    url: "https://www.investopedia.com/articles/personal-finance/082815/how-manage-your-money-better.asp",
    // image: "https://via.placeholder.com/400x200?text=Money+Management+Basics"
  },
  {
    title: "Money Management Tips for Beginners",
    type: "article",
    url: "https://www.nerdwallet.com/blog/finance/how-to-manage-your-money/",
    // image: "https://via.placeholder.com/400x200?text=Money+Management+Tips"
  },
  {
    title: "How to Create a Budget and Stick to It",
    type: "video",
    url: "https://www.youtube.com/watch?v=3yTX1J9L50c",
    // image: "https://via.placeholder.com/400x200?text=Create+a+Budget"
  },
  {
    title: "Investing 101: Stock Market Basics",
    type: "video",
    url: "https://www.youtube.com/watch?v=ZSS5H1FwQtg",
    // image: "https://via.placeholder.com/400x200?text=Stock+Market+Basics"
  },
  {
    title: "Understanding Credit Scores",
    type: "article",
    url: "https://www.experian.com/blogs/news/2020/07/how-is-your-credit-score-calculated/",
    // image: "https://via.placeholder.com/400x200?text=Credit+Scores"
  },
  {
    title: "Debt Management Strategies",
    type: "article",
    url: "https://www.debt.org/advice/how-to-manage-debt/",
    // image: "https://via.placeholder.com/400x200?text=Debt+Management"
  },
  {
    title: "Saving for Retirement",
    type: "video",
    url: "https://www.youtube.com/watch?v=Zh3KUjD9iwU",
    // image: "https://via.placeholder.com/400x200?text=Saving+for+Retirement"
  },
  {
    title: "Building an Emergency Fund",
    type: "article",
    url: "https://www.daveramsey.com/blog/quick-guide-to-your-emergency-fund",
    // image: "https://via.placeholder.com/400x200?text=Emergency+Fund"
  },
  {
    title: "Real Estate Investment Tips",
    type: "video",
    url: "https://www.youtube.com/watch?v=K7JPcKXaPt4",
    // image: "https://via.placeholder.com/400x200?text=Real+Estate+Investment"
  },
  {
    title: "Cryptocurrency Basics",
    type: "article",
    url: "https://www.coindesk.com/learn/what-is-bitcoin",
    // image: "https://via.placeholder.com/400x200?text=Cryptocurrency+Basics"
  },
  {
    title: "How to Start Investing",
    type: "video",
    url: "https://www.youtube.com/watch?v=8xHkMPA1334",
    // image: "https://via.placeholder.com/400x200?text=Start+Investing"
  },
  {
    title: "Tax Planning Tips",
    type: "article",
    url: "https://www.irs.gov/newsroom/tax-tips",
    // image: "https://via.placeholder.com/400x200?text=Tax+Planning+Tips"
  },
  {
    title: "Managing Student Loans",
    type: "video",
    url: "https://www.youtube.com/watch?v=6E5DRM1og5U",
    // image: "https://via.placeholder.com/400x200?text=Managing+Student+Loans"
  },
  {
    title: "Effective Budgeting Techniques",
    type: "article",
    url: "https://www.thebalance.com/budgeting-101-1289589",
    // image: "https://via.placeholder.com/400x200?text=Budgeting+Techniques"
  },
  {
    title: "Understanding Mutual Funds",
    type: "video",
    url: "https://www.youtube.com/watch?v=4gUWq45cl5Q",
    // image: "https://via.placeholder.com/400x200?text=Mutual+Funds"
  },
  {
    title: "Retirement Accounts Explained",
    type: "article",
    url: "https://www.investopedia.com/articles/retirement/03/012703.asp",
    // image: "https://via.placeholder.com/400x200?text=Retirement+Accounts"
  },
  {
    title: "How to Improve Your Financial Literacy",
    type: "article",
    url: "https://www.thebalance.com/financial-literacy-101-1289845",
    // image: "https://via.placeholder.com/400x200?text=Financial+Literacy"
  },
  {
    title: "Investing in Bonds",
    type: "video",
    url: "https://www.youtube.com/watch?v=Gk4XwUIQjpI",
    // image: "https://via.placeholder.com/400x200?text=Investing+in+Bonds"
  },
  {
    title: "Tips for First-Time Homebuyers",
    type: "article",
    url: "https://www.zillow.com/home-buying-guide/",
    // image: "https://via.placeholder.com/400x200?text=First-Time+Homebuyers"
  },
  {
    title: "The Power of Compound Interest",
    type: "video",
    url: "https://www.youtube.com/watch?v=5jD4O1UE7pU",
    // image: "https://via.placeholder.com/400x200?text=Compound+Interest"
  },
  {
    title: "Understanding the Stock Market",
    type: "article",
    url: "https://www.investopedia.com/articles/basics/06/invest1000.asp",
    // image: "https://via.placeholder.com/400x200?text=Stock+Market"
  },
  {
    title: "How to Set Financial Goals",
    type: "video",
    url: "https://www.youtube.com/watch?v=vYhRShgsIHo",
    // image: "https://via.placeholder.com/400x200?text=Financial+Goals"
  },
  {
    title: "Managing Your Money During a Crisis",
    type: "article",
    url: "https://www.forbes.com/advisor/personal-finance/money-management-in-a-crisis/",
    // image: "https://via.placeholder.com/400x200?text=Money+Management+Crisis"
  },
  {
    title: "The Importance of Diversification",
    type: "video",
    url: "https://www.youtube.com/watch?v=6u1FekD4dWU",
    // image: "https://via.placeholder.com/400x200?text=Diversification"
  },
  {
    title: "Long-Term vs Short-Term Investments",
    type: "article",
    url: "https://www.fool.com/investing/2020/04/01/long-term-vs-short-term-investments.aspx",
    // image: "https://via.placeholder.com/400x200?text=Long-Term+vs+Short-Term"
  }
];

const Tutorials = () => {
  return (
    <div className={styles.tutorialsContainer}>
      <h2>Money Management Tutorials</h2>
      <ul className={styles.tutorialsList}>
        {tutorials.map((tutorial, index) => (
          <li key={index} className={styles.tutorialItem}>
            {/* <img src={tutorial.image} alt={tutorial.title} /> */}
            <div className={styles.tutorialInfo}>
              {tutorial.type === 'article' ? <FaExternalLinkAlt className={styles.icon} /> : <FaVideo className={styles.icon} />}
              <a href={tutorial.url} target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                {tutorial.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
