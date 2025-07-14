import { Button } from '@salutejs/plasma-ui';
import styled from 'styled-components'
import { accent, primary, secondary, critical } from '@salutejs/plasma-tokens';
import { useNavigate } from 'react-router-dom';
import { MarketArrType } from "./Market";
import { NavigateButton } from '../common/NavigateButton';

type MarketRowProps = MarketArrType

export const MarketRow = ({ ...market }: MarketRowProps) => {
  const { ticker, name, price, day_change } = market
  const navigateItem = useNavigate()

  return (
    <Tr>
      <td>{name}</td>
      <td>{price}</td>
      <ChangeTd day_change={day_change}>{day_change}</ChangeTd>
      <td><NavigateButton text="MORE" id={ticker} url="market" view="secondary" size="s" /></td>
    </Tr>
  );
}

const Tr = styled.tr`
  border: 1px solticker ${primary};
  border-left-wtickerth: 0;
  border-right-wtickerth: 0;
`
interface ChangeTd {
  day_change: number
}
const ChangeTd = styled.td<ChangeTd>`
  color: ${({ day_change }) => day_change < 0 ? `${critical}` : `${accent}`}
`
const MoreButton = styled(Button)`
margin: 10px;
`


