import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Seccion from './Seccion';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Seccion 
                  titulo="¿Qué es una tarjeta gráfica? Características y tipos" 
                  contenido={<><p><br />Una tarjeta gráfica es un componente de un ordenador que puede estar integrado dentro de la placa base, el procesador o ser externo y cuya función es la renderizar las imágenes en la pantalla y ofrecer una visualización de alta calidad, procesando y ejecutando datos gráficos mediante técnicas, características y funciones gráficas avanzadas. ¿Y quienes necesitan estas tarjetas gráficas?. En primer lugar, los usuarios que utilizan el ordenador para jugar videojuegos. Luego, los que usan aplicaciones de edición de vídeo como Adobe Premiere o DaVinci Resolve, como así para editar fotografías, como puede ser Adobe Photoshop. Por último, los usuarios que trabajan con complejos programas informáticos de inteligencia artificial. Para realizar cualquiera de estas tres actividades, una buena tarjeta gráfica es imprescindible.</p>
                  <img src="https://img.pccomponentes.com/pcblog/1663884000000/tarjeta-grafica-que-es.jpg" alt="Imagen Sección 1" />
                  </>} 
                />
                <Seccion 
                  titulo="Diferencia entre una tarjeta gráfica y una GPU" 
                  contenido={<><p><br />Después de esta definición tan académica, hay que aclarar un malentendido general. Y es que hay que diferenciar la GPU (unidad de procesamiento gráfico) de lo que es una tarjeta gráfica, porque lo primero es un chip, mientras que lo segundo es un producto terminado. Las siglas GPU se refieren a Graphics Processing Unit o unidad de procesamiento gráficos y se trata de un chip encargado para acelerar la representación de gráficos 3D. Sin embargo, este concepto ha evolucionado mucho debido al avance tecnológico en desarrollo y en arquitecturas. La GPU realiza multitud de operaciones relacionadas con los datos 2D y 3D, como es decodificar y renderizar objetos animados y vídeos. El grado de sofisticación con el que cuenta una GPU hoy en día es brutal, agregando más y más tareas. Antes, la GPU no era más que un chip que se encargaba de acelerar gráficos 3D; en pleno siglo XXI, la GPU renderiza, codifica, calcula el rebote de los rayos del Ray Tracing, optimiza el rendimiento con tecnologías de reescalado y algunas hacen uso de Machine Learning e Inteligencia Artificial. Ahora que tenemos claramente identificado qué es una GPU, vamos a explicaros qué es una tarjeta tarjeta gráfica como producto completo compuesto por:
                  <ul>
                    <li>PCB, que es donde van soldados todos los componentes.</li>
                    <li>Módulos de memoria (GRAM).</li>
                    <li>Condensadores y demás componentes.</li>
                    <li>Tuberías de calor.</li>
                    <li>Ventiladores (o blower) y carcasa.</li>
                  </ul></p>
                  <img src="https://img.pccomponentes.com/pcblog/1663884000000/elegir-tarjeta-grafica-6.jpg" alt="Imagen Sección 2" />
                  </>} 
                />
                <Seccion 
                  titulo="Cómo funciona una tarjeta gráfica" 
                  contenido={<><p><br />Cada vez más vas sabiendo que es una tarjeta gráfica y ahora que conoces los componentes que la conforman y en especial la GPU, es el momento ideal para explicarte cómo funciona una tarjeta gráfica. Como ya te hemos explicado, la GPU es un micro-componente muy complejo con diferentes núcleos encargados de procesar la información. Y son precisamente la cantidad y la capacidad de estos lo que determinará la potencia de la tarjeta gráfica. Al contrario que con la CPU (procesador) la GPU tiene muchos núcleos con frecuencias bajas encargado cada uno de procesar un número muy grande de píxeles. Otro de los componentes que te habíamos mencionado antes es la GRAM (memoria gráfica de acceso aleatorio) y su función dentro de una tarjeta gráfica es la de almacenar y transportar información. Esta información pasa el RAMDAC, que viene a ser conversor de señal digital a señal analógica necesario para que el monitor de nuestro ordenador pueda interpretar la información que se le está enviando. Seguramente no hayas entendido ni la mitad de lo que te hemos explicado sobre cómo funciona una tarjeta gráfica, no te culpamos. Podríamos simplificar mucho y decir que para funcionar la tarjeta gráfica hace dos cosas: procesa los vértices, su ordenamiento espacial, su rotación, y qué segmentos de estos serán visibles gráficamente para transmitir luego esta información al monitor en un formato que pueda representar.</p>
                  <img src="https://img.pccomponentes.com/pcblog/1663884000000/caracteristicas-tarjeta-grafica.jpg" alt="Imagen Sección 3" />
                  </>} 
                />
              </>
            } 
          />
          <Route 
            path="/acerca" 
            element={<Seccion titulo="Acerca de Nosotros" contenido="AMD es el líder de computación de alto rendimiento y adaptable, que impulsa los productos y servicios que ayudan a resolver los desafíos más importantes del mundo. Nuestras tecnologías permiten avanzar en el futuro de los mercados de centros de datos, sistemas incorporados, experiencia de juego y PC. Fundada en 1969 como una start-up de Silicon Valley, el viaje de AMD comenzó con decenas de empleados enfocados en productos semiconductoresde última generación. AMD se convirtió en una empresa global que establece el estándar de la computación moderna, con muchas innovaciones importantes en el sector y grandes logros tecnológicos a lo largo del camino." />} 
          />
          <Route 
            path="/contacto" 
            element={<Seccion titulo="Contacto" contenido="Envíanos un mensaje sobre tus dudas para resolverlas." mostrarFormulario />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
