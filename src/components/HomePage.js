import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import { fetchCategories, selectCategory } from '../redux/categoriesSlice';
import Filter from './Filter';
import Footer from './Footer';
import './styles/HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.categories.filteredCategories,
  );
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
    <div className="homepage-container">
      <Filter />
      <ul className="card-container">
        {categories.map((category) => (
          <div className="card" key={category.id}>
            <Link
              to={`/details/${category.id}`}
              onClick={() => dispatch(selectCategory(category))}
            >
              <div className="card-header">
                <img src={category.icon} alt={category.name} />
                <RiArrowRightSLine className="arrow-icon" />
              </div>
              <h4 className="category-text">{category.name}</h4>
              <h4 className="category-text">{category.symbol}</h4>
            </Link>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default HomePage;
