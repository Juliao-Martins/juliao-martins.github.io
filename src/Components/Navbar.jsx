import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isHidde, setIsHidde] = useState(false);

  useEffect(() => {
    const handledNavClick = (e) => {
      if (!e.target.closest("#btn-toggle") && isHidde) {
        setIsHidde(false);
      }
    };

    document.addEventListener("click", handledNavClick);

    return () => {
      document.addEventListener("click", handledNavClick);
    };
  });

  const navItemLinks = ["Veranda", "Jornada", "Galeria", "Kontaktu"];

  const container = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        delayChildren: 0.35,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
  };

  return (
    <nav className="navbar">
      <h3 className="navbar_logo">Juli&atilde;o</h3>
      <div className="navbar_menu">
        <Button isHidde={isHidde} onIsHidde={setIsHidde}>
          {!isHidde ? <Hamburger /> : <Close />}
        </Button>
        <AnimatePresence>
          {isHidde && (
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="navbar_menu_list"
            >
              {navItemLinks.map((link, ndx) => (
                <motion.li variants={item} key={ndx} className="menu_list_item">
                  <a href="#" className="menu_list_link">
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function Button({ children, onIsHidde, isHidde }) {
  return (
    <button
      id="nav-btn"
      className="relative z-20"
      onClick={() => onIsHidde(!isHidde)}
    >
      {children}
    </button>
  );
}

function Hamburger({ isHidde, onIsHidde }) {
  return (
    <motion.svg
      id="btn-toggle"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="nav-btn w-6 h-6"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </motion.svg>
  );
}

function Close({ isHidde, onIsHidde }) {
  return (
    <svg
      id="btn-toggle"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="nav-btn w-6 h-6"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
