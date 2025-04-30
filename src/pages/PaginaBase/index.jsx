import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Container from "../../components/Container";
import Rodape from "../../components/Rodape";
import FavoritosProvider from "../../context/FavoritosContext";

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Outlet />
        </FavoritosProvider>
      </Container>
      <Rodape />
    </main>
  );
}
