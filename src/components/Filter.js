import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCategories } from '../redux/categoriesSlice';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    dispatch(filterCategories(filterValue));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="Filter categories"
      />
    </div>
  );
}

export default Filter;
