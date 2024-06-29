import { Button } from '@salutejs/plasma-ui';
import styled from 'styled-components'
import { accent, primary, secondary } from '@salutejs/plasma-tokens';
import { useNavigate } from 'react-router-dom';
import { MarketArrType } from "./Market";


export const MarketRow = ({ id, name, price, change }: MarketArrType) => {
  const navigateItem = useNavigate()

  return (
    <Tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{change}</td>
      <td><Button size="s" text="MORE" onClick={() => navigateItem(`/market/${id}`)} /></td>
    </Tr>
  );
}

const Tr = styled.tr`
  border: 1px solid ${primary};
  border-left-width: 0;
  border-right-width: 0;
`


