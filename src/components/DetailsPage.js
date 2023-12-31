import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './styles/DetailsPage.css';

const DetailsPage = () => {
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory,
  );

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  const {
    icon,
    name,
    symbol,
    rank,
    price,
    priceBtc,
    volume,
    marketCap,
    availableSupply,
    totalSupply,
  } = selectedCategory;

  return (
    <div className="container">
      <Link to="/" className="back-link">
        Back
      </Link>
      <div className="card">
        <img src={icon} alt={name} />
        <p>
          Name:
          {name}
        </p>
        <p>
          Symbol:
          {symbol}
        </p>
        <p>
          Rank:
          {rank}
        </p>
        <p className="bg">
          Price:
          {price}
        </p>
        <p className="bg">
          Price (BTC):
          {priceBtc}
        </p>
        <p className="bg">
          Volume:
          {volume}
        </p>
        <p className="bg">
          Market Cap:
          {marketCap}
        </p>
        <p className="bg">
          Available Supply:
          {availableSupply}
        </p>
        <p className="bg">
          Total Supply:
          {totalSupply}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
