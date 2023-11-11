import styles from './Home.module.css'

import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Minha Home</h1>
    </motion.div>
  )
}

export default Home