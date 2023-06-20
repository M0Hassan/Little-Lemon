import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage, { initializeTimes, updateTimes } from './BookingPage';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn((date) => {
    // Return mocked response based on date input
    if (date === new Date().toDateString()) {
      return ['10:00 AM', '11:00 AM', '12:00 PM'];
    }
    return [];
  }),
}));

describe('BookingPage', () => {
  test('initializeTimes should return available times for today', () => {
    const availableTimes = initializeTimes();
    expect(availableTimes).toEqual(['10:00 AM', '11:00 AM', '12:00 PM']);
  });

  test('updateTimes should return available times for the given date', () => {
    const state = null;
    const date = '2023-06-01';
    const availableTimes = updateTimes(state, date);
    expect(availableTimes).toEqual([]);
  });

  test('component renders correctly with available times', () => {
    render(<BookingPage />);

    // Assert the expected UI elements or behaviors based on the available times
    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    expect(screen.getByText('11:00 AM')).toBeInTheDocument();
    expect(screen.getByText('12:00 PM')).toBeInTheDocument();
  });
});
