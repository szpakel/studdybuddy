import React from 'react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/dom';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser /> 
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Marek Szklanek' } });
    fireEvent.change(screen.getByTestId('Attendence'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: 4.5 } });
    fireEvent.click(screen.getByText('Add'));
  });
});
