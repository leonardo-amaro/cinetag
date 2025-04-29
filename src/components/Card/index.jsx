import styles from "./Card.module.css";
import iconeFavorito from "./favorite_outline.png";

const Card = ({ id, titulo, capa }) => {
  return (
    <div className={styles.container} key={id}>
      <img src={capa} alt={titulo} className={styles.capa} />
      <h2>{titulo}</h2>
      <img 
        src={iconeFavorito}
        alt="Botão de favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}

export default Card;
