import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritosProvider from "./context/FavoritosContext";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Rodape from "./components/Rodape";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route index element={ <Home /> } />
            <Route path="favoritos" element={ <Favoritos /> } />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
