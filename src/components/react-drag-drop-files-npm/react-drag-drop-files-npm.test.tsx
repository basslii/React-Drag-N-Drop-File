import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDragDropFilesNpm from './ReactDragDropFilesNpm';

describe('<ReactDragDropFilesNpm />', () => {
  test('it should mount', () => {
    render(<ReactDragDropFilesNpm />);
    
    const reactDragDropFilesNpm = screen.getByTestId('ReactDragDropFilesNpm');

    expect(reactDragDropFilesNpm).toBeInTheDocument();
  });
});