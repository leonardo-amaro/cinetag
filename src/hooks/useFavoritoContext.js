import { useContext } from "react";
import { FavoritosContext } from "@/context/FavoritosContext";

export default function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoExiste = favorito.some((item) => item.id === novoFavorito.id);
    let novaLista = [...favorito];

    if(!favoritoExiste) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    return setFavorito(novaLista.filter((item) => item.id !== novoFavorito.id));
  }

  return {
    favorito,
    adicionarFavorito,
  }
}
