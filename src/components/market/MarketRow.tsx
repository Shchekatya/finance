import { Button } from '@salutejs/plasma-ui';
import styled from 'styled-components'
import { accent, primary, secondary } from '@salutejs/plasma-tokens';
import { useNavigate } from 'react-router-dom';
import { MarketArrType } from "./Market";

type MarketRowProps = MarketArrType

export const MarketRow = ({ ...market }: MarketRowProps) => {
  const { id, name, price, change } = market
  console.log(market)
  const navigateItem = useNavigate()

  return (
    <Tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{change}</td>
      <td><MoreButton size="s" text="MORE" onClick={() => navigateItem(`/market/${id}`)} /></td>
    </Tr>
  );
}

const Tr = styled.tr`
  border: 1px solid ${primary};
  border-left-width: 0;
  border-right-width: 0;
`

const MoreButton = styled(Button)`
  margin: 10px;
`


