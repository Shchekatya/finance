import { useParams } from "react-router-dom";
import { Title } from "../common/Title";

export const MarketItem = () => {
  const { slug } = useParams()

  return (
    <Title>MarketItem {slug}</Title>
  );
}