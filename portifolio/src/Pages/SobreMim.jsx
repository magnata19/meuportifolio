import React from "react";
import styles from "./SobreMim.module.css";

import { motion } from "framer-motion";

const SobreMim = () => {
  return (
    <div className={styles.sobremim}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1>Sobre mim</h1>
      </motion.div>
    </div>
  );
};

export default SobreMim;
