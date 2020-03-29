import React, { Fragment } from 'react';
import LoanDetail from './LoanDetail';

function Form({ onSubmit, handleChange, loan, amount, time, loanIsAble }) {
  console.log('holuu');
  return (
    <form onSubmit={onSubmit}>
      <div className='row'>
        <Fragment>
          <label>Cantidad Prestamo</label>
          <input
            className='u-full-width'
            type='number'
            placeholder='Ejemplo: 3000'
            ref={amount}
            onChange={handleChange}
          />
        </Fragment>
        <Fragment>
          <label>Plazo para Pagar</label>
          <select className='u-full-width' ref={time} onChange={handleChange}>
            <option value=''>Seleccionar</option>
            <option value='3'>3 meses</option>
            <option value='6'>6 meses</option>
            <option value='12'>12 meses</option>
            <option value='24'>24 meses</option>
          </select>
        </Fragment>
        <Fragment>
          <input
            type='submit'
            value='Calcular'
            className='button-primary u-full-width'
            ref={loanIsAble}
            disabled={true}
          />
        </Fragment>
      </div>
    </form>
  );
}

export default Form;
