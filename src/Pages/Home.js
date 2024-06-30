import React, { useState } from 'react';
import { FaHome, FaChartLine, FaLightbulb, FaVideo, FaDollarSign, FaPiggyBank, FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import styles from './Home.module.css';
import Tips from './Tips';
import Tutorials from './Tutorials';
import InvestContent from './InvestContnet';
// Extended lists of banks and card providers
const banks = [
  "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank",
  "Punjab National Bank", "Bank of Baroda", "Canara Bank", "Union Bank of India",
  "IndusInd Bank", "Yes Bank", "IDFC FIRST Bank", "Federal Bank", "South Indian Bank",
  "RBL Bank", "Bandhan Bank", "Bank of India", "Central Bank of India", "Indian Bank",
  "Indian Overseas Bank", "UCO Bank", "Bank of Maharashtra", "Andhra Bank", "Corporation Bank",
  "Syndicate Bank", "Allahabad Bank", "Oriental Bank of Commerce", "United Bank of India"
];

const cardTypes = ["Credit Card", "Debit Card", "Prepaid Card", "Virtual Card"];

const cardProviders = [
  "Visa", "RuPay", "MasterCard", "American Express", "Diners Club", "Discover", "Maestro", "JCB"
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showModal, setShowModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  // State for editing
  const [editIndex, setEditIndex] = useState(null);
  const [editBank, setEditBank] = useState('');
  const [editCardType, setEditCardType] = useState('');
  const [editCardProvider, setEditCardProvider] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  // Function to add a new card
  const handleAddCard = (e) => {
    e.preventDefault();
    const bank = e.target.bank.value;
    const cardType = e.target.cardType.value;
    const cardProvider = e.target.cardProvider.value;

    const newCard = { bank, cardType, cardProvider };
    setCards([...cards, newCard]);
    setShowModal(false);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  // Function to delete a card
  const handleDeleteCard = (index) => {
    setCardToDelete(index);
  };

  const confirmDeleteCard = () => {
    const updatedCards = cards.filter((_, i) => i !== cardToDelete);
    setCards(updatedCards);
    setCardToDelete(null);
  };

  // Function to edit a card
  const handleEditCard = (index) => {
    const card = cards[index];
    setEditIndex(index);
    setEditBank(card.bank);
    setEditCardType(card.cardType);
    setEditCardProvider(card.cardProvider);
    setShowEditModal(true);
  };

  // Function to update a card
  const handleUpdateCard = (e) => {
    e.preventDefault();
    const updatedCard = { bank: editBank, cardType: editCardType, cardProvider: editCardProvider };
    const updatedCards = [...cards];
    updatedCards[editIndex] = updatedCard;
    setCards(updatedCards);
    setShowEditModal(false);
  };

  const cancelDeleteCard = () => {
    setCardToDelete(null);
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
      case 'home':
        return (
          <>
            <div className={styles.cardsContainer}>
              {cards.map((card, index) => (
                <div key={index} className={`${styles.card} ${styles.cardAnimation}`}>
                  <div className={styles.cardHeader}>
                    <FaEdit className={styles.icon} onClick={() => handleEditCard(index)} />
                    <FaTrash className={styles.icon} onClick={() => handleDeleteCard(index)} />
                  </div>
                  <div>Bank: {card.bank}</div>
                  <div>Card Type: {card.cardType}</div>
                  <div>Provider: {card.cardProvider}</div>
                </div>
              ))}
              <div className={styles.addCard} onClick={() => setShowModal(true)}>
                <FaPlus size={30} />
              </div>
            </div>
          </>
        );
      case 'invest':
        return <InvestContent />;
      case 'tips':
        return <Tips />;
      case 'tutorials':
        return <Tutorials />;
      case 'earnings':
        return <div>Earnings Content</div>;
      case 'savings':
        return <div>Savings Content</div>;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.verticalNavbar}>
        <div onClick={() => setActiveTab('home')}><FaHome /> Home</div>
        <div onClick={() => setActiveTab('invest')}><FaChartLine /> Invest</div>
        <div onClick={() => setActiveTab('tips')}><FaLightbulb /> Tips</div>
        <div onClick={() => setActiveTab('tutorials')}><FaVideo /> Tutorials</div>
        <div onClick={() => setActiveTab('earnings')}><FaDollarSign /> Earnings</div>
        <div onClick={() => setActiveTab('savings')}><FaPiggyBank /> Savings</div>
      </div>
      <div className={styles.mainContent}>
        {renderContent()}
      </div>
      {showModal && (
        <div className={styles.modal}>
          <form onSubmit={handleAddCard}>
            <h2>Add Card</h2>
            <select name="bank" required>
              <option value="">Select Bank</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>{bank}</option>
              ))}
            </select>
            <select name="cardType" required>
              <option value="">Select Card Type</option>
              {cardTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            <select name="cardProvider" required>
              <option value="">Select Card Provider</option>
              {cardProviders.map((provider, index) => (
                <option key={index} value={provider}>{provider}</option>
              ))}
            </select>
            <button type="submit">Add Card</button>
          </form>
        </div>
      )}
      {showEditModal && (
        <div className={styles.modal}>
          <form onSubmit={handleUpdateCard}>
            <h2>Edit Card</h2>
            <select name="bank" value={editBank} onChange={(e) => setEditBank(e.target.value)} required>
              <option value="">Select Bank</option>
              {banks.map((bank, index) => (
                <option key={index} value={bank}>{bank}</option>
              ))}
            </select>
            <select name="cardType" value={editCardType} onChange={(e) => setEditCardType(e.target.value)} required>
              <option value="">Select Card Type</option>
              {cardTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
            <select name="cardProvider" value={editCardProvider} onChange={(e) => setEditCardProvider(e.target.value)} required>
              <option value="">Select Card Provider</option>
              {cardProviders.map((provider, index) => (
                <option key={index} value={provider}>{provider}</option>
              ))}
            </select>
            <button type="submit">Update Card</button>
            <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
          </form>
        </div>
      )}
      {showCelebration && (
        <div className={styles.celebration}>Card added successfully!</div>
      )}
      {cardToDelete !== null && (
        <div className={styles.modal}>
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this card?</p>
          <div>
            <button onClick={confirmDeleteCard}>Delete</button>
            <button onClick={cancelDeleteCard}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
