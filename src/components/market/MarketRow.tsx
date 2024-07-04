import { Button } from '@salutejs/plasma-ui';
import styled from 'styled-components'
import { accent, primary, secondary, critical } from '@salutejs/plasma-tokens';
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
      <ChangeTd change={change}>{change}</ChangeTd>
      <td><MoreButton size="s" text="MORE" onClick={() => navigateItem(`/market/${id}`)} /></td>
    </Tr>
  );
}

const Tr = styled.tr`
  border: 1px solid ${primary};
  border-left-width: 0;
  border-right-width: 0;
`
interface ChangeTd {
  change: string
}
const ChangeTd = styled.td<ChangeTd>`
  color: ${({ change }) => change[0] === '+' ? `${accent}` : `${critical}`};
`
const MoreButton = styled(Button)`
margin: 10px;
`


