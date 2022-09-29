import React from 'react';
import Header from '../components/Header';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="Wallet">
        <Header />
        <h2>Bem vindo a sua carteira</h2>
      </div>
    );
  }
}

export default Wallet;
