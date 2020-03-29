import React, { Fragment, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import LoanDetail from './components/LoanDetail';
import { calculateLoan } from './helpers';

function App() {
  const [loan, setLoan] = useState(0);
  const amount = useRef();
  const time = useRef();
  const loanIsAble = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const newLoan = calculateLoan(
      parseFloat(amount.current.value),
      parseInt(time.current.value)
    );
    setLoan(newLoan);
    cleanForm(event);
  };

  const cleanForm = event => {
    amount.current.value = '';
    time.current.value = '';
    handleChange(event);
  };

  const handleChange = event => {
    event.preventDefault();
    loanIsAble.current.disabled =
      '' === amount.current.value || '' === time.current.value;
  };

  return (
    <Fragment>
      <Header title='Cotizador de precios' />
      <Form
        onSubmit={onSubmit}
        handleChange={handleChange}
        loan={loan}
        amount={amount}
        time={time}
        loanIsAble={loanIsAble}
      />
      <LoanDetail loan={loan} />
    </Fragment>
  );
}

export default App;
