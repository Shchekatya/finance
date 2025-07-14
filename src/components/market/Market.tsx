import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/toolkit";
import { getMarket } from "../../services/actions/get_market";
import { Title } from "../common/Title";
import { MarketRow } from "./MarketRow";
import styled from 'styled-components';
import { useEffect } from "react";
import { GET_MARKET } from "../../services/toolkit/toolkitSlice";
import { useAppDispatch } from "../../services/hooks/hooks"

const checkResponse = (res: Response) => {
  if (res.ok) {
    console.log('все ок')
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`)
}


export type MarketArrType = {
  ticker: string,
  name: string,
  price: string,
  day_change: number,
}



export const Market = () => {
  const dispatch = useAppDispatch()
  const marketLoaded: MarketArrType[] = useSelector((state: RootState) => state.toolkit.market)
  console.log(marketLoaded)

  useEffect(() => {
    dispatch(getMarket())
  }, []);

  return (
    <>
      <Title>Market</Title>
      <Table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Day change</th>
            <th scope="col">More</th>
          </tr>
        </thead>
        <tbody>
          {marketLoaded.map(market => {
            return <MarketRow {...market} key={market.ticker} />
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