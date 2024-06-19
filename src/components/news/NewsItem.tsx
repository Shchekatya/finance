import { useParams } from "react-router-dom";
import { Title } from "../common/Title";

export const NewsItem = () => {
  const { slug } = useParams()

  return (
    <>
      <Title>NewsItem {slug}</Title>
    </>
  );
}