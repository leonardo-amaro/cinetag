import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="favoritos" element={ <Favoritos /> } />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
