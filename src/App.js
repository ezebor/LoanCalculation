import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import LoanDetail from './components/LoanDetail';
import { calculateLoan } from './helpers';
import Spinner from './components/Spinner';

function App() {
  const [loan, setLoan] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);

  const amount = useRef();
  const time = useRef();
  const loanIsAble = useRef();

  const onSubmit = event => {
    event.preventDefault();
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
    if (!showSpinner) {
      const newLoan = calculateLoan(
        parseFloat(amount.current.value),
        parseInt(time.current.value)
      );
      setLoan(newLoan);
    }
  };

  const handleChange = event => {
    event.preventDefault();
    loanIsAble.current.disabled =
      '' === amount.current.value || '' === time.current.value;
  };

  let LoanSubmission;
  if (showSpinner) {
    LoanSubmission = <Spinner />;
  } else {
    LoanSubmission = <LoanDetail loan={loan} amount={amount} time={time} />;
  }

  return (
    <div className='container'>
      <Header title='Cotizador de precios' />
      <Form
        onSubmit={onSubmit}
        handleChange={handleChange}
        loan={loan}
        amount={amount}
        time={time}
        loanIsAble={loanIsAble}
      />
      {LoanSubmission}
    </div>
  );
}

export default App;
