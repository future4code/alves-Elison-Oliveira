import user from "../img/user.jpg";
import post from "../img/tigre.jpg";
import { useState } from "react";

function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  const [curtido, setCurtido] = useState(0);
  const [numeroCurtidas, setNumeroCurtidas] = useState(0);
  const [Comentando, setComentando] = useState("");
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [imputValue, setImputValue] = useState("");

  // Passo7
  const onClickCurtida = () => {
    // Crie a lógica de onClickCurtida aqui.
    if (curtido) {
      setCurtido(!curtido);
    } else {
      setCurtido(!curtido);
    }
  };

  // Passo7
  const onClickComentario = () => {
    // Crie a lógica de onClickComentario aqui.
    setComentando(!Comentando);
  };

  // Passo7
  const onChangeComentario = (event) => {
    // Crie a lógica de onChangeComentario aqui.
    setImputValue(event.target.value);
  };

  // Passo7
  const enviarComentario = (comentario) => {
    // Crie a lógica de enviarComentario aqui.
    const listaDeComentarios = [...comentarios, comentario];
    setComentarios(listaDeComentarios);
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
    setImputValue("");
  };

  {
    /* Passo6 */
  }
  const caixaDeComentario = Comentando ? (
    <>
      <label htmlFor={"comentario"}>Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={imputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={() => enviarComentario(imputValue)}>Enviar</button>
    </>
  ) : (
    // Passo8
    // <>Lógica de exibir lista de comentarios</>
    comentarios.map((comentario, index) => {
      console.log(comentario);
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      );
    })
  );
  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={user} alt={"Imagem do usuario"} />
          <span>Labe Ninja</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={post} alt={"Imagem do post"} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida()}>
            {/* Passo6 */}
            {numeroCurtidas === 0 ? "Like" : "Dislike"}
          </button>
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {Comentando ? "Fechar comentário" : "Adicionar comentário"}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
}

export default Post;
