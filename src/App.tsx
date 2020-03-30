import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import LoanDetail from './components/LoanDetail';
import { calculateLoan } from './helpers';
import Spinner from './components/Spinner';

function App(): any {
  const [loan, setLoan]: [number, any] = useState(0);
  const [showSpinner, setShowSpinner]: [boolean, any] = useState(false);

  const amount: any = useRef();
  const time: any = useRef();
  const loanIsAble: any = useRef();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
    if (!showSpinner) {
      const newLoan: number = calculateLoan(
        parseFloat(amount.current.value),
        parseInt(time.current.value)
      );
      setLoan(newLoan);
    }
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    loanIsAble.current.disabled =
      '' === amount.current.value || '' === time.current.value;
  };

  let LoanSubmission: any;
  if (showSpinner) {
    LoanSubmission = <Spinner />;
  } else {
    LoanSubmission = (
      <LoanDetail
        loan={loan}
        amount={amount.current ? parseFloat(amount.current.value) : 0}
        time={time.current ? parseFloat(time.current.value) : 0}
      />
    );
  }

  return (
    <div className='container'>
      <Header title='Cotizador de precios' />
      <Form
        onSubmit={onSubmit}
        handleChange={handleChange}
        amount={amount}
        time={time}
        loanIsAble={loanIsAble}
      />
      {LoanSubmission}
    </div>
  );
}

export default App;
