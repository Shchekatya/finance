import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Market } from "./market/Market";
import { News } from "./news/News";


export const Routing = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  );
}