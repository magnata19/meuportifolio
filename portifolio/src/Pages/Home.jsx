import styles from "./Home.module.css";

import { motion } from "framer-motion";

import minhaFoto from "../assets/eu.jpg";
import ubatubaSP from "../assets/ubatubasp.jpeg";

import Typewritter from 'typewriter-effect'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.apresentacao}>
        <div className={styles.introducao}>
          <h1><Typewritter
          onInit={(typewritter) => {
            typewritter.typeString("Ubatuba - SP").start()
          }}
          /></h1>
          <p>
            Já parou pra pensar que as vezes moramos em lugares maravilhosos e
            as vezes nem nos damos conta disso ? Pois é, as vezes isso pode
            acontecer, mas vamos falar dessa belezinha aqui,eu. Brincadeira,
            Ubatuba-SP é uma cidade maravilhosa de se viver e super visitada
            mensalmente por milhares de turistas.
          </p>
          <p>
            Mas afinal, o que isso tem haver com programação ? Bom, é isso que
            irei mostrar logo abaixo.
          </p>
        </div>
      </div>
        {/* segunda seção */}
      <div className={styles.informacao}>
        <div className={styles.minhaArea}>
          <img src={minhaFoto} alt="eu" className={styles.minhaFoto} />
        </div>
        <div className={styles.minhaHistoria}>
          <h3>
            Bom, se você desceu aqui é porque ficou curioso, bom deixe contar
            uma leve história sobre mim.
          </h3>
          <p>
            Me chamo Davidson, tenho 23 anos e sempre fui morador dessa
            magnifica cidade, achou q ia falar sobre tecnologia, né ? E vou, mas
            vamos por etapas, afinal, do que adianta falar sobre tecnologia sem
            nem antes me apresentar ?
          </p>
          <p>
            Primeiramente queria compartilhar a foto acima de onde moro, como
            podem ver é um lugar incrível não é mesmo? Ubatuba é uma cidade
            pequena e com isso as coisas acabam sendo mais difíceis. Não temos
            grandes empresas e nem faculdades presenciais, mas isso não é
            desculpa para não estudar.
          </p>
          <p>
            Desde criança sempre fui apaixonado por computadores e vídeo games e
            sempre quis saber como funcionavam mas nunca parei para analisar de
            verdade, até que no ínicio de 2023 conheci a programação e foi amor
            a primeira vista.
          </p>
          <p>Percebi que quanto mais eu estudava, mais queria aprender. </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
