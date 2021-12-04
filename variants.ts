export const fadeInUp = {
  initial: { opacity: 0, y: "10vh" },
  animate: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
  exit: { opacity: 0 },
};

export const slideInRight = {
  initial: { opacity: 0, x: "-10vh" },
  animate: { opacity: 1, x: 0, transition: { ease: "easeOut", duration: 1 } },
  exit: { opacity: 0 },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
