import React, { Fragment } from 'react';

interface IDetail {
  loan: number;
  amount: number;
  time: number;
}

function LoanDetail({ loan, amount, time }: IDetail): any {
  if (loan > 0) {
    return (
      <div className='u-full-width resultado'>
        <h2>Resumen</h2>
        <p>La cantidad solicitada es: ${amount.toFixed(2)}</p>
        <p>A pagar en: {time} meses</p>
        <p>Su pago mensual es de: ${(loan / time).toFixed(2)}</p>
        <p>Total a pagar: ${loan.toFixed(2)}</p>
      </div>
    );
  }

  return <Fragment></Fragment>;
}

export default LoanDetail;
