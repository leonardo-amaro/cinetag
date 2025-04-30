import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconeDesfavoritar from "./favorite.png";
import iconeFavoritar from "./favorite_outline.png";
import useFavoritoContext from "@/hooks/useFavoritoContext";

const Card = ({ id, titulo, capa }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const icone = favorito.some((item) => item.id === id) ? iconeDesfavoritar : iconeFavoritar;

  return (
    <div className={styles.container} key={id}>
      <Link to={`/player/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img 
        src={icone}
        alt="Botão de favoritar filme"
        className={styles.favoritar}
        onClick={() => adicionarFavorito({ id, titulo, capa })}
      />
    </div>
  );
}

export default Card;
