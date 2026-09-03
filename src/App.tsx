import { type ReactNode } from "react";
import { motion } from "framer-motion";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Reveal>
        <Home />
      </Reveal>
      <Reveal>
        <Profile />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}