import { useParams } from "react-router-dom";
import { RootState } from "../../services/toolkit";
import { useSelector } from "react-redux";
import { Title } from "../common/Title";
import styled from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { MarketArrType } from "./Market";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,

);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};



export const MarketItem = () => {
  const { slug } = useParams()
  const marketLoaded: MarketArrType[] = useSelector((state: RootState) => state.toolkit.market)
  const currentItem = marketLoaded.find(item => item.ticker == slug)

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       fill: true,
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: slug ? +slug : 0, max: 1000 })),
  //       borderColor: 'rgb(53, 162, 235)',
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>{currentItem &&
      <Title>{currentItem.name}</Title>}
      {/* <ChartView>
        <Line options={options} data={data} />
      </ChartView> */}

    </>
  );
}

const ChartView = styled.div`
  wtickerth: 70%;
  margin: 0 auto;
`

