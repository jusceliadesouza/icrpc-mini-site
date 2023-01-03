import { Route, Routes } from "react-router-dom";

import { Links } from "./pages/Links";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Links />} />
    </Routes>
  );
}
