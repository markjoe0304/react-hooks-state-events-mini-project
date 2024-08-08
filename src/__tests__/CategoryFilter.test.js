import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter';

test("clicking the category button adds a class of 'selected' to the button", () => {
  const mockOnSelect = jest.fn();
  render(<CategoryFilter categories={['All', 'Code', 'Food', 'Money']} onSelect={mockOnSelect} />);
  
  const codeButton = screen.getByText('Code');
  const allButton = screen.getByText('All');
  
  fireEvent.click(codeButton);
  
  expect(codeButton.classList).toContain("selected");
  expect(allButton.classList).not.toContain("selected");
  expect(mockOnSelect).toHaveBeenCalledWith('Code');
});

// Update other tests similarly
