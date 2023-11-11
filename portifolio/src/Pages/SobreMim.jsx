import React from "react";

import { motion } from "framer-motion";

const SobreMim = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sobre mim</h1>
      
    </motion.div>
  );
};

export default SobreMim;
