import React, { Fragment } from 'react';

function LoanDetail({ loan, amount, time }) {
  if (loan > 0) {
    return (
      <div className='u-full-width resultado'>
        <h2>Resumen</h2>
        <p>
          La cantidad solicitada es: $
          {parseFloat(amount.current.value).toFixed(2)}
        </p>
        <p>A pagar en: {time.current.value} meses</p>
        <p>Su pago mensual es de: ${(loan / time.current.value).toFixed(2)}</p>
        <p>Total a pagar: ${loan.toFixed(2)}</p>
      </div>
    );
  }

  return <Fragment></Fragment>;
}

export default LoanDetail;
