import React, { useState } from 'react';

function Seccion({ titulo, contenido, mostrarFormulario = false }) {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${nombre}: ${mensaje}`);
  };

  return (
    <section>
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      {mostrarFormulario && (
        <form onSubmit={manejarEnvio}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      )}
    </section>
  );
}

export default Seccion;
