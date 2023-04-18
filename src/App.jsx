import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Homepage } from "./pages/Homepage/Homepage";
import { Tweetspage } from "./pages/Tweetspage/Tweetspage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/tweets" element={<Tweetspage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};
