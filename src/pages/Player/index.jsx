import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import videos from "@/json/db.json";
import { useParams } from "react-router-dom";
import styles from "./Player.module.css";

export default function Player() {
  const { id } = useParams();
  const video = videos.find((item) => item.id === Number(id));

  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe 
          width="560" 
          height="315" 
          src={video.link} 
          title={video.titulo} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}
