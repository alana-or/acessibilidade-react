import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Product from './ProductItem';

describe('<ProductItem />', () => {
  test('it should mount', () => {
    render(<Product />);
    
    const productItem = screen.getByTestId('ProductItem');

    expect(productItem).toBeInTheDocument();
  });
});