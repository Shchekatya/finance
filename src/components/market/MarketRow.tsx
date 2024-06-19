import { Button } from '@salutejs/plasma-ui';
import styled from 'styled-components'
import { accent, primary, secondary } from '@salutejs/plasma-tokens';

export type MarketRowProps = {
  id: string,
  name: string,
  price: string,
  change: string,
}

export const MarketRow = ({ id, name, price, change }: MarketRowProps) => {

  return (
    <Tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{change}</td>
      <td><Button size="s" text="MORE" /></td>
    </Tr>
  );
}

const Tr = styled.tr`
  border: 1px solid ${primary};
  border-left-width: 0;
  border-right-width: 0;
`


