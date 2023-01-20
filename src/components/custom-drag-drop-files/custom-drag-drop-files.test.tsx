import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomDragDropFiles from './CustomDragDropFiles';

describe('<CustomDragDropFiles />', () => {
  test('it should mount', () => {
    render(<CustomDragDropFiles />);
    
    const customDragDropFiles = screen.getByTestId('CustomDragDropFiles');

    expect(customDragDropFiles).toBeInTheDocument();
  });
});