import { Button } from '@salutejs/plasma-ui';
import styled from 'styled-components'
import { accent, primary, secondary } from '@salutejs/plasma-tokens';
import { Navigate, useNavigate } from 'react-router-dom';

export type MarketRowProps = {
  id: string,
  name: string,
  price: string,
  change: string,
}

export const MarketRow = ({ id, name, price, change }: MarketRowProps) => {
  const navigateItem = useNavigate()

  return (
    <Tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{change}</td>
      <td><Button size="s" text="MORE" onClick={() => {
        navigateItem(`/market/${id}`)
      }} /></td>
    </Tr>
  );
}

const Tr = styled.tr`
  border: 1px solid ${primary};
  border-left-width: 0;
  border-right-width: 0;
`


