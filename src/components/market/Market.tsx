import { Title } from "../common/Title";
import { MarketRow } from "./MarketRow";
import styled from 'styled-components'

export type MarketArrType = {
  id: string,
  name: string,
  price: string,
  change: string,
}

const marketArr: MarketArrType[] = [
  {
    id: "1",
    name: "Bitcoin",
    price: "25,298.8 CHF",
    change: "-0.08%",
  },
  {
    id: "2",
    name: "Dash",
    price: "53.527 CHF",
    change: "-6.07%",
  },
  {
    id: "3",
    name: "Ethereum",
    price: "1,599.91 CHF",
    change: "-1%",
  },
  {
    id: "4",
    name: "PAX Gold",
    price: "53.527 CHF",
    change: "-6.07%",
  },

]

export const Market = () => {

  return (
    <>
      <Title>Market</Title>
      <Table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Change</th>
            <th scope="col">More</th>
          </tr>
        </thead>
        <tbody>
          {marketArr.map(market => {
            return <MarketRow {...market} key={market.id} />
          })}
        </tbody>
      </Table>
    </>
  );
}



const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
`