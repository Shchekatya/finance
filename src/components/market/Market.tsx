import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/toolkit";
import { getMarket } from "../../services/actions/get_market";
import { Title } from "../common/Title";
import { MarketRow } from "./MarketRow";
import styled from 'styled-components';
import { useEffect } from "react";
import { GET_MARKET } from "../../services/toolkit/toolkitSlice";


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
    change: "+0.18%",
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
  const dispatch = useDispatch()
  const marketLoaded = useSelector((state: RootState) => state.toolkit.market)
  console.log(marketLoaded)

  useEffect(() => {
    getMarket()
  }, []);

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
      <button onClick={() => dispatch(GET_MARKET('hkcu'))}></button>
    </>
  );
}



const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
`