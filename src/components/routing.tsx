import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Market } from "./market/Market";
import { News } from "./news/News";
import { MarketItem } from "./market/MarketItem";
import { NewsItem } from "./news/NewsItem";


export const Routing = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsItem />} />
        <Route path="/market/:slug" element={<MarketItem />} />
      </Routes>
    </>
  );
}