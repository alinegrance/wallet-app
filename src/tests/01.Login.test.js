import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Test Login page', () => {
  it('testa se tem o título Login', () => {
    renderWithRouterAndRedux(<App />);
    const title = screen.getByRole('heading', {
      name: /login/i,
    });

    expect(title).toBeInTheDocument();
  });

  it(' testa se tem inputs pra email e senha', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox');
    const password = screen.getByPlaceholderText(/senha/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('testa se possui botão com o texto Entrar', () => {
    renderWithRouterAndRedux(<App />);
    const enterBtn = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(enterBtn).toBeInTheDocument();
    expect(enterBtn.innerHTML).toBe('Entrar');
    expect(enterBtn).toBeDisabled();
  });

  it('testa se botão habilita com entrada válida', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox');
    const password = screen.getByPlaceholderText(/senha/i);
    const enterBtn = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(email, 'algumemail');
    userEvent.type(password, '456');

    expect(enterBtn).toBeDisabled();

    userEvent.type(email, 'email@email.com');
    userEvent.type(password, '123456');

    expect(enterBtn).not.toBeDisabled();
  });

  it('testa se ao clicar no botão vai para a pagina da carteira', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const password = screen.getByPlaceholderText(/senha/i);
    const enterBtn = screen.getByRole('button', {
      name: /entrar/i,
    });

    userEvent.type(email, 'email@email.com');
    userEvent.type(password, '123456');
    userEvent.click(enterBtn);

    expect(history.location.pathname).toBe('/carteira');
  });
});
