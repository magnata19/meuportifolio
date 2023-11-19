import styles from "./SobreMim.module.css";

import { motion } from "framer-motion";

import Eu from "../assets/eu.jpg";

const SobreMim = () => {
  return (
    <div className={styles.sobremim}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.minhaDescricao}>
          <div className={styles.minhaDescricaoCentro}>
            <img src={Eu} alt="minha foto" className={styles.minhaFoto} />
            <section>
              <p>
                Olá, sou Davidson Pacifico, natural de ubatuba-sp, cidade do
                litoral norte de São Paulo. Tenho 23 anos e sou uma pessoa
                apaixonada por viagens, música, jogos e por tecnologia.
                Atualmente estou fazendo faculdade de{" "}
                <strong>Análise e Desenvolvimento de Sistemas</strong> que a
                propósito estou gostando e aprendendo muito.
              </p>
            </section>
          </div>
        </div>
        {/* Hobbies */}
        <div className={styles.meusHobbies}>
          <h1>Hobbies</h1>
          <div className={styles.containerHobbies}>
            <h4>Jogos</h4>
            <p>
              Se tem uma coisa que gosto muito é de jogos, amo jogar e tudo que
              os jogos nos proporcionam, acho que é um momento único ao qual
              deixamos de lado todo nosso stress do dia a dia para ficar alguns
              minutos ou horas ali nos divertindo. =D
            </p>
            <p>Dito isso, irei listar alguns jogos ao qual gosto muito.</p>
            <ol>
              <li>Cabal Online</li>
              <li>Call of duty</li>
              <li>Gota.io</li>
              <li>DDTANK</li>
            </ol>

            <p>
              <strong>Cabal Online</strong> é um MMORPG, um jogo que jogo a
              muitos anos, participou muito da minha infância e da minha
              adolescência e até hoje jogo, pois é um jogo bom demaaaaais!!!
            </p>
            <p>
              <strong>Call of Duty</strong> é um jogo de FPS ao qual gosto
              muito, mas infelizmente os preços estão um pouco salgados kkkkkk,
              mas é um jogo que fez parte da minha adolescência e até hoje jogo,
              muito bom para desestressar( e estressar também).
            </p>
            <p>
              <strong>Gota.io </strong>é um jogo que não sei dizer bem a classe,
              mas é uma cópia de agar.io, um clássico. Joguei e jogo ainda esse
              jogo que básicamente de comer o oponente e crescer com os pontos
              que ele tinha e esse é o objetivo. kkk
            </p>
            <p>
              <strong>DDTANK</strong> é um clássico que participou da adolescência de muitas pessoas, até é um jogo que gosto muito, porém não jogo com tanta mais frequência.
            </p>
            <p>
              Além desses jogos, gosto tbm de GTA V, The crew, Mid Night Club, Def Jam, a saga GOW e muitos outros q se eu mencionar a lista vai ficar bem extensa.
            </p>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

export default SobreMim;
