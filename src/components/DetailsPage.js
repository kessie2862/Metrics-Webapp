import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function DetailsPage() {
  const { id } = useParams();
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory,
  );

  useEffect(() => {
  }, [id]);

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>This is the DetailsPage</h1>
      <p>{selectedCategory.name}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default DetailsPage;
