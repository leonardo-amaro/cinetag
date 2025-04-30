import styles from "./NaoEncontrada.module.css";

export default function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h1>Página não encontrada</h1>
      <h3>404</h3>
      <p>
        Ops! Parece que esse filme ainda não está em cartaz...
      </p>
    </section>
  );
}
