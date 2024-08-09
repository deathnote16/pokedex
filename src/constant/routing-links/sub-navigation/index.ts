type SubNavigationPath = {
  icon?: string;
  path?: string;
  title?: string;
};

export const subNavigationPath: SubNavigationPath[] = [
  {
    icon: '/images/icon/sub-navigation-icon/pokemon.png',
    title: 'Pokemon',
    path: '/'
  },
  {
    icon: '/images/icon/sub-navigation-icon/poke-abilities.png',
    title: 'Abilities',
    path: '/Abilities'
  },
  {
    icon: '/images/icon/sub-navigation-icon/poke-berries.png',
    title: 'Berries',
    path: '/Berries'
  },
  {
    icon: '/images/icon/sub-navigation-icon/poke-moves.png',
    title: 'Moves',
    path: '/Moves'
  },
  {
    icon: '/images/icon/sub-navigation-icon/pokemon-game.png',
    title: 'Games',
    path: '/Games'
  }
];
