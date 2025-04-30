import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "./pages/PaginaBase";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Player from "./pages/Player";
import NaoEncontrada from "./pages/NaoEncontrada";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <PaginaBase /> }>
          <Route index element={ <Home /> } />
          <Route path="favoritos" element={ <Favoritos /> } />
          <Route path="player/:id" element={ <Player /> } />
          <Route path="*" element={ <NaoEncontrada /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
