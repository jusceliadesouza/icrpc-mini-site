import { Route, Routes } from "react-router-dom";

import { Links } from "./pages/Links";
import { Federacao } from "./pages/Federacao";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Links />} />

      <Route path="/federacao" element={<Federacao />} />
    </Routes>
  )
}