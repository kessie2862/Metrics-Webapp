import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, selectCategory } from '../redux/categoriesSlice';
import Filter from './Filter';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.filteredCategories);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <h1>This is the HomePage</h1>
      <Filter />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/details/${category.id}`}
              onClick={() => dispatch(selectCategory(category))}
            >
              {category.name}
              {' '}
              -
              {category.metricValue}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
