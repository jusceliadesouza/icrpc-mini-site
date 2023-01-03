import { Route, Routes } from "react-router-dom";

import { Confissao } from "./pages/Confissao";
import { Links } from "./pages/Links";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Links />} />

      {/* Documentos da ICRAB */}
      <Route path="/icrab/confissao-de-fe" element={<Confissao />} />
    </Routes>
  );
}
