import styles from "./Favoritos.module.css";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";
import useFavoritoContext from "@/hooks/useFavoritoContext";

export default function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((item) => <Card key={item.id} {...item} />)}
      </section>
    </>
  );
}
