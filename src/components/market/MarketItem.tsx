import { useParams } from "react-router-dom";
import { Title } from "../common/Title";
import { Chart } from "./Chart";
import styled from 'styled-components'

export const MarketItem = () => {
  const { slug } = useParams()

  return (
    <>
      <Title>MarketItem {slug}</Title>
      <ChartView>
        <Chart />
      </ChartView>
    </>
  );
}

const ChartView = styled.div`
  width: 80%;
  margin: 0 auto;
`

