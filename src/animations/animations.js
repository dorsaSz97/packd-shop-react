const visibilityAnimation = {
  visible: {
    transform: 'translateY(0%) translateX(-50%)',
    opacity: 1,
    // transitionEnd: {
    //   display: 'block',
    // },
  },
  hidden: {
    transform: 'translateY(-100%) translateX(-50%)',
    opacity: 0,
    // transitionEnd: {
    //   display: 'none',
    // },
  },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 1.5,
    },
  },
};

export default visibilityAnimation;
