import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import './Wallet.css';
import { fetchAPI } from '../redux/actions';
import Table from '../components/Table';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    return (
      <div className="Wallet">
        <Header />
        <h2>Bem vindo a sua carteira</h2>
        <WalletForm />
        <Table />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchCurrencies: PropTypes.func.isRequired,
};
