import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Card from "@/components/Card";
import videos from "@/json/db.json";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((item) => <Card key={item.id} {...item} />)}
      </section>
    </>
  );
}
