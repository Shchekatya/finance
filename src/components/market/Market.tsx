import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/toolkit";
import { getMarket } from "../../services/actions/get_market";
import { Title } from "../common/Title";
import { MarketRow } from "./MarketRow";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../services/hooks/hooks";


export type MarketArrType = {
  ticker: string,
  name: string,
  price: string,
  day_change: number,
}

export const Market = () => {
  const dispatch = useAppDispatch()
  const marketLoaded: MarketArrType[] = useSelector((state: RootState) => state.toolkit.market)
  const isLoading = useSelector((state: RootState) => state.toolkit.isLoading)
  const isError = useSelector((state: RootState) => state.toolkit.isError)
  console.log(marketLoaded)

  useEffect(() => {
    dispatch(getMarket())
  }, []);

  return (
    <>
      <Title>Market</Title>
      {isLoading ? <h1>Загрузка</h1> :
        <Table>
          {isError ? <h1>Ошибка</h1> :
            < thead >
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Day change</th>
                <th scope="col">More</th>
              </tr>
            </thead >
          }
          <tbody>
            {marketLoaded.map(market => {
              return <MarketRow {...market} key={market.ticker} />
            })}
          </tbody>
        </Table >}
      {/* <button onClick={() => dispatch(GET_MARKET('hkcu'))}></button> */}
    </>
  );
}



const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
`