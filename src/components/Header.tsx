import React from 'react';

interface IProps {
  title: string;
}

function Header({ title }: IProps): any {
  return <h1>{title}</h1>;
}

export default Header;
