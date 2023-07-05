import React from 'react';
import { useSelector } from 'react-redux';
import { RiArrowLeftSLine } from 'react-icons/ri';
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
        <RiArrowLeftSLine className="left-arrow-icon" />
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
        <p>
          Price:
          {price}
        </p>
        <p>
          Price (BTC):
          {priceBtc}
        </p>
        <p>
          Volume:
          {volume}
        </p>
        <p>
          Market Cap:
          {marketCap}
        </p>
        <p>
          Available Supply:
          {availableSupply}
        </p>
        <p>
          Total Supply:
          {totalSupply}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPage;
