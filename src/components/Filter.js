import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCategories } from '../redux/categoriesSlice';
import './styles/Filter.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(filterCategories(filterValue));
  };

  return (
    <div className="filter-container">
      <h1 className="logo">CryptoGate</h1>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="search currency..."
        className="filter-input"
      />
    </div>
  );
}

export default Filter;
