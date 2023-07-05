import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Filter from '../Filter';
import { filterCategories } from '../../redux/categoriesSlice';

const mockStore = configureStore([]);

describe('Filter', () => {
  it('should dispatch filterCategories action with the correct filter value', () => {
    const store = mockStore({});

    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <Filter />
      </Provider>,
    );

    const filterInput = getByPlaceholderText('search currency...');

    const filterValue = 'bitcoin';
    fireEvent.change(filterInput, { target: { value: filterValue } });

    expect(store.getActions()).toEqual([filterCategories(filterValue)]);
  });
});
