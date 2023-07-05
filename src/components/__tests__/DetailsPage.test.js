import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import DetailsPage from '../DetailsPage';
import '@testing-library/jest-dom/extend-expect';

jest.mock('./__mocks__/fetch.js');

const mockStore = configureStore([]);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({}),
  useRouteMatch: () => ({ url: '' }),
  useHistory: () => ({}),
}));

describe('DetailsPage', () => {
  it('should render correctly', () => {
    const store = mockStore({
      categories: {
        selectedCategory: {},
      },
    });

    expect(store.getState()).toEqual({
      categories: {
        selectedCategory: {},
      },
    });
  });

  it('should render the loading state', () => {
    const store = mockStore({
      categories: {
        selectedCategory: null,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
