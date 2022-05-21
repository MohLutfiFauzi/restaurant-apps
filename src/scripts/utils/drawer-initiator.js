const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', () => {
      this.show(drawer);
    });

    content.addEventListener('click', () => {
      this.close(drawer);
    });
  },

  show(drawer) {
    drawer.style.display = 'flex';
    drawer.style.top = '0';
  },

  close(drawer) {
    drawer.style.top = '-100%';
  },

};

export default DrawerInitiator;
