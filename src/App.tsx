import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Projects from './components/Projects'
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <motion.div

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          <Home />
        </motion.div>
      </section>

      <section id="profile">
        <motion.div

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          <Profile />
        </motion.div>
      </section>

      <section id="projects">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          <Projects />
        </motion.div>
      </section>

      <section id="contact">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </section>
    </>
  );
}